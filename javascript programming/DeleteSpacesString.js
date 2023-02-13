//(DONE)
//Delete spaces from a String


//Using inbuild method
function removeSpaces() {
    originalText =
        "I am an employee of Testyantra";
  
    removedSpacesText =
        originalText.split(" ").join("");
  return removedSpacesText
}

console.log(removeSpaces());  //IamanemployeeofTestyantra


//not using in-build methods
var str='I am an employee of Testyantra'
let str1=""
for(let i=0;i<str.length;i++)
{
    if(str[i]!=" ")
    {
        str1=str1+str[i]
    }
   
}
console.log(str1);   //IamanemployeeofTestyantra
