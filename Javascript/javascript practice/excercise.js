// function sum(a, b) {
//     return a + b;
// }

// sum(5, 7);


// function str(lax) {
//     return lax.length;
// }

// const lax = "Laxman Suthar";

// console.log(`Length of ${lax} is`, str(lax));


// Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// function program(a, b) {
//     function sum() {
//         return a + b;
//     };

//     function diff() {
//         return a - b;
//     };

//     function mul() {
//         return a * b;
//     };

//     function div() {
//         return a / b;
//     };

//     console.log(" Sum is -> " ,sum(), "\n Difference is ->",diff(), "\n Multiply is ->", mul(), "\n Division is ->", div());
// };

// program(8, 4);

// Write a function that takes two numbers as arguments and returns the larger number.

// function larger(a, b) {
//     return a > b ? a : b;
// }

// function printLarge(a,b) {
//     console.log(`Larger Number is: ${larger(a,b)}`);
// }

// printLarge(8,5);


// Write a program that displays a string in reverse order.

// function revStr(str) {
//     return str.split("").reverse().join("");
// }

// console.log(revStr("Laxman Suthar"));


// Write a program that displays a string in reverse order.

// function checkNumber(a) {
//     return a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero";
// }

// console.log(checkNumber(10));
// console.log(checkNumber(-50));
// console.log(checkNumber(0));

// Write a program that takes a number and prints the multiplication table for that number.

// function Table(a) {
//     console.log(`Table of ${a} is :`);
//     for (let i = 1; i <= 10; i++){
//         console.log(`${a} * ${i} = ${a * i}`);
//     }
// }

// Table(10);

// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function sumOfN(n) {
//     let count = 0;

//     for (let i = 0; i <= n; i++){
//         count += i;
//     }
//     console.log(count);
// }

// sumOfN(5);


// Write a program that takes a string and prints out the number of vowels in the string.

// function countVowel(str) {
//     let count = 0;

//     for (let s of str) {
//         if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' || s === 'I' || s === 'O' || s === 'A' || s === 'U' || s === 'E') {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowel("Laxman Suthar");

// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

// function findCommonElements(arr1, arr2) {
//     // Create a set to store unique common elements
//     const commonSet = new Set();

//     // Loop through each element in the first array
//     for (let num of arr1) {
//         // If the element is also present in the second array, add it to the set
//         if (arr2.includes(num)) {
//             commonSet.add(num);
//         }
//     }

//     // Convert the set back to an array and sort it in ascending order
//     const commonArray = Array.from(commonSet).sort((a, b) => a - b);

//     return commonArray;
// }

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const result = findCommonElements(array1, array2);
// console.log(result); // Output: [3, 4, 5]


// Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.
// function greet(name) {
//     console.log(`Good Morning! ${name}`);
// }

// greet("Laxman");

// Write a function called 'getSquare' that takes a number parameter and returns its square.
// function square(n) {
//     console.log(n*n);
// }

// square(7);


// Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str)
{
    let count = {};
    for(let ch of str)
    {
        if(count[ch])
        {
            count[ch]++;
        }
        else{
            count[ch] = 1;
        }
    }
    return count;
}

console.log(countLetters("My Name is Priyansh PAtel"));















