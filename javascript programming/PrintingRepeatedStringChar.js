var str='testyantra'

for (var i = 0; i < str.length; i++) {
    var count=0;
for (var j = 0; j < str.length; j++) {
    if (str[i]==str[j]) {
        if(j<i)
        {
            break;
        }
        count++;
    }
    
}
if(count>=1)
//if(count>1)
{
    console.log(str[i]+"  "+count);
}
   }
    
