
let publicPath = ''

if (process.env.NODE_ENV === 'production') {
  publicPath = 'https://img.hidongtv.com/hidong-live-h5/'
}

module.exports = {
  publicPath,

  runtimeCompiler: true,

  devServer: {
    proxy: '' // 代理地址
  }
}
