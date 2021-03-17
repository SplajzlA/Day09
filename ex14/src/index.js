// Only change code below this line
function myForLoop1(){
for (var evenNumbers = 0; evenNumbers <= 8; evenNumbers +=2){
    console.log(evenNumbers);
    
}
}

function myForLoop2 () {
for (var evenInverseNumbers = 8; evenInverseNumbers > -1; evenInverseNumbers -=2){
console.log(evenInverseNumbers);
}
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
}