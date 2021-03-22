// Only change code below this line
function functionElse(num){
    if(num <= 5){
    var result = "5 or smaller";
    return result;
    }
    else{
    var result = "Bigger than 5";
    return result;
    }
}
functionElse();
console.log(functionElse(0));
console.log(functionElse(9));
console.log(functionElse(20));
console.log(functionElse(23));
console.log(functionElse(30));
console.log(functionElse(31));
console.log(functionElse(105));
// Only change code above this line

module.exports = functionElse;