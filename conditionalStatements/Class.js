

//08/02/2023(DONE)
class person{
    constructor(fname,lname)
    {
        this.fname=fname
        this.lname=lname
    }
    a=50                          //non static variable
    static b=60                    //static variable

    
static demo(){                    //static method
    console.log(this.b);            // 60   //accessing static variable under static method
    console.log(this.a);             //undefined     //accessing non static variable under static method

    //creation of an abject
    var p=new person()       //creating object reference using class name to access non-static variable under static method
   console.log(p.a);        //50    //accessing non static variable using object reference
    
 }
sample()                                    //non static method
{
    console.log(this.a);            // 50    //accessing non static variable under non static method  50
   console.log(this.b);            // undefined   //accessing static variable under non static method
   console.log(person.a);          // undefined    //accessing non static variable using class name
}

}


var data1=new person("sk1","rk1")   //cretaing new object to store data
var data2=new person("sk2","rk2")


console.log(data1.a);       //50       accessing non static data using object reference
console.log(data1.fname);   //sk1       
console.log(data2,data1);   //person { a: 50, fname: 'sk2', lname: 'rk2' } person { a: 50, fname: 'sk1', lname: 'rk1' }
console.log(person.b);      //60     static variable calling
console.log(person.sample); //undefined     calling non static method using class name
person.demo()               //  60 undefined 50  //  calling static method using class name
data1.sample()              //50   undefined   undefined  // calling non static method using object reference 


//==========================================================================================================================================
// (done)
// class student1
// {
//     marks=80
//     marks2=70
//     get marks()
//     {
//         return this.marks
//     }
// }
// studentData=new student1()
// studentData.marks=-10;
// console.log(studentData.marks);//-10
// console.log(studentData.marks2);//70
//...............................................................
// class student2
// {
//     _marks=80
//     marks2=70
//     get marks()
//     {
//         return this._marks
//     }
// }
// studentData=new student2()
// studentData.marks=-10;
// console.log(studentData._marks);//80
// console.log(studentData.marks2);//70
//................................................................

// class student3
// {
//     $marks=80
//     marks2=70
//     get marks()
//     {
//         return this.$marks
//     }
// }
// studentData=new student3()
// studentData.marks=-10;
// console.log(studentData.marks);//80
// console.log(studentData.marks2);//70
// ------------------------------------------------------------------------------------------------------------------------------

   
 