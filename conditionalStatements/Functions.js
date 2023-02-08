//Types of functions in javascript
//====================================================================================
/*
//1.standard function
function student1(name,roll)
{
    console.log(name+"has roll no  "+roll)
}
student1('shashi1',1)
*/

//-------------------------------------------------------------------------------------

/*
//2.Function Expression
let student2=function(name,roll){
    console.log(name +" has roll no  "+roll);   
}
student2('shashi2',2)

*/
//-------------------------------------------------------------------------------------

/*
//3.IIF
(function(name,roll) {
    console.log(name+" has roll no "+roll);
    
})('shashi3',3);
*/

//-------------------------------------------------------------------------------------

/*
//4.Arrow function
var student4=(name,roll)=>
{
    console.log(name +" has roll no  "+roll);
}
student4('shashi4',4)
*/
//or
/*
let student4=(name,roll)=>
{
    return name+roll;
}
console.log(student4('shashi',4));
*/
//or
// varia=a=>
// {
//     return a;
// }
// console.log(varia(4));