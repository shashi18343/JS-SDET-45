//(DONE)
    //object create using method overriding
    //creating object using object literal
    // var person={
    //     f_name: 'shashi',
    //     l_name: 'kumar',

    //     greeting: function(){
    //         return (this.f_name+" "+this.l_name)
    //     }
    // }

    // data1=Object.create(person)   //creating object using 'create' keyword
    // console.log(data1.f_name); //shashi
    // console.log(person.l_name); //kumar
    // data1.f_name='sk'
    // console.log(person.greeting()); //shashi kumar
    // console.log(data1.greeting()); //sk kumar
    


    
function f1(x,y,z) {
    return x+y+z
    
}
function f1(a,b) {
    return a+b
    
}
console.log(f1(3,4,5))