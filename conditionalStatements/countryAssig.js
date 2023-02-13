


/*let input=[{fname:"abc",address:"india"},
{fname:"def",address:"europe"},
{fname:"rst",address:"india"},
{fname:"xyz",address:"europe"},
{fname:"mno",address:"russia"}]


for (let i = 0; i < input.length; i++) {
    let count =0;
    for (let j = 0; j < input.length; j++) {
    if(input[i].address==input[j].address) {
    if(j<i) {
    break;
    }
    count++;
    }
    }
    
    if(count>=1) {
    if (input[i].address=="india") {
    console.log("people living in "+input[i].address+"---> "+count);
    }
    }
    } 
   //o/p->
    //The people living in India---> 2
    */

/*
//    write a program to get the count of each country name in below object?
let input = [ {fname:"abc" , address:"india"},
{fname:"def" , address:"europe"},
{fname:"rst" , address:"india"},
{fname:"xyz" , address:"europe"},
{fname:"mno" , address:"russia"}];
for (let i = 0; i < input.length; i++) {
let count =0;
for (let j = 0; j < input.length; j++) {
if(input[i].address==input[j].address) {
if(j<i) {
break;
}
count++;
}
}
if(count>=1) {
console.log(input[i].address+"-> "+count);
}
} 
// o/p-->
// india---> 2
// europe---> 2
// russia---> 1
*/