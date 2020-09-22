const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        quiet: true,
        watchOptions: {
            ignored: /node_modules/,
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devtool: 'inline-source-map',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
    },
};
