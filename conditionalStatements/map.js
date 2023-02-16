//14-02-23
//(DONE)

var arr=[3,5,1,7,2]
// arr.map((element)=>
// {
//     result=element*3
//     console.log(result);
// })

// //o/p-->
// 9
// 15
// 3
// 21
// 6
console.log(arr.concat([8,9]));
console.log(arr);
console.log(arr.unshift(51));
console.log(arr);
console.log(arr.shift());
console.log(arr);

/*o/p-->

[
  3, 5, 1, 7,
  2, 8, 9
]
[ 3, 5, 1, 7, 2 ]
6
[ 51, 3, 5, 1, 7, 2 ]
51
[ 3, 5, 1, 7, 2 ]

*/