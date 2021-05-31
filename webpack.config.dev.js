const base = require('./webpack.config');

const config = JSON.parse(JSON.stringify(base));

config.mode = 'development';
config.devtool = 'inline-source-map';
config.devServer = {
    contentBase: './dist',
    port: 8000
};


module.exports = config;