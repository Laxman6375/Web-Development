const inputSlider = document.querySelector(".slider");
const lengthDisplay = document.querySelector(".LengthNumber");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector(".copyBtn");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#Symbols");
const indicator = document.querySelector(".indicator");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!@#$%^&*()_-+=~`[]{}|:;<>?,.";

//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set strength circle color to grey
setIndicator("#ccc");


//set password length
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    //or bhi kuch add karna chahiye
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

function getRndInteger(min,max){
   return Math.floor(Math.random() * (max - min)) + min;

}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}


async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText ="copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function sufflePassword(array){
    //fisher yates method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange (){
    checkCount = 0;
    allCheckBox.forEach( (checkbox) =>{
        if(checkbox.checked)
        checkCount++;
    });

    //special condition
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) =>{
    checkbox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener("click", () => {
    if (passwordDisplay.value)
        copyContent();
});

generateBtn.addEventListener('click', () =>{
    //none of the checkbox are selected
    if(checkCount == 0) 
    return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //let's start the journey to find new password
    console.log("Starting the Journey");

    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes
    // if(uppercaseCheck.checked){
    //     password = generateUpperCase();
    // }

    // if(lowercaseCheck.checked){
    //     password = generateLowerCase();
    // }

    // if(numberCheck.checked){
    //     password = generateRandomNumber();
    // }

    // if(symbolCheck.checked){
    //     password = generateSymbol();
    // }
    
    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);
    
    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numberCheck.checked)
        funcArr.push(generateRandomNumber);
    
    if(symbolCheck.checked)
        funcArr.push(generateSymbol);

    //cumpulsory addtion
    for(let i =0; i<funcArr.length; i++){
        password += funcArr[i]();
    }
    console.log("Compulsory addtion done");

    //remaining addition
    for(let i =0; i<passwordLength - funcArr.length; i++){
        let randIndex = getRndInteger(0, funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining addtiton done");

    //suffle password
    password = sufflePassword(Array.from(password));
    console.log("suffling done");

    //show in ui
    passwordDisplay.value = password;
    console.log("ui addition done");
    //calculate strength
    calcStrength();
});





