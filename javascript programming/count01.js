//10/02/23
var arr=[0,1,0,0,1,1,1]
countz=0;
counto=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==0)
    {
        countz=countz+1;
    }
    else
    {
        counto=counto+1;
    }
}
console.log("number of zeros: "+countz);
console.log("number of ones: "+counto);
