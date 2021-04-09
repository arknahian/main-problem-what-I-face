//Factorial by for loop
function factorial(number) {
    var factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var resultFact = factorial(5);
console.log(resultFact);

//factorial by recursive way 

function factorialR(num) {
    if (num === 0) {
        return 1;
    }
    else{
        return num * factorialR(num-1);
    }
}
var rResult =  factorialR(10);
console.log(rResult);

//fibonacci by for loop


  
   function fibo(num) {
    var fibonacci = [0,1,1];
    for (let i = 2; i <= 10; i++) {
        fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
    }
    return fibonacci;
   }
   var make = fibo(10);
   console.log(make);


function fibonacci(num) {
    if (num === 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    else{
        return fibonacci[num] = fibonacci(num -1) + fibonacci(num - 2);
    }
}
var output = fibonacci(10);
console.log(output);