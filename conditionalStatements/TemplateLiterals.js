
//Template literals

//Ex-1

// function product(fullName,mobile,email,city,state) {
//          console.log(`user full name is = ${fullName} 
// user mobile number = ${mobile}
// user emailId is = ${email}
// user is from state = ${state}`)
//     }
//     product('parash nath',706324578,'nparas18343@gmail.com','sikkim')  
    
// o/p-
// user full name is =parash nath 
// user mobile number = 706324578
// user emailId is = nparas18343@gmail.com
// user is from state = undefined


// Ex-2
// function product(/*parameters*/fullName,mobile,email='nparas123@gmail.com',city,state) {
//     console.log(`user full name is = ${fullName} 
// user mobile number = ${mobile}
// user emailId is = ${email}
// user city is = ${city}
// user is from state = ${state}`)
// }
// product(/*arguments*/'parash nath',706324578,'jalpaigudi','sikkim')

//o/p-
// user full name is = parash nath 
// user mobile number = 706324578
// user emailId is = sikkim
// user is from state = undefined

// //Ex-3
// function product(fullName,mobile,email,city,state='wb') {
//     console.log(`user full name is = ${fullName} 
// user mobile number = ${mobile}
// user emailId is = ${email}
// user city is = ${city}
// user is from state = ${state}`)
// }
// product('parash nath',706324578,'nparas18343@gmail.com','jalpaigudi')  

// o/p-
// user full name is = parash nath 
// user mobile number = 706324578
// user emailId is = nparas18343@gmail.com
// user city is = jalpaigudi
// user is from state = wb

//Ex-4 (using undefined concept)
// function product(fullName,mobile,email='nparas18343@gmail.com',city,state='wb') {
//     console.log(`user full name is = ${fullName} 
// user mobile number = ${mobile}
// user emailId is = ${email}
// user city is = ${city}
// user is from state = ${state}`)
// }
// product('parash nath',706324578,undefined,'jalpaigudi',undefined)  

//o/p-
// user full name is = parash nath 
// user mobile number = 706324578
// user emailId is = nparas18343@gmail.com
// user city is = jalpaigudi
// user is from state = wb
