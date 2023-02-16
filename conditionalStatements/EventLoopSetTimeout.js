//13-02-23
console.log("start");

setTimeout(()=>{console.log("progress");},2000)

setTimeout(()=>{console.log("progressing");},4000)

setTimeout(()=>{console.log("progressed");},3000)

console.log("end");

/*o/p-->
start
end
progress
progressed
progressing
*/