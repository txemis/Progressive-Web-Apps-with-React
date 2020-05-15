export default class NotificationResource {
    allTokens =[];
    tokensLoaded = false;
    user = null;

    constructor(messaging, database) {
        this.database = database;
        this.messaging = messaging;
        try {
            this.messaging
            .requestPermission()
            .then(res => { console.log('Permiso concedido para recibir mensajes')})
            .catch(err => { console.log('sin acceso a mensajes', err)})

        } catch(err) {
            console.log('No notification support.', err)
        };

        this.setupTokenRefresh();

        this.database.ref('/fcmTokens').on('value', snapshot => {
            this.allTokens = snapshot.val();
           // console.log('tokens guardados:', snapshot.val());
            this.tokensLoaded = true;
        } );


    };

    setupTokenRefresh() {
        this.messaging.onTokenRefresh(() => {
            this.saveTokenToServer();
        });
    }

    saveTokenToServer() {
        this.messaging.getToken().then(res => {
            //console.log('mi token2:', res);
            if (this.tokensLoaded) {
                const existingToken = this.findExistingToken(res);
                if (existingToken) {
                    //console.log('mi token existente: ', existingToken);
                    firebase
                    .ref('/fcmTokens/${existingToken')
                    .set({
                        token: res,
                        user_id: this.user.uid
                    });
                    //replace existing token
                } else {
                    this.registerToken(res);
                    //create a new one
                }
            }
            //Get token
            //Look for existing token
            //If it exist, replace
            //Otherwise, create a new one
        } );
    }

    registerToken(token) {
        firebase
        .database()
        .ref('fcmTokens/')
        .push({
            token: token,
            user_id: this.user.uid
        });
    }


    findExistingToken(tokenToSave) {
        for (let tokenKey in this.allTokens) {
            const token = this.allTokens[tokenKey].token;
            if (token === tokenToSave) {
                return tokenKey;
            }
            return false;
        }
    }

    changeUser(user) {
        this.user = user;
        this.saveTokenToServer();
    }
    
}