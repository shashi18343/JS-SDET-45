// //14-02-23
//(DONE)

// //(using break)
// let arr=[7,8,2,4,6,9,3,1,2,5,8]
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==2)
//     {
//     break
//     }
//     console.log(arr[i]);
// }

// o/p-->
// 7
// 8

//(using continue)
let arr=[7,8,2,4,6,9,3,1,2,5,8]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==2)
    {
   continue
    }
    console.log(arr[i]);
}

o/p-->
7
8
4
6
9
3
1
5
8