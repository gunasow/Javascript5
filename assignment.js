// 12.factorial of a given no // 5!=5*4*3*2*1 =120
// console.log("Factorial with For");
// function factorialWithoutParamFor() {
//     let x = Number(prompt("Enter number for factorialWithoutParamFor"));
//     let fact = 1
//     for (i=1;i<=x;i++)
//     {
//     fact*=i
//     }
//     console.log(`Without Parameter - factorial of ${x} is ${fact}`);
// }
// factorialWithoutParamFor();

// function factorialWithParamFor(y) {
//     let fact = 1
//     for (i=1;i<=y;i++)
//     {
//     fact*=i
//     }
//     console.log(`With Parameter - factorial of ${y} is ${fact}`);
// }
// let y = Number(prompt("Enter number for factorialWithParamFor"));
// factorialWithParamFor(y);

// function factorialWithReturnFor(z) {
//     let fact = 1
//     for (i=1;i<=z;i++)
//     {
//     fact*=i
//     }
//     return fact
// }
// let z = Number(prompt("Enter number for factorialWithReturnFor"));
// console.log(`With Return - factorial of ${z} is ${factorialWithReturnFor(z)}`);


// console.log("Factorial with While");
// function factorialWithoutParamFor() {
//     let x = Number(prompt("Enter number for factorialWithoutParamFor"));
//     let i=1
//     let fact = 1
//     while(i<=x)
//     {
//         fact*=i
//         i++
//     }
//     console.log(`Without Parameter - factorial of ${x} is ${fact}`);
// }
// factorialWithoutParamFor();

// function factorialWithParamFor(y) {
//     let i=1
//     let fact = 1
//     while(i<=y)
//     {
//         fact*=i
//         i++
//     }
//     console.log(`With Parameter - factorial of ${y} is ${fact}`);
// }
// let y = Number(prompt("Enter number for factorialWithParamFor"));
// factorialWithParamFor(y);

// function factorialWithReturnFor(z) {
//     let i=1
//     let fact = 1
//     while(i<=z)
//     {
//         fact*=i
//         i++
//     }
//     return fact
// }
// let z = Number(prompt("Enter number for factorialWithReturnFor"));
// console.log(`With Return - factorial of ${z} is ${factorialWithReturnFor(z)}`);

// console.log("Factorial with Do-While");
// function factorialWithoutParamFor() {
//     let x = Number(prompt("Enter number for factorialWithoutParamFor"));
//     let i=1
//     let fact = 1
//     do
//     {
//         fact*=i
//         i++
//     }
//     while(i<=x)
//     console.log(`Without Parameter - factorial of ${x} is ${fact}`);
// }
// factorialWithoutParamFor();

// function factorialWithParamFor(y) {
//     let i=1
//     let fact = 1
//     do
//     {
//         fact*=i
//         i++
//     }
//     while(i<=y)
//     console.log(`With Parameter - factorial of ${y} is ${fact}`);
// }
// let y = Number(prompt("Enter number for factorialWithParamFor"));
// factorialWithParamFor(y);

// function factorialWithReturnFor(z) {
//     let i=1
//     let fact = 1
//     do
//     {
//         fact*=i
//         i++
//     }
//     while(i<=z)
//     return fact
// }
// let z = Number(prompt("Enter number for factorialWithReturnFor"));
// console.log(`With Return - factorial of ${z} is ${factorialWithReturnFor(z)}`);




// 13.find out the given no is prime or not
// ----for loop----
// function isPrimeWOParam() {
// let n = Number(prompt("Enter Number to check if prime"))
// check=true
// for(i=1;i<=(n ** 0.5);i++)
// {
//     if (n%i==0 && i!=1) {
//         check=false
//         break
//     }
// }
// console.log(`${n} is ${check ?"a":"not a"} prime number`)
// }
// isPrimeWOParam();

