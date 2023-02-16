var str="good morning welcome to javascript session"
function toCheckVowels(str){
var str1=str.split(" ")
//console.log(str1);

for(let i=0;i<str1.length;i++)
{
  // console.log(str1[i]);
  if('aeiou'.includes(str1[i].charAt(2)) && str1[i].length>=3)
  {
   process.stdout.write((str1[i].charAt(0).toUpperCase()+str1[i].slice(1)+" "))
  }
  else{
   process.stdout.write(str1[i]+" ")
  }

}
}
toCheckVowels("good morning orange to javascript beauty")

//o/p-->Good morning Orange to javascript Beauty
