const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://api.mailgun.net/v3",
      changeOrigin: true
    })
  );
};
