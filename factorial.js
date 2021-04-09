function factorial(number) {
    var fact = 1;
    for (let i = 1; i <= number ; i++) {
        fact = fact * i;      
    }
    return fact;
}
var fact = factorial(5);
console.log(fact);