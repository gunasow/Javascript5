console.log("Palindrome of not with For");
function isPalindromeWOparam() {
    let word= prompt("Enter the word");
    let wordLen= word.length-1;
    let answer="a palindrome";
    for(i=0;i<=wordLen/2;i++)
    {
        if (word[i] != word[wordLen-i])
        {
            answer= "not a Palindrome";
            break;
        }
    }
    console.log(`${word} is ${answer}`);
}

isPalindromeWOparam();

function isPalindromeWparam(word) {
    let wordLen= word.length-1;
    let answer="a palindrome";
    for(i=0;i<=wordLen/2;i++)
    {
        if (word[i] != word[wordLen-i])
        {
            answer= "not a Palindrome";
            break;
        }
    }
    console.log(`${word} is ${answer}`);
}
let word= prompt("Enter the word");
isPalindromeWparam(word);

function isPalindromeWReturn(wordd) {
    let wordLen= wordd.length-1;
    let answer="a palindrome";
    for(i=0;i<=wordLen/2;i++)
    {
        if (wordd[i] != wordd[wordLen-i])
        {
            answer= "not a Palindrome";
            break;
        }
    }
    return `${wordd} is ${answer}`;
}
let wordd= prompt("Enter the word");
console.log(isPalindromeWReturn(wordd));




console.log("Palindrome of not with While");
function isPalindromeWOparam() {
    let word= prompt("Enter the word");
    let start=0
    let end= word.length-1
    let answer="a palindrome";
    while (start<end)
    {
        if (word[start] != word[end])
        {
            answer= "not a Palindrome"
            break
        }
        start++
        end--
    }
    console.log(`${word} is ${answer}`);
}

isPalindromeWOparam();

function isPalindromeWparam(word) {
    let start=0
    let end= word.length-1
    let answer="a palindrome";
    while (start<end)
    {
        if (word[start] != word[end])
        {
            answer= "not a Palindrome"
            break
        }
        start++
        end--
    }
    console.log(`${word} is ${answer}`);
}
let word= prompt("Enter the word");
isPalindromeWparam(word);

function isPalindromeWReturn(wordd) {
    let start=0
    let end= wordd.length-1
    let answer="a palindrome";
    while (start<end)
    {
        if (wordd[start] != wordd[end])
        {
            answer= "not a Palindrome"
            break
        }
        start++
        end--
    }
    return `${wordd} is ${answer}`;
}
let wordd= prompt("Enter the word");
console.log(isPalindromeWReturn(wordd));



console.log("Palindrome of not with Do While");
function isPalindromeWOparam() {
    let word= prompt("Enter the word");
    let start=0
    let end= word.length-1
    let answer="a palindrome";
    do
    {
        if (word[start] != word[end])
        {
            answer= "not a Palindrome"
            break
        }
        start++
        end--
    }
    while (start<end)
    console.log(`${word} is ${answer}`);
}

isPalindromeWOparam();

function isPalindromeWparam(word) {
    let start=0
    let end= word.length-1
    let answer="a palindrome";
    do
    {
        if (word[start] != word[end])
        {
            answer= "not a Palindrome"
            break
        }
        start++
        end--
    }
    while (start<end)
    console.log(`${word} is ${answer}`);
}
let word= prompt("Enter the word");
isPalindromeWparam(word);

function isPalindromeWReturn(wordd) {
    let start=0
    let end= wordd.length-1
    let answer="a palindrome";
    do
    {
        if (wordd[start] != wordd[end])
        {
            answer= "not a Palindrome"
            break
        }
        start++
        end--
    }
    while (start<end)
    return `${wordd} is ${answer}`;
}
let wordd= prompt("Enter the word");
console.log(isPalindromeWReturn(wordd));