// Only change code below this line
var evenNumbers = "";
var evenInverseNumbers = "";
function myForLoop1(){
for (var i = 0; i <= 8; i +=2){
    evenNumbers += i;
}
return evenNumbers;
}
function myForLoop2 () {
for (var i = 8; i > -1; i -=2){
    evenInverseNumbers += i;

}
return evenInverseNumbers;
}
myForLoop1();
myForLoop2();
//console.log(myForLoop1());
//console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
}