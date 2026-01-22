
// 13.find out the given no is prime or not

console.log("Prime or Not with For");
function isPrimeWOParamFor() {
    let n = Number(prompt("Enter Number to check if prime"));
    check=true;
    for(i=1;i<=(n ** 0.5);i++)
    {
        if (n%i==0 && i!=1) {
            check=false;
            break;
        }
    }
    console.log(`Without Parameter - ${n} is ${check ?"a":"not a"} prime number`);
}
isPrimeWOParamFor();

function isPrimeWParamFor(n) {
check=true;
for(i=1;i<=(n ** 0.5);i++)
{
    if (n%i==0 && i!=1) {
        check=false;
        break;
    }
}
console.log(`With Parameter - ${n} is ${check ?"a":"not a"} prime number`);
}
let n = Number(prompt("Enter Number to check if prime"));
isPrimeWParamFor(n);


function isPrimeWReturnFor(n) {
    check=true;
    for(i=1;i<=(n ** 0.5);i++)
    {
        if (n%i==0 && i!=1) {
            check=false;
            break;
        }
    }
    return check;
}

let t = Number(prompt("Enter Number to check if prime"));
console.log(`With Return - ${t} is ${isPrimeWReturnFor(t) ?"a":"not a"} prime number`);




console.log("Prime or Not with While");
function isPrimeWOParamWhile() {
    let n = Number(prompt("Enter Number to check if prime"));
    check=true;
    let i=1
    while(i<=(n ** 0.5))
    {
        if (n%i==0 && i!=1) {
            check=false
            break
        }
        i++
    }
    console.log(`Without Parameter - ${n} is ${check ?"a":"not a"} prime number`);
}
isPrimeWOParamWhile();

function isPrimeWParamWhile(n) {
    check=true;
    let i=1
    while(i<=(n ** 0.5))
    {
        if (n%i==0 && i!=1) {
            check=false
            break
        }
        i++
    }
    console.log(`With Parameter - ${n} is ${check ?"a":"not a"} prime number`);
}
let n = Number(prompt("Enter Number to check if prime"));
isPrimeWParamWhile(n);


function isPrimeWReturnWhile(n) {
    check=true;
    let i=1
    while(i<=(n ** 0.5))
    {
        if (n%i==0 && i!=1) {
            check=false
            break
        }
        i++
    }
    return check;
}

let t = Number(prompt("Enter Number to check if prime"));
console.log(`With Return - ${t} is ${isPrimeWReturnWhile(t) ?"a":"not a"} prime number`);



console.log("Prime or Not with Do While");
function isPrimeWOParamDoWhile() {
    let n = Number(prompt("Enter Number to check if prime"));
    check=true;
    let i=1
    do
    {
        if (n%i==0 && i!=1) {
            check=false
            break
        }
        i++
    }
    while(i<=(n ** 0.5))
    console.log(`Without Parameter - ${n} is ${check ?"a":"not a"} prime number`);
}
isPrimeWOParamDoWhile();

function isPrimeWParamDoWhile(n) {
    check=true;
    let i=1
    do
    {
        if (n%i==0 && i!=1) {
            check=false
            break
        }
        i++
    }
    while(i<=(n ** 0.5))
    console.log(`With Parameter - ${n} is ${check ?"a":"not a"} prime number`);
}
let n = Number(prompt("Enter Number to check if prime"));
isPrimeWParamDoWhile(n);


function isPrimeWReturnDoWhile(n) {
    check=true;
    let i=1
    do
    {
        if (n%i==0 && i!=1) {
            check=false
            break
        }
        i++
    }
    while(i<=(n ** 0.5))
    return check;
}

let t = Number(prompt("Enter Number to check if prime"));
console.log(`With Return - ${t} is ${isPrimeWReturnDoWhile(t) ?"a":"not a"} prime number`);
