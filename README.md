# IE 에서 실행될 수 있도록 webpack 설정하기

## 필요한 package

```bash
yarn add -D webpack webpack-cli babel-loader @babel/core @babel/preset-env core-js
```

## webpack.config.js 설정

```javascript
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
            // babel-loader 설정, IE에서 동작되도록 js 파일을 트랜스파일링 하고 ie 에서 지원되지 않는 메소드나 객체를 메꿔줨(polyfill)
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
```

## .browserslistrc 생성

.browserslistrc 생성하고 아래와 같이 설정하면 webpack 에서 인식한 후 알아서 polyfill 로 메꿔준다.

지원되는 브라우저 목록을 확인하려면 npx browserslist 를 하면 확인할 수 있다.

```
last 3 versions
> 0.7%
```

## build

```
yarn build
```
