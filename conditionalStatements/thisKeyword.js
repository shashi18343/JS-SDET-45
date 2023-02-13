//(DONE)

var user={
    userName : "sami",
    userPhone : "6859785485",
    userData : function user() {
        console.log("1");
        console.log(this.userName);
        console.log("2");
        age=28
        console.log(age);
        
    }
}

let a=30
var apartment={
    apartmentName : "mansukh",
    apartDeatils : function apartment()
    {
        let rent=9000
        console.log("3");
        console.log(this.apartmentName);
        console.log("4");
        console.log(this.userName);
        console.log(5);
        console.log(user.userName);
        console.log("6");
        console.log(rent);
        console.log("7");
        console.log(this.r);
        console.log("8");
       user.userData(); 
        console.log("9");
        console.log(user.userPhone);
  return 'shashi' // 2
}
}

user1=Object.create(user)
console.log(user1.userName);
console.log("10");
//console.log(apartment.apartDeatils());  1
apartment.apartDeatils(); // 3
// store = apartment.apartDeatils();
// console.log(store);
// userData=Object.create(user)
// console.log(user);
// console.log(userData);
// userData.userName="qwe"
// console.log(userData);

/*
>whenever we are declaring object and within the object we are having a function with no 'return' command,
 then if we call the function using log statement then it will print 'undefined'. point-1
>so in order to avoid the undefined output we should mention the return statement inside the function,and 
 also avoid printing the function using 'log' statement. point- 2 & 3


*/