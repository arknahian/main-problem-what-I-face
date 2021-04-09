
// 5! = 1*2*

function factorial(number) {
    if (number = 0) {
        return 1;
    }
    else{
      return factorial(number-1) * number; 
    }
}
var fact = factorial(5);
console.log(fact);