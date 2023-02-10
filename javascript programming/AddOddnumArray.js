var arr=[78,5,4,3,3,9,45,12]
var add=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        add=add+arr[i]
    }
}
console.log(add);