
//TYPE 1 : using object literal
/*
var PerOrgDetails={
//properties are different with diffrent values ,can create several properties as per our requirements

    per_name:'shashi',
    per_mobile: 7063278343,
    per_id: 'ORG123',
    per_address: ['btm','2nd stage','bangalore'],
    details: function () {
       // return "details of the person in organization is";
       // return this.per_name+"\n "+this.per_mobile+ "\n "+this.per_address;
       return "per_name:"+this.per_name+"\n "+"this.per_mobile:"+ "\n "+"this.per_address:";
    },
    jobsummery : jobdetails = {

        companyname:"TESTyantra"
    }

}
console.log(PerOrgDetails.per_name)   //prints perticular value for a particular property          
console.log(PerOrgDetails);  //prints an object
console.log(PerOrgDetails.per_address);  // prints array from an object
console.log(PerOrgDetails.details());   //prints function from an object
console.log(PerOrgDetails.jobsummery.companyname);   //printing the value of object within an object       o/p-TESTyantra
//console.log(PerOrgDetails.jobsummery.jobdetails);   //printing the value of object within an object       o/p-undefined
*/
/*
//TYPE 2 : using an Object constructor
//can be used when we have definite properties that is applicable for all the instance created(values will be different only whereas property remains common)
function StudentDetails(name,id,salary,add,skills) {
    this.name=name;
    this.id=id;
    this.salary=salary; //this keyword refers to current object
    this.add=add
    this.skills=skills
    
}

var std1=new StudentDetails('sk1','STD1',500000,['btm1','1nd stage',560076],function() { return "JS1"})
var std2=new StudentDetails("sk2",'STD2',600000,['btm2','2nd stage',560276],function() { return "JS2"})
//console.log(std1);  //o/p-- StudentDetails { name: 'sk1', id: 'STD1', salary: 500000 }
//console.log(std1.name);  //o\p-- sk1
console.log(std1);

*/
//TYPE 3 : By creating instance of an object

var emp=new Object();
emp.id=101;
emp.name="shashi"
emp.salary=50000
console.log(emp.id+" "+emp.name+" "+emp.salary);
