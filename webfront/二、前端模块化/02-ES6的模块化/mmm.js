
//引入方式
import{flag,num,mul,Preson} from "./aaa.js"

//统一全部导入
import * as aaa from "./aaa.js"
(new Preson).run()
if(flag){
  console.log("小明是天才" ,num,mul(3,6))
}
// 获取默认导出的不需要加花括号，可以自己命名
import add from "./aaa.js"
// console.log(add)
console.log(aaa.flag)