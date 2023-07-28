// function sync(){
//     console.log('first');
// }

// sync();

// console.log('second');

// setTimeout(function(){
//     console.log('third');
// },3000)

// function sync(){
//     console.log('first');
// }

// sync();

// console.log('second');

// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise1');
//     },5000);
//     // return 2;
//     // resolve(2233);
//     reject(new Error('Bhaisaab error aaye hai'));
// });

// meraPromise.then((value) => {console.log(value)}, (error) => {console.log("Recieved an Error")});


// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },3000);
//     // reject(new Error('Bhaisaab error aaye hai'));
//      // resolve(2233);
// });

// console.log('Phela');


// let waaada1 = new Promise(function(resolve, reject){
//     setTimeout(() =>{
//         console.log('Settimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waaada1.then(() => {
//     let waaada2 = new Promise(function(resolve,reject){
//         resolve("waada 2 resolved");
//     });
//     setTimeout(() =>{
//         console.log('Settimeout2 started');
//     },3000);
//     return waaada2
// })
// output.then((value) => console.log(value));

// async function abcd(){
//     return "kya hua tera";
// }
// console.log(abcd());

// async function utility(){
//     let delhiMousam = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("Delhi me bohot garmi h");
//         },10000);
//     });
    
//     let hydrabadMousam = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("Hyderabad me bohot sardi h");
//         },20000);
//     });

//     let dM = await delhiMousam;
//     let hM = await hydrabadMousam;

//     return [dM, hM];
// }
// let obj = {
//     heading : "head"
// };
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output =  await content.json();
//     console.log(output);
// }

// utility();


// async function helper (){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Lucky',
//           body: 'medium',
//           userId: 6358  ,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//       let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//       let response = content.json();
//       return response;
// }


// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName();
  }
  let a = init();
  a();
  



