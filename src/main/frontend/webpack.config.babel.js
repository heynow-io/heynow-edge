import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import _ from 'lodash';
import * as properties from './webpack/properties';
import pkg from './package.json'

const BUILD_DIR = path.resolve(__dirname, properties.dirs.BUILD);
const APP_PATH = path.resolve(__dirname, properties.dirs.SOURCE);
const TARGET = process.env.npm_lifecycle_event;
const STYLES_PATH = [
    path.join(__dirname, 'node_modules', 'animate.css'),
    path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.css'),
    path.join(__dirname, 'node_modules', 'font-awesome', 'css', 'font-awesome.css'),
    path.join(__dirname, properties.dirs.STYLES, 'main.css'),
    path.join(__dirname, properties.dirs.STYLES, 'style.css'),
];

const common = {
    entry: {
        app: APP_PATH,
        styles: STYLES_PATH,
        vendor: _.without(Object.keys(pkg.dependencies), 'animate.css', 'bootstrap', 'font-awesome'),
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        publicPath: '/',
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    eslint: {
        emitWarning: true,
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=25000',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=public/fonts/[name].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'heynow-edge',
            template: require('html-webpack-template'),
            filename: 'index.html',
            appMountId: 'root',
            inject: false,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    node: {
        fs: "empty",
        proxyquire: "empty",
    },
};

switch (TARGET) {
    case 'build':
        module.exports = merge(common, {
            devtool: 'source-map',
            output: {
                path: BUILD_DIR,
                filename: '[name].[chunkhash].js',
                chunkFilename: '[id].[chunkhash].js',
            },
            plugins: [
                new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js')
            ],
        });
        break;
    default:
        module.exports = merge(common, {
            devtool: 'eval-source-map',
            devServer: {
                historyApiFallback: true,
                inline: true,
                stats: 'errors-only',
                host: properties.server.HOST,
                port: properties.server.PORT,
                proxy: properties.DEV_PROXY
            }
        });
        break;
}