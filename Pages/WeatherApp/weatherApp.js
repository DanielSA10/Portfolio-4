let inputBtn = document.querySelector('.inputBtn')
let inputCountry = document.querySelector('#inputCountry')
inputCountry.value = ""

inputBtn.addEventListener('click', e => {
    if(inputCountry.value === "") {
        alert('Please enter a destination')
    } else {

    e.preventDefault()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b41ac54e79msh4cbeef0015cfe61p18edebjsnd9c29c515f10',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    let searchInput = inputCountry.value
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchInput}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log(response.location.localtime.substring(11))
        
        //First Container
            let name = document.querySelector('.name')
            name.innerText = response.location.name
            let time = document.querySelector('.time')
            time.innerText = response.location.localtime
            let temperature = document.querySelector('.firstContentDegrees')
            let firstContentState = document.querySelector('.firstContentState p')
            firstContentState.innerText = response.current.condition.text
            temperature.innerText = Math.floor(response.current.temp_c) + '°'
            

            //Dynamic background based on location time
            let wrapper = document.querySelector('.wrapper')
        
            if(parseInt(response.location.localtime.substring(11)) <= 09) {
                wrapper.style.backgroundImage = "url(img/Morning/morning.jpg)"
                name.style.color = "#333333"
                time.style.color = "#333333"
            } else if (parseInt(response.location.localtime.substring(11)) <= 17) {
                wrapper.style.backgroundImage = "url(img/Midday/midday.jpg)"
                name.style.color = "#333333"
                time.style.color = "#333333"
            } else if (parseInt(response.location.localtime.substring(11)) <= 21) {
                wrapper.style.backgroundImage = "url(img/Evening/evening.jpg)"
                name.style.color = "#fff"
                time.style.color = "#fff"
            } else {
                wrapper.style.backgroundImage = "url(img/Night/night.jpg)"
            }
    
    
        //Second Container

            //Chance of rain
            let rainStatus = document.querySelector('.highlightRain')
            let rainBall = document.querySelector('.rainBall')
            let rainText = document.querySelector('.rainSpan')
            if(response.forecast.forecastday[0].day.daily_chance_of_rain <= 0) {
                rainStatus.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
                rainBall.classList.add('bot')
                rainText.innerText = 'Low'
                rainText.style.color = '#e23131'
            } else if (response.forecast.forecastday[0].day.daily_chance_of_rain <=50) {
                rainStatus.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
                rainBall.classList.add('mid')
                rainText.innerText = 'Good'
                rainText.style.color = 'Orange'
            } else if (response.forecast.forecastday[0].day.daily_chance_of_rain > 50) {
                rainStatus.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
                rainBall.classList.add('Top')
                rainText.innerText = 'Great'
                rainText.style.color = '#4d76e7'
            }

            //Wind Status
            let windNumber = document.querySelector('.windNumber')
            let windFeelsLike = document.querySelector('.windFeelsLike p')
            windNumber.innerText = response.current.wind_kph
            windFeelsLike.innerText = response.current.wind_dir
            
            //Sunrise and sunset
            let sunrise = document.querySelector('.riseText')
            let sunset = document.querySelector('.setText')
            sunrise.innerText = response.forecast.forecastday[0].astro.sunrise
            sunset.innerText = response.forecast.forecastday[0].astro.sunset
            
            //Humidity
            let humidity = document.querySelector('.highlightHumidity')
            let humidityBall = document.querySelector('.humidityBall')
            let humidityText = document.querySelector('.humiditySpan')
            if(response.current.humidity <= 20) {
                humidity.innerText = response.current.humidity + '%'
                humidityBall.classList.add('mid')
                humidityText.innerText = 'dry '
                humidityText.style.color = '#e23131'
            } else if (response.current.humidity <= 60) {
                humidity.innerText = response.current.humidity + '%'
                humidityBall.classList.add('top')
                humidityText.innerText = 'Good'
                humidityText.style.color = '#4d76e7'
            } else {
                humidity.innerText = response.current.humidity + '%'
                humidityBall.classList.add('bot')
                humidityText.innerText = 'Wet '
                humidityText.style.color = '#e23131'
            }
           
            //Visibility
            let visibility = document.querySelector('.highlightVis')
            let visBall = document.querySelector('.visBall')
            let visText = document.querySelector('.higlightSpan')
            if(response.current.vis_km >= 10) {
                visibility.innerText = response.current.vis_km + '/km';
                visBall.classList.add('top')
                visText.innerText = 'Good'
                visText.style.color = '#4d76e7'
            } else if (response.current.vis_km <= 5) {
                visibility.innerText = response.current.vis_km + '/km';
                visBall.classList.add('mid')
                visText.innerText = 'Fine'
                visText.style.color = 'Orange'
            } else {
                visBall.classList.add('bot')
                visibility.innerText = response.current.vis_km + '/km';
                visText.innerText = 'Bad'
                visText.style.color = '#e23131'
            }
    
           
            //UV
            let UV = document.querySelector('.highlightUV')
            let uvBall = document.querySelector('.UvBall')
            let qualityText = document.querySelector('.UVText span')
            if(response.current.uv <= 2) {
                UV.innerText = response.current.uv
                uvBall.classList.add('top')
                qualityText.innerText = 'Good'
                qualityText.style.color = '#4d76e7'
            } else if(response.current.uv <= 5) {
                UV.innerText = response.current.uv
                uvBall.classList.add('mid')
                qualityText.innerText = 'Fine'
                qualityText.style.color = 'Orange'
            } else{
                UV.innerText = response.current.uv
                uvBall.classList.add('bot')
                qualityText.innerText = 'Bad'
                qualityText.style.color = '#e23131'
            }
        })
    }
})