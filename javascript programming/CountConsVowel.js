var name1="TestYantra";
var cCount=0;
var vCount=0;
var name2=name1.toLowerCase();

for(var i=0;i<name2.length;i++)
{
    if(name2.charAt(i)=='a'||name2.charAt(i)=='e'||name2.charAt(i)=='i'||name2.charAt(i)=='o'||name2.charAt(i)=='u')
    {
        vCount++;
    }
    
    else //if(name2.charAt(i)!=' ')
    {
        cCount++;
    }

}
console.log("number of vowel present :"+vCount);
console.log("number of consonent present :"+cCount);