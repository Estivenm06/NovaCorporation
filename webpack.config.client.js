import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export default {
    mode: 'production', 
    target: 'web', 

    entry: './public/js/client.js', 

    output: {
        path: path.resolve(fileURLToPath(import.meta.url), '..', 'public', 'js'), 
        filename: 'client-bundle.js', 
        publicPath: '/js/', 
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../styles/client-bundle.css', 
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), 
        ],
    },
};