
document.getElementById("grettings").innerHTML="Hello"
document.getElementById("js").innerHTML="javascript session started"

document.getElementById("clickButton").onclick=Demo
function Demo() {
    document.getElementById("clickButton").innerHTML="clicked"

    
}

document.getElementById("DisplayDate").onclick=DisplayDate

function DisplayDate() {
    document.getElementById("date").innerHTML=Date()
    
}
document.getElementById("message").onclick=gm

function gm() {
    document.getElementById("message").outerText="GOOD MORNING"
}
document.getElementById("bb").onclick=bgc1
function bgc1() {
    document.getElementById("bb").style.backgroundColor='pink'
}
document.getElementById("bb").onclick=bgc2
function bgc2() {
    document.getElementById("bb").style.backgroundColor='green'
}
document.getElementById("bb").onclick=bgc3
function bgc3() {
    document.getElementById("bb").style.backgroundColor='marron'
}
document.getElementById("bb").onclick=bgc4
function bgc4() {
    document.getElementById("bb").style.backgroundColor='purple'
}



