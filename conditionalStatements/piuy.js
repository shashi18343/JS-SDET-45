class user
{
constructor(name,mobile)
{
this.name=name
this.mobile=mobile
}

static user1(a)
{
    this.a=a
console.log(this.a)
console.log(u1.mobile)
}

user2()
{
console.log(this.mobile)
}

}

var u1=new user("shashi",7063278484)

u1.user2(5285)

user.user1(528)