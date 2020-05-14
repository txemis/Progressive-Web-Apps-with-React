const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);




exports.sendNotifications = functions.database
    .ref('/messages/{messageId}')
    .onWrite(event => {

        const snapshot = event.data;
        if (snapshot.previous.exist()) {
            console.log('previous existe!!!');
            console.log(snapshot.previous.val());
            if (snapshot.previous.val()) {
                return;
            }    
        }

        const payload = {
            notification: {
                title: `${snapshot.val().author}`,
                body: `${snapshot.val().msg}`,
                icon: 'assets/icon.png',
                click_action: `https://${functions.config().firebase.authDomain}`
            }
        };

        return admin
            .database()
            .ref('fcmTokens')
            .once('value')
            .then(allTokens => {
                if (allTokens.val()) {
                    const tokens = [];
                    for (let fcmTokenKey in allTokens.val()) {
                        const fcmToken = allTokens.val()[fcmTokenKey];
                        if (fcmToken.user_id !== snapshot.val().user_id) {
                            tokens.push(fcmToken.token);
                        }
                    }
                    if (tokens.length > 0) {
                        return admin
                        .messaging()
                        .sendToDevice(tokens, payload)
                        .then(response => {
                            const tokensToRemove = [];
                            response.results.forEach((result, index) => {
                                const error = result.error;
                                if (error) {
                                    console.error(
                                        'Failure sending notification to',
                                        tokens[index],
                                        error
                                    );
                                    if (
                                        error.code === 'messaging/invalid-registration-token' ||
                                        error.code === 'messaging/invalid-registration-token-not-registered'
                                    ) {
                                        tokensToRemove.push(
                                            allTokens.ref.child(tokens[index]).remove()
                                        );
                                    }

                                }
                            });
                            return Promise.all(tokensToRemove);
                        });
                    }
                
                }
            });
    });


    
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

