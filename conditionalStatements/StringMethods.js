/* // (DONE)
//String methods
// 1.by string literals
var str="    This is String literal"
var str1="This is String literal"
console.log(str);

//2.by using string object
var strO=new String('using string object');
console.log(strO);

//methods of string

//1.charAt()
console.log(str1.charAt(2));
//------------------------------------------------
//2.charCodeAt()
console.log(str1.charCodeAt(6));
//------------------------------------------------
//3.concat()
console.log(str.concat(' example'));
//------------------------------------------------
//4.indexOf()
console.log(str.indexOf('l'));
//------------------------------------------------
//5.lastIndexOf()
console.log(str.lastIndexOf('s'));
//------------------------------------------------
//6.search()
console.log(str.search('string'));  //will indicate the starting index of the asked string
//------------------------------------------------
//7.match()
console.log(str.match('is'));  //[ 'is', index: 2, input: 'this is string literal', groups: undefined ]
//------------------------------------------------
//8.replaceAll()
console.log(str.replaceAll('i','g'));
//------------------------------------------------
//9.substr()
console.log(str.substr(5));
//------------------------------------------------
//10.slice()
console.log(str.slice(6,9));
//------------------------------------------------
//11.toLowerCase()
console.log(str.toLowerCase());
//------------------------------------------------
//12.toLocaleLowerCase()
console.log(str.toLocaleLowerCase());
//------------------------------------------------
//13.toUpperCase()
console.log(str.toUpperCase());
//------------------------------------------------
//14.toLocaleUpperCase()
console.log(str.toLocaleUpperCase());
//------------------------------------------------
//15.toString()
console.log(str.toString());
//------------------------------------------------
//16.valueOf()
console.log(str.valueOf(''));
//------------------------------------------------
//17.split()
var arr=str.split("")
//------------------------------------------------
// console.log(arr);
console.log(str.split(' ',2));//(wrong)//  Split a string into substrings using the specified separator and return them as an array
//------------------------------------------------
//19.trim()
console.log(str.trim()); //will remove the space from starting and end
//------------------------------------------------
//20.replace()
console.log(str.replace('i','z')); //replace the first occurence char
//------------------------------------------------
//21.localeCompare()
console.log(str.localeCompare(str1));  //0-true,1-false
//------------------------------------------------
//22.padEnd()
console.log(str1.padEnd(25,'start')); //This is String literalsta
//------------------------------------------------
//23.repeat()
console.log(str.repeat(3));
//------------------------------------------------
//24.padStart()
console.log(str1.padStart(35,"start"));
//------------------------------------------------
//25.includes()
console.log(str1.includes("is"));

//26.endsWith()
// console.log(str1.endsWith('literal'));
*/

var str1="This is String literal"
console.log(str1.slice(6,9));