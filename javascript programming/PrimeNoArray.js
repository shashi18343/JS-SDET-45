//(DONE)  10-02-23
//Print the prime numbers present in the array

var arr=[15,7,56,41,48,2,9]
let arr1=[]
for(let i=0;i<arr.length;i++)
{
    let count=0;
    for(let j=1;j<=arr[i]/2;j++)
    {
        if(arr[i]%j==0)
        {
            count=count+1;
        }
    }
    if(count==1)
    {
        arr1=arr1+arr[i]+" "
    }
  
}
console.log("Prime numbers in the array are: "+arr1);