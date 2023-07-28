
const API_KEY = "168771779c71f3d64106d8a88376808a";

function renderWeatherInfo(data){
        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    
        document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    // let latitude = 15.3333;
    // let longitude = 74.0833;

    try{
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json();
        console.log("Weather data: ->", data);
    
        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    
        // document.body.appendChild(newPara);
        renderWeatherInfo(data);
    }
    catch(err){
        console.log('error aaya hai')
    }


}

async function getCustomWeatherDetails(){
    try{
        let lat = 26.0566673;
        let lon  = 72.7448129;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        let data = await result.json();
        console.log(data);
    }

    catch(err){
        console.log("error found", err);
    }
}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log('no geo location');
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let log = position.coords.longitude;

    console.log(lat);
    console.log(log);
}