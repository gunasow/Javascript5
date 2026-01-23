console.log("Find Armstrong with For")
function isArmstrongWOParamFor(){
    let n = Number(prompt("Enter Number to check if armstrong for Without parameter"))
    let sum = 0
    let x= n
    for(x=n;x!=0; x=parseInt(x/10))
    {
        let r = x%10
        sum+= (r ** String(n).length)
    }
    console.log(`Without Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
}
isArmstrongWOParamFor();
function isArmstrongWParamFor(n){
    let sum = 0
    let x= n
    for(x=n;x!=0; x=parseInt(x/10))
    {
        let r = x%10
        sum+= (r ** String(n).length)
    }
    console.log(`With Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
}
let n = Number(prompt("Enter Number to check if armstrong for With parameter"))
isArmstrongWParamFor(n);
function isArmstrongWReturnFor(m){
    let sum = 0
    let x= m
    for(x=m;x!=0; x=parseInt(x/10))
    {
        let r = x%10
        sum+= (r ** String(m).length)
    }
    return sum;
}
let m = Number(prompt("Enter Number to check if armstrong for With parameter"))
console.log(`With Return - ${m} is ${(isArmstrongWReturnFor(m)==m) ?"a":"not a"} armstrong number`)

// ---while loop----


console.log("Find Armstrong with While")
function isArmstrongWOParamWhile(){
    let n = Number(prompt("Enter Number to check if armstrong for Without parameter"))
    let sum = 0
    let x= n
    while (x!=0)
    {
        let r = x%10
        sum+= (r ** String(n).length)
        x= parseInt(x/10)
    }
    console.log(`Without Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
}
isArmstrongWOParamWhile();
function isArmstrongWParamWhile(n){
    let sum = 0
    let x= n
    while (x!=0)
    {
        let r = x%10
        sum+= (r ** String(n).length)
        x= parseInt(x/10)
    }
    console.log(`With Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
}
let n = Number(prompt("Enter Number to check if armstrong for With parameter"))
isArmstrongWParamWhile(n);
function isArmstrongWReturnWhile(m){
    let sum = 0
    let x= m
    while (x!=0)
    {
        let r = x%10
        sum+= (r ** String(n).length)
        x= parseInt(x/10)
    }
    return sum;
}
let m = Number(prompt("Enter Number to check if armstrong for With parameter"))
console.log(`With Return - ${m} is ${(isArmstrongWReturnWhile(m)==m) ?"a":"not a"} armstrong number`)

// ---do-while loop----


console.log("Find Armstrong with Do-While")
function isArmstrongWOParamDoWhile(){
    let n = Number(prompt("Enter Number to check if armstrong for Without parameter"))
    let sum = 0
    let x= n
    do
    {
        let r = x%10
        sum+= (r ** String(n).length)
        x= parseInt(x/10)
    }
    while (x!=0)
    console.log(`Without Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
}
isArmstrongWOParamDoWhile();
function isArmstrongWParamDoWhile(n){
    let sum = 0
    let x= n
    do
    {
        let r = x%10
        sum+= (r ** String(n).length)
        x= parseInt(x/10)
    }
    while (x!=0)
    console.log(`With Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
}
let n = Number(prompt("Enter Number to check if armstrong for With parameter"))
isArmstrongWParamDoWhile(n);
function isArmstrongWReturnDoWhile(m){
    let sum = 0
    let x= m
    do
    {
        let r = x%10
        sum+= (r ** String(n).length)
        x= parseInt(x/10)
    }
    while (x!=0)
    return sum;
}
let m = Number(prompt("Enter Number to check if armstrong for With parameter"))
console.log(`With Return - ${m} is ${(isArmstrongWReturnDoWhile(m)==m) ?"a":"not a"} armstrong number`)
