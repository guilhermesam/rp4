const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://rp4-backend.herokuapp.com',
        secure: false,
        log: 'debug',
        pathRewrite:{ '^/api': ''}
    }
];

module.exports = PROXY_CONFIG;

