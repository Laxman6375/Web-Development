console.log('jheelu khan');

//object create

// let rectangle = {
//     length : 1,
//     bredth : 2,

//     draw : function() {
//         console.log('draw');
//     }
// };

//factory function
// function createRectangle(len, bre) {
//     return  rectangle = {
//         length : len,
//         bredth : bre,
    
//         draw() {
//             console.log('draw');
//         }
//     };
// }

//camelCase -> numberOfStudents
//consturctor function -> Pascal Notation -> first letter of every word is captital -> NumberOfStudents
//consturctor function -> prop/methods -> intialise/Define
function Rectangle(len, bre) {
    this.length = len;
    this.bredth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}

//object creation using consturctor
let rectangleObj = new Rectangle(4,5);

// rectangleObj.color= 'yellow';
// console.log(rectangleObj);

// delete rectangleObj.color;
// console.log(rectangleObj);

let Rectangle1 = new Function(
    'length', 'bredth',
`this.length = length;
 this.bredth = bredth;
this.draw = function(){
    console.log('drawing');
}`);

//object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// console.log(rect);



// let rectangleObj1 = createRectangle(5, 4);
// let rectangleObj2 = createRectangle(5, 2);
// let rectangleObj3 = createRectangle(6, 4);
// let rectangle1 = {
//     length : 1,
//     bredth : 2,

//     draw : function() {
//         console.log('draw');
//     }
// };

// let rectangle2 = {
//     length : 1,
//     bredth : 2,

//     draw : function() {
//         console.log('draw');
//     }
// };

// let a = 10;
// let b = a;
//  a++;

//  console.log(a);
//  console.log(b);

// let a = { value : 10};

// let b = a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a){
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10};

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle =  {
    length : 2,
    bredth : 4
};

//for in loop
// for(let key in rectangle){

//     //keys are reflected to through key variable
//     //values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }

//for of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


// if('length' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }


//object clone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//object clone #2

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = Object.assign({}, src);
// console.log(dest);

// src.a++;
// console.log(dest);

//object clone #3

let src = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);