let a = 25;
console.log(typeof(a));

let b = "25"
console.log(typeof(b));

let a = 25 + 6 + " Shuvo"
console.log(a);
let myName = "Riyaz "
let b = "Shuvo " + 25 + 6;
console.log(b);


var fatchData = 45;
console.log(a);
var a = 55;
console.log(a);

let a = 45
console.log(a);

 let a = 55;
console.log(a);



var a = 45
let b = 55;
const c = 65;


{
    var a = 45
    let b = 55;
    const c = 65
}
// console.log(b);
// console.log(c);
console.log(a);


function sum() {
    let a = 34;
    const b = 45
    var c = 21;
}

let a = 7;

console.log(a++);
console.log(a);
console.log(++a);

let a = 7;

a = a + 8;
a+=8;

// 1 - positive or negative
let age = 18;

if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Child ");
}


// 2- odd or even
let  = 700;

if (-600) {
    console.log("Positive");
}
else {
    console.log("Nagative ");
}


// 1- positive or neg

let number = 0;

console.log(number>0);

if (number > 0) {
    console.log("Positive");
}
else if (number == 0) {
    console.log("Zero");
}
else {
    console.log("Negative");
}

// || &&

// 2- even or odd
let number = 17;

if (number % 2!= 0) {
    console.log("Odd number");
}
else {
    console.log("Even Number");
}

// 3 - Find max between 2 numbers
let number1 = 11;
let number2 = 11;

if (number1 > number2) {
    console.log("Number1 is grater number");
}
else if (number1 == number2) {
    console.log("Both number is equal");
}
else {
    console.log("Number2 is grater number");
}

//  4- Find max among 3 numbers

let number1 = 11
let number2 = 13
let number3 = 15


if ((number1 > number2) && (number1 > number3)) {
    console.log("Number1 is grater number");
}
else if (number2 > number1 && number2 > number3) {
    console.log("Number2 is grater number");
}
else {
    console.log("Number3 is grater number");
}

// 5- Check vowel or consonant

let char='a';
if(char ==='a'||char==='e'|| char==='i'||char==='o'||char==='u'||char ==='A'||char==='E'|| char==='I'||char==='O'||char==='U'){
    console.log("vowel");
}
else{
    console.log(consonant);
}


// 6input week number and console total day
// let week=5;
// console.log(week *7);

// 7 input month number and console number of days in that month

let month=2;
if(month==1)
{
    console.log("31 days");
}
else if (month==2){
    console.log("28 days");
}

// 8Number of day in a date
// 31-12-1980

let year = 2006;
let month = 5;
let day = 1;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    if (month == 1) {
        totalday = day
    }
    else if (month == 2) {
        totalday = 31 + day
    }
    else if (month == 3) {
        totalday = 31 + 29 + day
    }
    else if (month == 4) {
        totalday = 31 + 29 + 31 + day
    }
    else if (month == 5) {
        totalday = 31 + 29 + 31 + 30 + day
    }
    else if (month == 6) {
        totalday = 31 + 29 + 31 + 30 + 31 + day
    }
    else if (month == 7) {
        totalday = 31 + 29 + 31 + 30 + 31 + 30 + day
    }
    else if (month == 8) {
        totalday = 31 + 29 + 31 + 30 + 31 + 30 + 31 + day
    }
    else if (month == 9) {
        totalday = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + day
    }
    else if (month == 10) {
        totalday = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day
    }
    else if (month == 11) {
        totalday = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day
    }
    else if (month == 12) {
        totalday = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day
    }
}

else {
    if (month == 1) {
        totalday = day
    }
    else if (month == 2) {
        totalday = 31 + day
    }
    else if (month == 3) {
        totalday = 31 + 28 + day
    }
    else if (month == 4) {
        totalday = 31 + 28 + 31 + day
    }
    else if (month == 5) {
        totalday = 31 + 28 + 31 + 30 + day
    }
    else if (month == 6) {
        totalday = 31 + 28 + 31 + 30 + 31 + day
    }
    else if (month == 7) {
        totalday = 31 + 28 + 31 + 30 + 31 + 30 + day
    }
    else if (month == 8) {
        totalday = 31 + 28 + 31 + 30 + 31 + 30 + 31 + day
    }
    else if (month == 9) {
        totalday = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + day
    }
    else if (month == 10) {
        totalday = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day
    }
    else if (month == 11) {
        totalday = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day
    }
    else if (month == 12) {
        totalday = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day
    }
}

console.log("Total days", totalday);

// 9Result Sheet

let marks = 0
if (marks <= 100 && marks >= 0) {
    if (marks >= 80) {
        console.log("A+");
    }
    else if(marks>=70){
        console.log("A");
    }
    else if (marks<=32){
        console.log("F");
    }

}
//10-calculate electricity bill from given condition

let unit =250
if (unit <= 50) {
    amount = unit * .50;
}
else if (unit <= 100) {
    amount = ((50 * .50) + (unit - 50) * .75);
}
else if ((unit <= 150)) {
    amount = (50 * .50) + ((100 - 50) * .75) + (unit - 100) * 1.20;
}
else {
    amount = (50 * .50) + ((100 - 50) * .75) + ((200 - 100) * 1.20) + (unit - 250) * 1.50;
}
 console.log(amount);