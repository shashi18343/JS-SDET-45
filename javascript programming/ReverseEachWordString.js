//(DONE)
//Print the reverse of each word of the given string
const str = 'I am an employee of Testyantra';
const rev = str => {
   const arr = str.split(" ");
   const revS = arr.map(x => {
      return x.split('').reverse().join("");
   });
   return revS.join(" ");
};
console.log(rev(str));