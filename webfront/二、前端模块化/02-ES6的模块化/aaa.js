let name = '小明'
let age = 18
let flag = true

function sun(a,b){
  return a+b
}

if(flag){
  console.log(sun(20,34))
}


//1.导出方式一
export{flag,sun}
//2.导出方式二
export let num = 1000
//3.导出函数
export function mul(a,b){
return a*b
}
// 4.导出类    class关键字 es6中的写法
export class  Preson{
  run(){
    console.log("在跑")
  }
}
//5.export default  默认导出只能有一个
const address = '北京市'
export default address