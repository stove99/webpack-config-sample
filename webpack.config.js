const path = require('path');

// development 버전으로 빌드할려면 NODE_ENV 변수를 development 로 설정하면 됨
const mode = process.env.NODE_ENV || 'production';

module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { debug: true, useBuiltIns: 'usage', corejs: '3.10' }]],
                    },
                },
            },
        ],
    },
};
