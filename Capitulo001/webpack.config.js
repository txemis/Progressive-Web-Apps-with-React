module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
    },
};
