import path from 'path';
import { fileURLToPath } from 'url'; 
import nodeExternals from 'webpack-node-externals';

export default {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(fileURLToPath(import.meta.url), '..', 'dist'), 
        filename: 'server-bundle.cjs'
    },
    target: 'node',
    externals: [nodeExternals()],
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
                test: /\.pug$/,
                use: 'pug-loader'
            },
        ]
    },
    resolve: {
        fallback: {
            "path": false, "crypto": false, "buffer": false, "stream": false, "util": false,
            "querystring": false, "string_decoder": false, "fs": false, "url": false,
            "http": false, "https": false, "net": false, "zlib": false, "async_hooks": false,
            "events": false, "assert": false, "constants": false, "tty": false, "os": false,
            "vm": false, "child_process": false, "tls": false, "dgram": false, "dns": false,
            "cluster": false, "module": false, "repl": false, "readline": false, "perf_hooks": false,
        }
    },
    plugins: []
};