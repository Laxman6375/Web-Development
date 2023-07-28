
function eventFucntion(){
    console.log('I have clicked on the document');
}
// document.addEventListener('click',eventFucntion);

// let lucky = document.querySelector('h1');


// lucky.addEventListener('click', function(){
//     lucky.style.background = 'red';
// });

// document.removeEventListener('click', eventFucntion);

//    const content = document.querySelector('#wrapper');
//    content.addEventListener('click', function(laxman){
//     console.log(laxman);
//    });

// let links = document.querySelectorAll('a');

// let thirdlink = links[2];

// thirdlink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('maja aaya');
// });

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('Para ' + event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i =1; i<=100; i++){ 
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);


let element = document.querySelector('#lucky');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr ckick kia hai ' + event.target.textContent);
    }
});


