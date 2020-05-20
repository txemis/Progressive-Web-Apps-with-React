
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/",
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


    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/public/index.html", 
        })
    ],



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

    //Podría haber un módulo de Dev server para facilitar el desarrollo
    //Lo he evitado aquí

};


