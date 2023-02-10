//to empty an array using looping statements

var arr=[2,4,5,7,1,2,3];
while (arr.length>0) {
    arr.pop();
    
}
console.log(arr);

//to empty an array using inbuid methods
//1.Using empty array
let arr1=[2,4,5,7,1,2,3];
let array=arr1
arr1=[]
console.log(arr1);
console.log(array);

//2.Using length
let arr2=[2,4,5,7,1,2,3];
console.log(arr2);
arr2.length=0
console.log(arr2);

//3.Using splice
let arr3=[2,4,5,7,1,2,3];
arr3.splice(0,arr3.length)
console.log(arr3);