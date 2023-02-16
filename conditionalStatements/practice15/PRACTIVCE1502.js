// function user(name,mobile,flatNo,area,location)
// {
// console.log(`user name is= ${name}
// user mobile no is =${mobile}
// user flatNo is= ${flatNo}
// user area is= ${area}`)
// }
// user('shashi',70256,'B/101','421sqft')



//15-02-2023
//---------------------------------------------------------------------------------------------------------
// function countConsonent(str) {
//     let count=0
//     for(let i=0;i<str.length;i++)
//     {
      
//        str=str.toLowerCase()
//         for(let j=0;j<str.length;j++)
//         {
//         if(str[i]==str[j])
//         {
//             if(j<i)
//         {
//         count=count+1
//         }
//     }
//     }
//     if(count>=1){
//         if(str[i]!='a' && str[i]!='e'  && str[i]!='i' && str[i]!='o' && str[i]!='u' && str[i]!=" " )
//         {
//         console.log(str[i]+ " = "+count);
//         }
//         }
// }   
// }
// countConsonent('hello JavasCript')

// o/p-->
// l = 1
// j = 1
// v = 1
// s = 2
// c = 2
// r = 2
// p = 2
// t = 2


//--------------------------------------------------------------------------------------------------


// function capitalEach1stWord(str) {
//     var str1=str.split(" ")
//     for(let i=0;i<str1.length;i++) {
//    process.stdout.write(str1[i].charAt(0).toUpperCase()+str1[i].slice(1)+" ")

//         }
//     }
// capitalEach1stWord("javascript is good")

// o/p-->Javascript Is Good
//----------------------------------------------------------------------------------------------
//INPUT- ['javascript,selenium,api,cypress]
//OUTPUT- v,l,i,p

// let str=['javascript','selenium','api','cypress']
// console.log(str.map(value=>value.charAt(2)).toString());

//----------------------------------------------------------------------------------------------

// var str="good morning welcome to javascript session"
// function toCheckVowels(str){
// var str1=str.split(" ")
// //console.log(str1);

// for(let i=0;i<str1.length;i++)
// {
//   // console.log(str1[i]);
//   if('aeiou'.includes(str1[i].charAt(2)) && str1[i].length>=3)
//   {
//    process.stdout.write((str1[i].charAt(0).toUpperCase()+str1[i].slice(1)+" "))
//   }
//   else{
//    process.stdout.write(str1[i]+" ")
//   }

// }
// }
// toCheckVowels("good morning orange to javascript beauty")

// o/p-->Good morning Orange to javascript Beauty

//----------------------------------------------------------------------------------------------

//Store all the vowels from a string in an array

// var str="i am learning java script"
// var arr=[]
// for(let i=0;i<str.length;i++)
// {
// if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
// {
//     arr.push(str[i])
// }
// }
// console.log(arr);

// o/p-->[
//   'i', 'a', 'e',
//   'a', 'i', 'a',
//   'a', 'i'
// ]

//----------------------------------------------------------------------------------------------
//To print the number whether it is multiple of 5 and  10
// function multipleOf(key) {
//     if(key%5==0 && key%10==0)
//     {
//         console.log(key+ " is multiple of 5 and 10");
//     }
//     else if( key%10==0)
//     {
//         console.log(key+ " is multiple of 10");
//     }
//    else if(key%5==0)
//     {
//         console.log(key+ " is multiple of 5");
//     }
// }
// multipleOf(50)

// o/p-->50 is multiple of 5 and 10

//------------------------------------------------------------------------

// var str="good morning"
// var str1=str.split('o')
// console.log(str1);

// o/p->[ 'g', '', 'd m', 'rning' ]

//------------------------------------------------------------------------
// var str="my name is shashi"

// for(var i=0;i<str.length;i++)
// {
//     if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
//     {
//        process.stdout.write(str[i].toUpperCase())
//     }
//     else
//     {
//        process.stdout.write(str[i])
//     }
// }

// o/p-->my nAmE Is shAshI