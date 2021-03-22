// Only change the code below this line
var i = 5;
var fiveNumbers = "";
function inverseWhile(){
while (i > 0){
//console.log(fiveNumbers);
fiveNumbers += i ;
i--;
}
return fiveNumbers;
}
inverseWhile();
// Only change the code above this line
console.log(inverseWhile());
module.exports =inverseWhile;