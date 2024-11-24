const path = require('path');

module.exports = {
  runtimeCompiler: true,

  // Configure HTML title
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'e-setup'; // Set the HTML title
        return args;
      });
  },

  // Add alias
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Use path.resolve instead of import.meta
      },
    },
  },

  // Configure devServer to handle API calls with changed origin
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_URL, // Use process.env for environment variables
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': 'api/', // Correct path rewriting
        },
      },
    },
  },
};
