"use strict";


console.log('*Завдання 1*');

// Завдання 1

// //Рекурсія
// function fib(n){
//     return ( n <= 1 ) ? n : fib( n - 1 ) + fib( n - 2 );
// };
// console.log(fib(9));

//цикл
function fib(n){
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++){
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(7));

console.log('*Завдання 2*');


//завдання 2
for (var n = 1000, num = 0; n > 50; n /= 2, num++){};
console.log(num);