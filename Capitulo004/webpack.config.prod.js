var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
                            plugins: [/**'react-hot-loader/babel',**/'transform-class-properties'],
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/public/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
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
};


