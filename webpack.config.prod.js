const base = require('./webpack.config');

const config = JSON.parse(JSON.stringify(base));

config.mode = 'production';

module.exports = config;