//13/02/2023(DONE)
//Promises
async function sync() {
    console.log("login to application");
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("in progress")
            reject("rejected")
        },3000)
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("clicked")
            reject("rejected")
        },1000)
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("logout from the application");
}
sync()