12.factorial of a given no // 5!=5*4*3*2*1 =120

console.log("Factorial with For");
function factorialWithoutParamFor() {
    let x = Number(prompt("Enter number for factorialWithoutParamFor"));
    let fact = 1
    for (i=1;i<=x;i++)
    {
    fact*=i
    }
    console.log(`Without Parameter - factorial of ${x} is ${fact}`);
}
factorialWithoutParamFor();

function factorialWithParamFor(y) {
    let fact = 1
    for (i=1;i<=y;i++)
    {
    fact*=i
    }
    console.log(`With Parameter - factorial of ${y} is ${fact}`);
}
let y = Number(prompt("Enter number for factorialWithParamFor"));
factorialWithParamFor(y);

function factorialWithReturnFor(z) {
    let fact = 1
    for (i=1;i<=z;i++)
    {
    fact*=i
    }
    return fact
}
let z = Number(prompt("Enter number for factorialWithReturnFor"));
console.log(`With Return - factorial of ${z} is ${factorialWithReturnFor(z)}`);



console.log("Factorial with While");
function factorialWithoutParamFor() {
    let x = Number(prompt("Enter number for factorialWithoutParamFor"));
    let i=1
    let fact = 1
    while(i<=x)
    {
        fact*=i
        i++
    }
    console.log(`Without Parameter - factorial of ${x} is ${fact}`);
}
factorialWithoutParamFor();

function factorialWithParamFor(y) {
    let i=1
    let fact = 1
    while(i<=y)
    {
        fact*=i
        i++
    }
    console.log(`With Parameter - factorial of ${y} is ${fact}`);
}
let y = Number(prompt("Enter number for factorialWithParamFor"));
factorialWithParamFor(y);

function factorialWithReturnFor(z) {
    let i=1
    let fact = 1
    while(i<=z)
    {
        fact*=i
        i++
    }
    return fact
}
let z = Number(prompt("Enter number for factorialWithReturnFor"));
console.log(`With Return - factorial of ${z} is ${factorialWithReturnFor(z)}`);



console.log("Factorial with Do-While");
function factorialWithoutParamFor() {
    let x = Number(prompt("Enter number for factorialWithoutParamFor"));
    let i=1
    let fact = 1
    do
    {
        fact*=i
        i++
    }
    while(i<=x)
    console.log(`Without Parameter - factorial of ${x} is ${fact}`);
}
factorialWithoutParamFor();

function factorialWithParamFor(y) {
    let i=1
    let fact = 1
    do
    {
        fact*=i
        i++
    }
    while(i<=y)
    console.log(`With Parameter - factorial of ${y} is ${fact}`);
}
let y = Number(prompt("Enter number for factorialWithParamFor"));
factorialWithParamFor(y);

function factorialWithReturnFor(z) {
    let i=1
    let fact = 1
    do
    {
        fact*=i
        i++
    }
    while(i<=z)
    return fact
}
let z = Number(prompt("Enter number for factorialWithReturnFor"));
console.log(`With Return - factorial of ${z} is ${factorialWithReturnFor(z)}`);

