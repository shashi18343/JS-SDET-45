//(DONE)

//Array methods

let arr1=[1,2,3,4,5,6,7,8,9]
let arr2=[5,4,3,2,1]

// console.log(arr1)
// console.log(arr2);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//concat
console.log(arr1.concat(arr2));  //prints directly the concatinated array
// [
//   1, 2, 3, 4, 5, 6,
//   7, 8, 9, 5, 4, 3,
//   2, 1
// ]

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//push
console.log(arr1.push('shashi'));  //op-10  printing the length of array including the added var
console.log(arr1); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'shashi' ]

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//pop
console.log(arr1); //will print the initial array
console.log(arr1.pop()); //will return the last element of array

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//join
console.log(arr1.join('*'));  //concat each element of the array with * without modifying the initial array 1*2*3*4*5*6*7*8*9
console.log(arr1);//[1,2,3,4,5,6,7,8,9]

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//shift
console.log(arr1.shift());//1 Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr1); //[2,3,4,5,6,7,8,9]

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//unshift
console.log(arr1.unshift(10));//10 Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr1); //[10,1,2,3,4,5,6,7,8,9]

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

function ageof(age) {
   // const items=[49,59,79];
    
    return age>3
}

// find
console.log(arr1.find(ageof));  //4 Returns the value of the first element in the array where predicate is true, and undefined otherwise.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//filter
console.log(arr1.filter(ageof)); //[ 4, 5, 6, 7, 8, 9 ] Returns the elements of an array that meet the condition specified in a callback function.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//include
console.log(arr1.includes(2)); //true Determines whether an array includes a certain element, returning true or false as appropriate.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//tostring() 
console.log(arr1.toString());  //1,2,3,4,5,6,7,8,9   Returns a string representation of an array.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//sort()
console.log(arr1.sort((a,b)=>b-a));  // [9,8,7,6,5,4,3,2,1]  Sorts an array in place.
console.log(arr1.sort((a,b)=>a-b));  //[1,2,3,4,5,6,7,8,9]  Sorts an array in place.  
console.log(arr1.sort((a,b)=>{return (a-b)}));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//findIndex()
console.log(arr1.findIndex(ageof));  //3 Returns the index of the first element in the array where predicate is true, and -1 otherwise

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//slice
console.log(arr1.slice(2)); //[3,4,5,6,7,8,9] Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//splice
console.log(arr1.splice(2,4)); //[ 3, 4, 5, 6 ]  Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//includes
console.log(arr1.includes(4,1));  //true  Determines whether an array includes a certain element, returning true or false as appropriate.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//lastIndexOf()
console.log(arr1.lastIndexOf(7));  //6 Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

//--------------------------------------------------------------------------------------------------------------------------------------------------------

