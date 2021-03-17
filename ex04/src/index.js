// Only change code below this line
function compareDifferentValues(m,n){
    if (m === n){
        return "Equal";
    }
   return "Not equal";
    }

compareDifferentValues();
console.log(compareDifferentValues(1,1));
console.log(compareDifferentValues(1,"1"));
console.log(compareDifferentValues(1,2));
// Only change code above this line

module.exports = compareDifferentValues;