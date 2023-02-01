
//array1
var array=["Organization",'shashi',7063278343,2000]
var lengthofA=array.length

//array2(another type of array)
var arr2=new Array('shashi',789,'org')


//foreach
/*
array.forEach((index) => {
    console.log(index);
    
});


console.log(arr2);     //return the values in the from of array [ 'shashi', 789, 'org' ]
console.log("length of array is:  "+arr2.length);
console.log("value present is :"+arr2[2]);
*/

//type array3 (reason we should not use array2 to store data as)

var array21=new Array(3)
var array3=new Array(3,4)
const array4=new Array('shashi',7063278343)
/*
console.log(array21); //it will take the data as length of the array so we will not use this object creation to declare the array
console.log(array21.length);
console.log(array21[2]);  //undefined
console.log(array21[0]);  //undefined
console.log(array3);    //[ 3, 4 ]
console.log(array3.length);   //2
console.log(array3[1]);      //4
*/

//for loop example
/*
for (let index = 0; index < array.length; index++) {
    console.log(index+"  "+array[index]);
}
*/


//while loop
/*
var index=0
while (index<=array.length) {
    console.log(index+"     "+array[index]);
    index++
    
}
*/

//do while
/*
var index=0;
do {
    console.log(array[index]);
} 
while (index>array.length);
index++
*/

//forin loop
/*
for (const index in array) {
    
    console.log(index+"  "+array[index]);
    }
*/

    //forof loof
    /*
    for (const index of array) {
        console.log(index);
        
    }
    */