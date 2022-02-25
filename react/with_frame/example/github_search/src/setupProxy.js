const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    createProxyMiddleware('/api1', {
        target: 'http://localhost:9000',
        changeOrigin: true,
        pathRewrite: {'^api1': ''}
    })
}