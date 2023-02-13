/*(DONE)
CALLBACK FUNCTION
A callback function can be defined as a function passed into another function as a parameter.
 Don't relate the callback with the keyword, as the callback is just a name of an argument that is passed to a function.
In other words, we can say that a function passed to another function as an argument is referred to as a callback function. 
The callback function runs after the completion of the outer function. It is useful to develop an asynchronous JavaScript code.
In JavaScript, a callback is easier to create. 
That is, we simply have to pass the callback function as a parameter to another function and call it right after the completion of the task. 
Callbacks are mainly used to handle the asynchronous operations such as the registering event listeners, fetching or inserting some data into/from the file, and many more.
*/

/*
function add(data1,data2) {
  let d=data1+data2;
  console.log("result after adding: "+d);
}

function difference(data1,data2) {
  let d1=data1-data2;
  console.log("result after substraction: "+d1);
}

function combi(data1,data2,callback) {
    console.log(data1,data2);
    callback(data1,data2);
    console.log("calling back function passed");
}

// add(4,3)
// difference(4,3) 

combi(4,3,difference)
combi(4,3,add)

*/

function iHomeR() 
{
  console.log("user has successfully registered his home");
}
function aparReg()
{
  console.log("user has successfully registered his apartment");
}

function register(name) {

  if(name=='iHomeR')
  {
    return iHomeR()
  }
  else if(name=='aparReg')
  {
return aparReg()
  }
  else
  {
    console.log("could not find user");
  }
}

register('iHomeR')