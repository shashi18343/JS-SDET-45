   
   
   //JavaScript Inheritance
    // class Moment extends Date {  
    //     constructor() {  
    //       super();  
    //     }}  
    //   var m=new Moment();  
    //   console.log("Current date:");
    //     console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());  

    // o/p-
    // Current date:
    // 10-2-2023

// class student extends person
// {
//    constructor(fname,lname,id)
//    {
//          super(fname,lname)
//       this.id=id;
//    }
// }
// let std1=new student("shashik0",28)
// console.log(std1);

/*
 // Inheritance example
 class person{
   constructor(name){
       this.name = name;
   }
   // method to return the string
   toString(){
       return (`Name of person: ${this.name}`);
   }
}
class student extends person{
   constructor(name,id){
       
      
       super(name);    // super keyword for calling the above 
       this.id = id;     // class constructor
   }
   toString(){
       return (`${super.toString()},
       Student ID: ${this.id}`);
   }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());
*/

