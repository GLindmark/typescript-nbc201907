let a:number = 2;
let b:number = 5;

let add = function(a: number, b: number): number { return a + b; };
let subtract = function(a: number, b: number): number { return a - b; };
let multiply = function(a: number, b: number): number {return a * b;};
let divide = function(a: number, b: number): number {return a / b};
let modulus = function(a: number, b: number): number {return a % b};

let result1 = add(a,b);
let result2 = subtract(a,b);
let result3 = multiply(a,b);
let result4 = divide(a,b);
let result5 = modulus(a,b);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);