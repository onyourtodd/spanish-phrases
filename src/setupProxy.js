const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/phrases', {
            target: 'https://www.stands4.com/services/v2',
            changeOrigin: true
        })
    )
}