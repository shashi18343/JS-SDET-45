/*
//array object (07/02/23)
var register=[{
    homeName:'mansi residency',
    flatNo : 'A/101',
    phone : 70632485798,
    area : 'btm'
},
{
    homeName: 'radhe apartment',
    flatNo : 'R/101',
    phone : 7063248999,
    area : 'btm ,2nd stage'  
},
{
homeName: 'shyam apartment',
flatNo : 'S/101',
phone : 7063248999,
area : 'mico ,2nd stage',
},
(function(descrip) {
        console.log("AVAILABLE");
    
})('fan')

]
console.log(register.length);
// console.log(register[1]);
// console.log(register[1].homeName);

// for(let i=0;i<register.length;i++)
// {
    
// if(register[i].homeName=='shyam apartment')
// {
//     console.log(register[i])
// }
// else{
    //console.log("registered details not found");
// }
 //console.log("registered details not found");
// console.log("flat no.= "+register[i].flatNo+" and "+"area = "+register[i].area);
// }
*/
//----------------------------------------------------------------------------------------------------------------------------------
//String methods
//1.by string literals
// var str="    This is String literal"
// var str1="This is String literal"
// console.log(str);

//2.by using string object
// var strO=new String('using string object');
// console.log(strO);

//methods of string

//1.charAt()
// console.log(str1.charAt(2));
//------------------------------------------------
//2.charCodeAt()
// console.log(str1.charCodeAt(6));
//------------------------------------------------
//3.concat()
// console.log(str.concat(' example'));
//------------------------------------------------
//4.indexOf()
// console.log(str.indexOf('l'));
//------------------------------------------------
//5.lastIndexOf()
// console.log(str.lastIndexOf('s'));
//------------------------------------------------
//6.search()
// console.log(str.search('string'));  //will indicate the starting index of the asked string
//------------------------------------------------
//7.match()
// console.log(str.match('is'));  //[ 'is', index: 2, input: 'this is string literal', groups: undefined ]
//------------------------------------------------
//8.replaceAll()
// console.log(str.replaceAll('i','g'));
//------------------------------------------------
//9.substr()
// console.log(str.substr(5));
//------------------------------------------------
//10.slice()
// console.log(str.slice(6,9));
//------------------------------------------------
//11.toLowerCase()
// console.log(str.toLowerCase());
//------------------------------------------------
//12.toLocaleLowerCase()
// console.log(str.toLocaleLowerCase());
//------------------------------------------------
//13.toUpperCase()
// console.log(str.toUpperCase());
//------------------------------------------------
//14.toLocaleUpperCase()
// console.log(str.toLocaleUpperCase());
//------------------------------------------------
//15.toString()
// console.log(str.toString());
//------------------------------------------------
//16.valueOf()
// console.log(str.valueOf(''));
//------------------------------------------------
//17.split()
// var arr=str.split("")
//------------------------------------------------
// console.log(arr);
// console.log(str.split(' ',2));//(wrong)//  Split a string into substrings using the specified separator and return them as an array
//------------------------------------------------
//19.trim()
// console.log(str.trim()); //will remove the space from starting and end
//------------------------------------------------
//20.replace()
// console.log(str.replace('i','z')); //replace the first occurence char
//------------------------------------------------
//21.localeCompare()
// console.log(str.localeCompare(str1));  //0-true,1-false
//------------------------------------------------
//22.padEnd()
// console.log(str1.padEnd(25,'start')); //This is String literalsta
//------------------------------------------------
//23.repeat()
// console.log(str.repeat(3));
//------------------------------------------------
//24.padStart()
// console.log(str1.padStart(35,"start"));
//------------------------------------------------
//25.includes()
// console.log(str1.includes("is"));

//26.endsWith()
// console.log(str1.endsWith('literal'));

//----------------------------------------------------------------------------------------------------------------------------------

//mathematical operators

// console.log(Math.random());  //0.6385907546747616  
// console.log(Math.round(7.012));   //7
// console.log(Math.ceil(6.25))  //7
// console.log(Math.floor(8.95));   //8
// console.log(Math.SQRT1_2);  //0.7071067811865476
// console.log(Math.PI);   //3.141592653589793
// console.log(Math.abs(8));  //8
// console.log(Math.abs(-7));  //7
// console.log(Math.max(6,8,1,9,2,4,9));  //9
// console.log(Math.E);   //2.718281828459045
//------------------------------------------------
// console.log(Math.exp(5));   //148.4131591025766
// console.log(Math.exp(-Infinity));  //0
// console.log(Math.exp(-1));  //0.36787944117144233
// console.log(Math.exp(0));  //1
// console.log(Math.exp(1));  //2.718281828459045
// console.log(Math.exp(Infinity));  //Infinity
//------------------------------------------------
// console.log(Math.expm1(5)); //147.4131591025766
// console.log(Math.fround(5.3));  //5.300000190734863
// console.log(Math.LN2);   //0.6931471805599453
// console.log(Math.LN10);   //2.302585092994046
// console.log(Math.log(10));   //2.302585092994046
// console.log(Math.log10(10));   //1
// console.log(Math.LOG10E); //0.4342944819032518
// console.log(Math.min(6,8,1,9,2,4,9));    //1
// console.log(Math.pow(2,3)); //8
// console.log(Math.sign(1)); //1
// console.log(Math.trunc(5.89)); //trunc(x) -- Returns the integer part of a number(x)  5
// console.log(Math.SQRT2);    //1.4142135623730951
// console.log(Math.sqrt(16));   //4
// console.log(Math.tan(Math.PI/4));  //floating point error
// console.log(Math.sin(-Infinity));    //NaN
// console.log(Math.sin(-0));   //-0
// console.log(Math.sin(0));   //0
// console.log(Math.sin(1));    //0.8414709848078965
// console.log(Math.sin(Math.PI/2));   //1
// console.log(Math.sin(Infinity));   //NaN

//----------------------------------------------------------------------------------------------------------------------------------
//date object
// var date=new Date()
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getUTCDate());
// console.log(date.getUTCDay());
// console.log(date.getUTCFullYear());
// console.log(date.getUTCHours());
// console.log(date.getUTCMinutes());
// console.log(date.getUTCMonth());
// console.log(date.getUTCSeconds());
// console.log(date.toDateString().split(" "));

//============================================================================================================================================

//08/02/2023
class person{
    constructor(fname,lname)
    {
        this.fname=fname
        this.lname=lname
    }
    a=50                          //non static variable
    static b=60                    //static variable

    
static demo(){                    //static method
    console.log(this.b);            //accessing static variable under static method
    console.log(this.a);   //undefined         //accessing non static variable under static method

    //creation of an abject
    var p=new person()       //creating object reference using class name to access non-static variable under static method
   console.log(p.a);        //accessing non static variable using object reference
    
 }
sample()                                    //non static method
{
    console.log(this.a);            //accessing non static variable under non static method
    console.log(this.b);            //accessing static variable under non static method
    console.log(person.a);          //accessing non static variable using class name
}

}


var data1=new person("sk1","rk1")   //cretaing new object to store data
var data2=new person("sk2","rk2")


console.log(data1.a);       //50       accessing non static data using object reference
console.log(data1.fname);   //sk1       
console.log(data2,data1);   //person { a: 50, fname: 'sk2', lname: 'rk2' } person { a: 50, fname: 'sk1', lname: 'rk1' }
console.log(person.b);      //60     static variable calling
console.log(person.sample); //undefined     calling non static method using class name
person.demo()               //calling static method using class name
data1.sample()              //calling non static method using object reference 