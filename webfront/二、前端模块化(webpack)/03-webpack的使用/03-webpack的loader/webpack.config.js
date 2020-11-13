const path = require('path')
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css只负责家在不负责解析，也不负责生效
        use: [ 'style-loader', 'css-loader', ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader", options: {
                strictMath: true,
                noIeCompat: true
            }
        }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit时，加载为base64的字符串
              limit: 15000,
              name:'img/[name].[hash:8].[ext]'
            },
           

          }
        ]
      },
     
    ]
  }
}