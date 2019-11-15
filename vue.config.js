module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    open: true,
    before: function (app, server) {
      require('./mock')(app);
    }
  }
};
