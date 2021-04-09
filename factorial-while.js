function factorial(number) {
    var fact = 1;
    var i = 1;
    while(i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var fact = factorial(5);
console.log(fact);