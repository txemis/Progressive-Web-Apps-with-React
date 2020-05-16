module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        //path: __dirname + "/public",   //cambiamos para producción
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "./",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader' ,
                        options: {
                            presets: ['es2015','react'],
                            plugins: [/**'react-hot-loader/babel',**/'transform-class-properties']
                        }
                }
                
            },
            /**
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
            **/
        ]
        
    },


    /**
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react'],
                    plugins: ['transform-class-properties']
                }
            },
        ]
    },**/
};


