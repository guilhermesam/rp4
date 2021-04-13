const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:3333',
        secure: false,
        log: 'debug',
        pathRewrite:{ '^/api': ''}
    }
];

module.exports = PROXY_CONFIG;

