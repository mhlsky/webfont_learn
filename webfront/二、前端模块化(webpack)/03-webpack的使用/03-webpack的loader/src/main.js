const {add,mul} = require('./js/mathUtil')

console.log(add(20,30));
console.log(mul(20,30));
import { name,age,height} from "./js/info"
console.log(name);
console.log(age);
console.log(height);


//依赖css文件
require('./css/normal.css') 

//依赖less文件
require('./css/speacial.less')
document.writeln('<h2>你好，mhlsky!</h2>')
