const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8088',
        changeOrigin: true,
        logLevel: "debug",
      }
    },
    
  }
})
module.exports = {
  configureWebpack: {},
  devServer:{
    host: '192.168.1.113',
    port: '8080',
    hot: true,
    public: '192.168.1.113:8080',//主要代码
    // disableHostCheck: true,
  }
}