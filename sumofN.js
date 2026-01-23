console.log("Find Sum of 0-n with For")
function sumofNWOParamFor(){
    let n = Number(prompt("Enter Number to find sum of 0-n Without parameter"))
    let sum = 0
    for(i=1;i<=n;i++)
    {
        sum+=i
    }
    console.log(`without parameter - sum of natural numbers 1 to ${n} is ${sum}`)
}
sumofNWOParamFor();

function sumofNWParamFor(n){
    let sum = 0
    for(i=1;i<=n;i++)
    {
        sum+=i
    }
    console.log(`with parameter - sum of natural numbers 1 to ${n} is ${sum}`)

}
let n = Number(prompt("Enter Number to find sum of 0-n With parameter"))
sumofNWParamFor(n);

function sumofNWReturnFor(m){
    let sum = 0
    for(i=1;i<=m;i++)
    {
        sum+=i
    }
    return sum;
}
let m = Number(prompt("Enter Number to find sum of 0-n With return"))
console.log(`with return - sum of natural numbers 1 to ${m} is ${sumofNWReturnFor(m)}`)

// ---while loop----
console.log("Find Sum of 0-n with While")
function sumofNWOParamWhile(){
    let n = Number(prompt("Enter Number to find sum of 0-n Without parameter"))
    let sum = 0
    let i=1
    while (i<=n)
    {
        sum+=i
        i++
    }
    console.log(`without parameter - sum of natural numbers 1 to ${n} is ${sum}`)
}
sumofNWOParamWhile();

function sumofNWParamWhile(n){
    let sum = 0
    let i=1
    while (i<=n)
    {
        sum+=i
        i++
    }
    console.log(`with parameter - sum of natural numbers 1 to ${n} is ${sum}`)

}
let n = Number(prompt("Enter Number to find sum of 0-n With parameter"))
sumofNWParamWhile(n);

function sumofNWReturnWhile(m){
    let sum = 0
    let i=1
    while (i<=m)
    {
        sum+=i
        i++
    }
    return sum;
}
let m = Number(prompt("Enter Number to find sum of 0-n With return"))
console.log(`with return - sum of natural numbers 1 to ${m} is ${sumofNWReturnWhile(m)}`)


// ---do-while loop----
console.log("Find Sum of 0-n with Do-While")
function sumofNWOParamDoWhile(){
    let n = Number(prompt("Enter Number to find sum of 0-n Without parameter"))
    let sum = 0
    let i=1
    do
    {
        sum+=i
        i++
    }
    while (i<=n)
    console.log(`without parameter - sum of natural numbers 1 to ${n} is ${sum}`)
}
sumofNWOParamDoWhile();

function sumofNWParamDoWhile(n){
    let sum = 0
    let i=1
    do
    {
        sum+=i
        i++
    }
    while (i<=n)
    console.log(`with parameter - sum of natural numbers 1 to ${n} is ${sum}`)

}
let n = Number(prompt("Enter Number to find sum of 0-n With parameter"))
sumofNWParamDoWhile(n);

function sumofNWReturnDoWhile(m){
    let sum = 0
    let i=1
    do
    {
        sum+=i
        i++
    }
    while (i<=n)
    return sum;
}
let m = Number(prompt("Enter Number to find sum of 0-n With return"))
console.log(`with return - sum of natural numbers 1 to ${m} is ${sumofNWReturnDoWhile(m)}`)
