//assignment 10-02-23 (DONE)

//creating an object of name user and intializing value to its properties
const user={
    uName: "shashi",
    uMobile: 706327000,
    uAddress: "BTM",
    uFlatNo: 'B/101',
    uRent: 9000
}
console.log(user); //printing its properties
 
//Reinitializing object 'user' parameters with different values
//object values are reinitialized using object reference
user.uName="shashi kumar"
user.uMobile=70623777
user.uRent=9500

console.log(user);  //printing the reinitialized values


//reinitializing the object value by the same name
const user={
    uName: "shashik",
    uMobile: 7063270001,
    uAddress: "BTM",
    uFlatNo: 'B/101',
    uRent: 9001
}

console.log(user);  //SyntaxError: Identifier 'user' has already been declared