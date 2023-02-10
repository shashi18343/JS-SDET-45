//returns a random integer between 0 to 9
console.log(Math.floor(Math.random()*10))

//proper random number between range where min(included) and max(excluded)

function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
    
}
console.log(getRandomInt(10,30))

//proper random number between range where min(included) and max(included)

function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
    
}
console.log(getRandomInt(10,30))