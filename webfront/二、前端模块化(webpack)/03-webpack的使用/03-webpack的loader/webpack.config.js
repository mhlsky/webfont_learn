const path = require('path')
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
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
      }
    ]
  }
}