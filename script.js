const apikey = "3f78daa76dbe934b57aaa61a742b5d45";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search-input");

const btn = document.querySelector(".bi-search");
 
const sticker = document.querySelector(".img");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed +"km/h";
   if(data.weather[0].main == 'clear'){
      sticker.src="img/clear.png";
   }else if(data.weather[0].main == 'rain'){
      sticker.src="img/rains.png";
   }else if(data.weather[0].main == 'clouds'){
      sticker.src="img/clouds.png";
   }else if(data.weather[0].main == 'sunny'){
      sticker.src="img/sun.png";
   }else if(data.weather[0].main == 'mist'){
      sticker.src="img/mist.png";
   }else if(data.weather[0].main == 'drizzle'){
      sticker.src="img/drizzle.png";
   }
}

btn.addEventListener("click", () =>{
    checkweather(search.value);
    document.querySelector(".main").classList.remove('main');
})
