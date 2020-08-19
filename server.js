const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') { // not in production => use webpack
    const webpackMiddleWare = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleWare(webpack(webpackConfig))); // tell express to use the webpack middleware
} else {
    app.use(express.static('dist')); // open up dist dir with express
    app.get('*', (req, res) => { // react router
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.listen(process.env.PORT || 3050, () => console.log('Listening')); // use provider port or 3050 port