// ---while loop----
// let n = Number(prompt("Enter Number to check if prime"))
// check=true
// let i=1
// while(i<=(n ** 0.5))
// {
//     if (n%i==0 && i!=1) {
//         check=false
//         break
//     }
//     i++
// }
// console.log(`${n} is ${check ?"a":"not a"} prime number`)

// ---do-while loop----
// let n = Number(prompt("Enter Number to check if prime"))
// check=true
// let i=1
// do
// {
//     if (n%i==0 && i!=1) {
//         check=false
//         break
//     }
//     i++
// }while(i<=(n ** 0.5))
// console.log(`${n} is ${check ?"a":"not a"} prime number`)



// 14.print the prime no series
// ----for loop----

// let x = Number(prompt("Enter Number to print prime series"))
// let s=""
// for(n=1;n<=x;n++)
// {
//     check=true
//     for(i=1;i<=(n ** 0.5);i++)
//     {
//         if (n%i==0 && i!=1) {
//             check=false
//             break
//         }
//     }
// s+= (check ? `${n} `:"")
// }
// console.log(s)


// 15.find out the given no is Armstrong no or not (153= 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 153)
// ----for loop----

// console.log("Find Armstrong with For")
// function isArmstrongWOParamFor(){
//     let n = Number(prompt("Enter Number to check if armstrong for Without parameter"))
//     let sum = 0
//     let x= n
//     for(x=n;x!=0; x=parseInt(x/10))
//     {
//         let r = x%10
//         sum+= (r ** String(n).length)
//     }
//     console.log(`Without Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
// }
// isArmstrongWOParamFor();
// function isArmstrongWParamFor(n){
//     let sum = 0
//     let x= n
//     for(x=n;x!=0; x=parseInt(x/10))
//     {
//         let r = x%10
//         sum+= (r ** String(n).length)
//     }
//     console.log(`With Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
// }
// let n = Number(prompt("Enter Number to check if armstrong for With parameter"))
// isArmstrongWParamFor(n);
// function isArmstrongWReturnFor(m){
//     let sum = 0
//     let x= m
//     for(x=m;x!=0; x=parseInt(x/10))
//     {
//         let r = x%10
//         sum+= (r ** String(m).length)
//     }
//     return sum;
// }
// let m = Number(prompt("Enter Number to check if armstrong for With parameter"))
// console.log(`With Return - ${m} is ${(isArmstrongWReturnFor(m)==m) ?"a":"not a"} armstrong number`)

// ---while loop----


// console.log("Find Armstrong with While")
// function isArmstrongWOParamWhile(){
//     let n = Number(prompt("Enter Number to check if armstrong for Without parameter"))
//     let sum = 0
//     let x= n
//     while (x!=0)
//     {
//         let r = x%10
//         sum+= (r ** String(n).length)
//         x= parseInt(x/10)
//     }
//     console.log(`Without Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
// }
// isArmstrongWOParamWhile();
// function isArmstrongWParamWhile(n){
//     let sum = 0
//     let x= n
//     while (x!=0)
//     {
//         let r = x%10
//         sum+= (r ** String(n).length)
//         x= parseInt(x/10)
//     }
//     console.log(`With Parameter - ${n} is ${(sum==n) ?"a":"not a"} armstrong number`)
// }
// let n = Number(prompt("Enter Number to check if armstrong for With parameter"))
// isArmstrongWParamWhile(n);
// function isArmstrongWReturnWhile(m){
//     let sum = 0
//     let x= m
//     while (x!=0)
//     {
//         let r = x%10
//         sum+= (r ** String(n).length)
//         x= parseInt(x/10)
//     }
//     return sum;
// }
// let m = Number(prompt("Enter Number to check if armstrong for With parameter"))
// console.log(`With Return - ${m} is ${(isArmstrongWReturnWhile(m)==m) ?"a":"not a"} armstrong number`)

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



// 16.print the Armstrong no series

