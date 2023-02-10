var arr=[2,8,56,57,48,75,9]
var eNo=[]
var oNo=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        eNo.push(arr[i])
    }
    else{
        oNo.push(arr[i])
    }
}
console.log(eNo);
console.log("even no.= "+eNo);
console.log(oNo);
console.log("odd no.= "+oNo);