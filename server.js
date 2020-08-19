const express = require('express');
const webpackMiddleWare = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();

app.use(webpackMiddleWare(webpack(webpackConfig))); // tell express to use the webpack middleware

app.listen(3050, () => console.log('Listening'));