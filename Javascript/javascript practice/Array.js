
//--------------------For Each--------------------------
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
// });

// arr.forEach(function (el) {
//     console.log(el);
// });

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);


// let arr = [
//     {
//         name: "laxman",
//         marks: 95
//     },
//     {
//         name: "aakash",
//         marks: 91
//     },
//     {
//         name: "lucky",
//         marks: 93.25
//     },
// ]

// arr.forEach((student) => {
//     console.log(student.marks);
// })

//-----------------------Map---------------------
// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * el;
// });

// let students = [
//     {
//         name: "laxman",
//         marks: 95
//     },
//     {
//         name: "aakash",
//         marks: 91
//     },
//     {
//         name: "lucky",
//         marks: 93.25
//     },
// ];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// })

//------------------------Filter------------------------------

// let nums = [1, 2, 5, 6, 8, 11, 6, 8, 7, 9,];

// let ans = nums.filter((el) => {
//     return el % 2 == 0;  //even -> true, odd -> false
// });


//-----------------------Every---------------------------------
// let arr = [2, 4, 6];
// arr.every((el) => el % 2 == 0);


//------------------------REDUCE--------------

// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);

// let arr = [1, 5, 9, 5, 6, 2, 3, 15, 14, 5, 21,];

// let max = -1;

// for (let i = 0; i < arr.length; i++){
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;
//     }
//     else {
//         return max;
//     }
// });

// console.log(max);

// let nums = [10, 20, 40, 30, 50];
// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);

// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//     if (min < el) {
//         return min;
//     }
//     else {
//         return el;
//     }
//     });
//     return min;
// };

//-----------------------Default Parameter------------------

// function sum(a, b = 3) {
//     return a + b;
// }
// sum(2);

//----------spread---------
// let arr = [1, 2, 3, 4, 5, 6];
// let obj1 = { ...arr };
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];

// let nums = [...odd, ...even];

// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd"
// };

// let dataCopy = { ...data, id: 123, name: "Laxman" };

// function sum(...args) {
//     for (let i = 0; i < args.length; i++){
//         console.log('you gave us:',args[i]);
//     }
// }

// function min(a, b, c, d) {
//     console.log(arguments);
// }

const student = {
    name: "laxman",
    age: 15,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "abcd",
    password: "fdjf"
};

let { username, password } = student;




