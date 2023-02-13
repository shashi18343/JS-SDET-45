var x=0
var y=1

var z=0
var n=15
console.log("Fibonacci series upto 15");
for(let i=0;i<n;i++)
{
    if(i<=1)
    z=i
    else{
    z=x+y
       x=y
       y=z
      
    }
    console.log(z);
}