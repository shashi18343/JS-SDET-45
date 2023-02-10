//using regrex and javascript match()method to get the rest string in array

// const uc="I am an employee of Testyantra"

// const uppercaseStr=uc.match(/[A-Z]/g, ' ');
// console.log(uppercaseStr);


//Using function
// function countUpperCase(str)
// {
//     var count=0,len=str.length;
//     for(var i=0;i<len;i++)
//     {
//         if(/[A-Z]/g,test(str.charAt(i)))
//         count++;
//     }
//     return count;
// }
// countUpperCase('I am an employee of Testyantra')
// console.log(countUpperCase());

var str='I am an employee of Testyantra'
var cCount=0;
for(let i=0;i<str.length;i++)
{
    if(str[i]>='A' && str[i]<='Z')
cCount=cCount+1;
}
console.log(cCount);