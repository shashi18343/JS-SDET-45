//(DONE)
// TYPE 1 : using object literal

// var PerOrgDetails={
// properties are different with diffrent values ,can create several properties as per our requirements

//     per_name:'shashi',
//     per_mobile: 7063278343,
//     per_id: 'ORG123',
//     per_address: ['btm','2nd stage','bangalore'],
//     details: function () {
//        // return "details of the person in organization is";
//        // return this.per_name+"\n "+this.per_mobile+ "\n "+this.per_address;
//        return "per_name:"+this.per_name+"\n "+"this.per_mobile:"+ "\n "+"this.per_address:";
//     },
//     jobsummery : jobdetails = {

//         companyname:"TESTyantra"
//     }

// }

// add data to existing object  
// here method overriding is happening (no method overloading)
// PerOrgDetails.company="ty"
// console.log(PerOrgDetails.company);

// modify data to existing object
// PerOrgDetails.per_mobile=7063279000
// console.log(PerOrgDetails.per_mobile);

// delete data from existing object
// delete PerOrgDetails.per_id  //delete command will delete the property in this line but still we vcan see the property in global menu when we inspect it(creation phase)
// console.log(PerOrgDetails.per_id);  //this line will completely remove the property along with variable even in creation phase

// fetch all the value from an existing array
// for (const key in PerOrgDetails) {
//    console.log(key+" = "+PerOrgDetails[key]);
// }


// console.log(PerOrgDetails.per_name)   //prints perticular value for a particular property          
// console.log(PerOrgDetails);  //prints an object
// console.log(PerOrgDetails.per_address);  // prints array from an object
// console.log(PerOrgDetails.details());   //prints function from an object
// console.log(PerOrgDetails.jobsummery.companyname);   //printing the value of object within an object       o/p-TESTyantra
// console.log(PerOrgDetails.jobsummery.jobdetails);   //printing the value of object within an object       o/p-undefined
// console.log(PerOrgDetails.jobdetails);

// TYPE 2 : using an Object constructor
// can be used when we have definite properties that is applicable for all the instance created(values will be different only whereas property remains common)
// function StudentDetails(name,id,salary,add,skills) {
//     this.name=name;
//     this.id=id;
//     this.salary=salary; //this keyword refers to current object
//     this.add=add
//     this.skills=skills
    
// }

// var std1=new StudentDetails('sk1','STD1',500000,['btm1','1nd stage',560076],function() { return "JS1"})
// var std2=new StudentDetails("sk2",'STD2',600000,['btm2','2nd stage',560276],function() { return "JS2"})
// console.log(std1);  //o/p-- StudentDetails { name: 'sk1', id: 'STD1', salary: 500000 }
// console.log(std1.name);  //o\p-- sk1
// console.log(std2);


//TYPE 3 : By creating instance of an object

// var user=new Object();
// user.apratmentname="mansukh apartment";
// user.phone=7063278343
// user.rent=5000
// user.deposit=3000
// user.location="btm"
// user.address="2nd stage,btm"
// user.flatno="B/101"
// console.log("apratmentname="+user.apratmentname+"phone="+user.phone+" rent="+user.rent+"deposit="+user.deposit+"location="+user.location+"address="+user.address);


// funtion overloading is not possible in javascript

function user1(name,phone) {
    this.name=name;
    this.phone=phone
    
}

function user1(name,phone,address) {
    this.name=name
    this.phone=phone
    this.address=address
    
}

// var user=new user1("shashi",7063278,"btm",87)    //o/p--user1 { name: 'shashi', phone: 7063278, address: 'btm' }
// console.log(user)                                //o/p--user1 { name: 'shashi', phone: 7063278, address: 'btm' }

var user=new user1("kumar")
console.log(user);                               //user1 { name: 'kumar', phone: undefined, address: undefined }


    
