//Roll Dice Function
// function rollDice(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random);
// }

// rollDice();


//Function With Arguments 
// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);}

// printInfo("Laxman",25);

// function sum(a, b){
//     return a+b;
// }

// sum(2,4);
// sum(5,4)
// console.log(sum(3,4));

//Average of numbers
// function average(a, b, c){
//     let avg = (a+b+c) / 3;
//     console.log('Average is',avg);
// }

// average(2,4,6);

//Multiplication Table

// function mulTab(n){
//     for(let i=1; i<=n; i++){
//         for(j = 1; j<=10; j++){
//             console.log(i + " * " + j + " = " + i*j);
//         }
//         console.log('\n');
//     }
// }

// mulTab(5);

// function isAdult(age){
//     if(age >= 18){
//         return "Adult";
//     }
//     else{
//         return "Not Adult";
//     }
// }

// function sumToN(n){
//     let sum = 0;

//     for(let i =0; i<=n; i++){
//     sum += i;
//     }
//     return sum;
// }

// let str = ["hi", "hello", "bye", "!"];

// function concat(str){
//     let result = "";
    
//     for(let i =0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }

//----------------------------Function Scope-------------------------------------------------------

//-----Function Scope ------
// let sum = 54; //Global Scope

// function calSum(a, b){
//     let sum = a+b; //Function Scope
// }

// console.log(sum); //This line gives error that sum is not defined

//--------Block Scope----------
// {
//     let a = 25;
// }
// console.log(a); // gives error that a is not defined

//---------------lexical Scope------------

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }

//     innerFunc();
// }

// let greet = "hello" //Global Scope

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet); //Function Scope

//     function innerGreet(){
//         console.log(greet); //Lexical Scope
//     }

//     innerGreet();
// }

// console.log(greet);
// changeGreet();


//---------------------Function Expression-----------------------
// let sum = function(a,b){
//     return a+b;
// }

// function multipleGreet(func, count){   //higher order function
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log('Hello');
// }

// multipleGreet(greet, 3);


// function oddOrEvenFactory(request){
//     if(request == "odd"){     
//     return function(n){
//         console.log(!(n%2 == 0));
// }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log((n%2 == 0));
//         }
//     }
//     else{
//         console.log('Wrong request');
//     }
// }

// let request = "odd";

//---------------------Methods-----------------

const calculator = {
    num: 55,
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    }
}







