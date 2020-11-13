<<<<<<< HEAD
基础的webpack 只能处理js 
要解决css,jpn,scss等等别的文件需要loder的扩展
每一种文件对应一种
此处介绍css、less、图片\   es6转es5语法的loder
思想:将其也看作module


 style-loader, css-loader,url-loader,file-loder,babel-loader
=======
# 基础的webpack 只能处理js 

# 要解决css,jpn,scss等等别的文件需要loder的扩展

# 每一种文件对应一种此处介绍css

# 思想:将其也看作module



到官网查找对应loader:
` npm install --save-dev css-loader `
此处版本太高报错

我又降级。3.2.0

发现仍不起作用

添加style-loader

ok!

>>>>>>> 09a41fdfe514f5860552a9b33184f67f1a7f0ee2
