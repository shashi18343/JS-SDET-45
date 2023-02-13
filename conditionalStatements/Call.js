//(DONE)
//call
//function borrowing
//apply(),call(),bind() will be used ineith function
//call
var person={
    fname:"shashi",
    lname:"kumar",
    introduce: function(){
        return "he is "+this.fname+" "+this.lname
      //  console.log("-1");
    }
}

var person2={
    fname: "studying",
    lname: "javascript",
    session: function(){
        console.log(this.fname+" "+this.lname);
        console.log("0");
    }
    
}
function greeting(g1,g2){
    console.log(g1+" "+this.fname+" "+this.lname+" " +g2);
    console.log("1");

   }

   function greeting1(g1,g2){
    return g1+" "+person.introduce()+" " +g2


   }


   
person.introduce.call(person2)  //function
console.log("3");
person2.session.call(person)
console.log("4");
console.log(greeting1.call(person,"hello","js")) //bind method
console.log("5");
//bind
var data1=greeting1.bind(person,"hello","js")
console.log(data1())
console.log("6");
//apply
console.log(greeting1.apply(person,["hello","js"]))

/*
if for an object we return something then we should get the output using log statemnet
else no need to write the log statement as we can directly call the function function()  (with or without arguments if we pass any)
*/