// ----for loop----
// let end = Number(prompt("Enter last number to print armstrong series"))
// let s=""
// for (i=1; i<=end; i++)
// {
//     let sum = 0
//     for(x=i;x!=0; x=parseInt(x/10))
//     {
//         let r = x%10
//         sum+= (r ** String(i).length)
//     }
//     s+= (sum==i) ?`${i} `:""
// }
// console.log(s)

// ---while loop----
// let end = Number(prompt("Enter last number to print armstrong series"))
// let s=""
// for (i=1; i<=end; i++)
// {
//     let sum = 0
//     let x= i
//     while (x!=0)
//     {
//         let r = x%10
//         sum+= (r ** String(i).length)
//         x= parseInt(x/10)
//     }
//     s+= (sum==i) ?`${i} `:""
// }
// console.log(s)

// ---do-while loop----

// let end = Number(prompt("Enter last number to print armstrong series"))
// let s=""
// for (i=1; i<=end; i++)
// {
//     let sum = 0
//     let x= i
//     do
//     {
//         let r = x%10
//         sum+= (r ** String(i).length)
//         x= parseInt(x/10)
//     }while (x!=0)
//     s+= (sum==i) ?`${i} `:""
// }
// console.log(s)



// 17.Fibnacie Series(0 1 1 2 3 5 8 13..)

// first=0
// second=1
// s="0 1"
// while(second<100)
// {
//     let sum=first+second
//     s+=" "+String(sum)
//     first=second
//     second=sum
// }
// console.log(s)



// 18.Print the 5 Table(1 * 5 = 5)
// ----for loop----

// let n= Number(prompt("Enter a number to display its tables"))
// for(x=1;x<=10;x++)
// {
//     console.log(`${x} * ${n} = ${x*n}`)
// }

// ---while loop----
// let x=1
// let n= Number(prompt("Enter a number to display its tables"))
// while(x<=10)
// {
//     console.log(`${x} * ${n} = ${x*n}`)
//     x++
// }

// ---do-while loop----

// let x=1
// let n= Number(prompt("Enter a number to display its tables"))
// do
// {
//     console.log(`${x} * ${n} = ${x*n}`)
//     x++
// }while(x<=10)




// 19.Sum of digit(1 + 2 + 3 + ...)
// ----for loop----
// let n = Number(prompt("Enter the last natural number"))
// let sum=0
// for(i=1;i<=n;i++)
// {
//     sum+=i
// }
// console.log(`sum of natural numbers 1 to ${n} is ${sum}`)

// ---while loop----
// let n = Number(prompt("Enter the last natural number"))
// let sum=0
// let i=1
// while (i<=n)
// {
//     sum+=i
//     i++
// }
// console.log(`sum of natural numbers 1 to ${n} is ${sum}`)

// ---do-while loop----
// let n = Number(prompt("Enter the last natural number"))
// let sum=0
// let i=1
// do
// {
//     sum+=i
//     i++
// }while (i<=n)
// console.log(`sum of natural numbers 1 to ${n} is ${sum}`)



// 20.Palindrom or not BAAB,MALAYALAM
// ----for loop----
// let word= prompt("Enter the word")
// let wordLen= word.length-1
// let answer="a palindrome"
// for(i=0;i<=wordLen/2;i++)
// {
//     if (word[i] != word[wordLen-i])
//     {
//         answer= "not a Palindrome"
//         break
//     }
// }
// console.log(`${word} is ${answer}`)

// ---while loop----
// let word= prompt("Enter the word")
// let start=0
// let end= word.length-1
// let answer="a palindrome"
// while (start<end)
// {
//     if (word[start] != word[end])
//     {
//         answer= "not a Palindrome"
//         break
//     }
//     start++
//     end--
// }
// console.log(`${word} is ${answer}`)

// ---do-while loop----

// let word= prompt("Enter the word")
// let start=0
// let end= word.length-1
// let answer="a palindrome"
// do
// {
//     if (word[start] != word[end])
//     {
//         answer= "not a Palindrome"
//         break
//     }
//     start++
//     end--
// }while (start<end)
// console.log(`${word} is ${answer}`)