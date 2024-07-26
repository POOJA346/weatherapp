//it will show different different location temp
        const apiKey="0bbc2a0304aa80aa8e41bcde3dfabd03";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox=document.querySelector(".search input");
        const searchBtn =document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");
    
        async function checkWeather(city){
            const response =await fetch(apiUrl+ city +`&appid=${apiKey}`);
// if city name is invalid
            if(response.status== "404")
            {
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }

            // elseeeeeeeeeee
            else
            {
                var data= await response.json();
            console.log(data);


            //check in front web page accordin to weather
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=
            Math.round(data.main.temp)+ "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed+ " Km/h";

            if(data.weather[0].main == "Clouds")
            {
                weatherIcon.src="images/clouds.png";
            }

            else  if(data.weather[0].main == "Mist")
            {
                weatherIcon.src="images/mist.png";
            }
            else  if(data.weather[0].main == "Clear")
            {
                weatherIcon.src="images/clear.png";
            }
            else  if(data.weather[0].main == "Drizzle")
            {
                weatherIcon.src="images/drizzle.png";
            }
            else  if(data.weather[0].main == "Rain")
            {
                weatherIcon.src="images/rain.png";
            }
            else  if(data.weather[0].main == "Snow")
            {
                weatherIcon.src="images/snow.png";
            }
            document.querySelector(".error").style.display="none";
                document.querySelector(".weather").style.display="block";
            

            }

            
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

       