//(DONE)
//Print the reverse of each word of the given string
// const str = 'I am an employee of Testyantra';
// const rev = str => {
//    const arr = str.split(" ");
//    const revS = arr.map(x => {
//       return x.split('').reverse().join("");
//    });
//    return revS.join(" ");
// };
// console.log(rev(str));

/*
var str="java is good"
var arr=str.split(" ")
//console.log(arr);
var arr1=''
var arr2=''
for (let i = 0; i < arr.length; i++) {
    arr1=arr[i]
   for(let j=arr1.length-1;j>=0;j--)
   {
      arr2=arr2+arr1[j]
   }
   arr2=arr2+" "
}
console.log(arr2);
*/

function reverseOfEachWord(str) {

   for (let i = 0; i < str.length; i++) {
     
      var arr1=str[i]
     for(let j=arr1.length-1;j>=0;j--)
     {
     var arr2=arr2+arr1[j]
     }
     arr2=arr2+" "
  }
 
   return arr2
}
console.log(reverseOfEachWord("shashi kumar"))
