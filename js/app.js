const BtnGetW = document.getElementById('btnGetWeather')
const CityS = document.getElementById('city')
let CityF = {}

BtnGetW.addEventListener('click', () => {
    if(CityS.value.trim().length > 0) {
        GetW(CityS.value)
    }else{  
        alert('nmme padrino, ponga algo')
        CityS.focus()
    }
})

const newData = () => {
    console.log(CityF)
    const city = document.getElementById('NCName')
    const time = document.getElementById('NCTime')
    const temp = document.getElementById('NCtemp')
    const weather = document.getElementById('NCweather')
    const wind = document.getElementById('NCwind')
    const humidity = document.getElementById('NChumidity')
    const what = document.getElementById('NCwhat')

    city.textContent = CityF.city
    time.textContent = CityF.last_update
    temp.textContent = CityF.temp
    weather.textContent = CityF.current_weather
    wind.textContent = CityF.wind
    humidity.textContent = CityF.humidity
    what.textContent = CityF.uv_index
    
}