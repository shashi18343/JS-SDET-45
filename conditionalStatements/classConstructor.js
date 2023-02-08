class user
{
    constructor(apartmentName,mobile,flatNo,floor)
    {
    this.apartmentName=apartmentName;  //this keyword refers to an object,it also refers to different objects depending on how it is used.
    this.mobile=mobile
    this.flatNo=flatNo
    this.floor=floor
    }

}
user1=new user('abc villa',789456123,'B/101',2) //to create the same type of object we are calling the constructor function with new keyword
user2=new user('xyz villa',78945879,'A/121',4)

console.log(user1.mobile);







//creating object using constructor

class person{
    constructor(fname,sname,username,email)
    {
        this.fname=fname;
        //this.sname=sname
        this.username=username
        this.email=email
    }
}
data1=new person('abc1','vgf1','sk1','sk1@gmail.com')
data2=new person('abc2','vgf2','sk2','sk2@gmail.com')

console.log(data1.fname);
console.log(data2)

