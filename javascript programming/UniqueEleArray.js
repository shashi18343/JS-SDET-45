var arr=[48,5,85,2,1,2,48,7,65,85]
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]==arr[i])
        {
            arr[j]=0
        }
    }
}
for (var k = 0; k < arr.length; k++) 
{    
   if (arr[k]!=0)
   { 
  process.stdout.write(arr[k]+" "); 
      }     
} 