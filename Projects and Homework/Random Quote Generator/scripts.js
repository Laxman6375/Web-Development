let url = "https://quote-garden.onrender.com/api/v3/quotes";
let quote = document.querySelector(".quote");
let quoteAuthor = document.querySelector(".quoteAuthor");

let btn = document.querySelector(".btn");




async function getQuotes() {
    try {
            let res = await fetch(url);
    let result = await res.json();

    
    let data = result.data;

    let randIdx = Math.floor(Math.random() * data.length);
    
    quote.innerText = `" ${data[randIdx].quoteText} "`;
    quoteAuthor.innerText = `~ ${data[randIdx].quoteAuthor}`;
    } catch (err) {
        console.log(err);
    }
    

}

btn.addEventListener("click", () => {
    getQuotes();
})
