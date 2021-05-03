const prompt = require('prompt-sync')({ sigint: true });
let fib = [];
fib[0] = 0
fib[1] = 1
let number = prompt('Enter a number:  ');
for (let i = fib.length; i < number + 1; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
}
console.log('F(' + number + ') = ' + fib[number]);