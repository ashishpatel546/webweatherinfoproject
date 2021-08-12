cityname = document.getElementById("cityname");
cityData = document.getElementById("cityData"); 
countryData= document.getElementById("countryData");
temp = document.getElementById("temp");
tempstatus = document.getElementById("tempstatus");


const getData= async(event)=>{
    event.preventDefault();
    let city = cityname.value;
    if (city===""){
        alert("Enter City Name Before Entering Search")
    }
    else{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0f915c66d61b92fd7428b12ab0ea03d1`;
        try {
            const response = await fetch(url);
            data = await response.json();
            finalData = [data]
            cityData.innerText = finalData[0].name;
            countryData.innerText = finalData[0].sys.country;
            temp.innerText = finalData[0].main.temp;
            // console.log(finalData[0].sys.country);
            tempMood = finalData[0].weather[0].main;
            // console.log(tempMood);
            if (tempMood === "Rain" ){
                    tempstatus.innerHTML = '<i class="fas fa-cloud-rain"></i>'
                    }
                    
            else if (tempMood==="Clouds") {
                    tempstatus.innerHTML = '<i class="fab fa-cloudflare"></i>'
                    
            } 
            else if (tempMood==="Clear"){
                    tempstatus.innerHTML = '<i class="far fa-sun"></i>'
                    }
            else {
                    tempstatus.innerHTML = '<i class="fas fa-sun"></i>'
            }


        } catch (error) {
            cityData.innerhtml="Please Enter Proper City Name";
        }
        
    }
    
}



const submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", getData);





