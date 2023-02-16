/*(DONE)  15-02-23

"use strict"

const obj={
    name: "abc"
}
Object.freeze(obj)
console.log(obj.name="def");
//o/p= Cannot assign to read only property 'name' of object '#<Object>'

*/
/*

const obj={
    name: "abc"
}
Object.freeze(obj)
console.log(obj.name="def");
//o/p=def
*/