const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/products',
    createProxyMiddleware({
      target: 'http://localhost:8082',
      changeOrigin: true,
      pathRewrite: {
        '^/api/products': '/ecommerce/products',
      },
    })
  );

  app.use(
    '/api/cart',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true,
      pathRewrite: {
        '^/api/cart': '/ecommerce/addToCart',
      },
    })
  );

  app.use(
    '/api/user',
    createProxyMiddleware({
      target: 'http://localhost:8083',
      changeOrigin: true,
      pathRewrite: {
        '^/api/user': '/ecommerce/user',
      },
    })
  );
};
