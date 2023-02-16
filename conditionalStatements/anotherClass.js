// //(DONE)13-02-2023
// let importClass=require(".\anotherClass")
// console.log(importClass.a);
// class inheritClass{
//     r=45
// }
// inheritData=new inheritClass()
// console.log(inheritData.r);

//(DONE)13-02-2023
let importClass=require("./inheritClass")
console.log(importClass.a);

class inheritClass{
    r=45
}
inheritData=new inheritClass()
console.log(inheritData.r);