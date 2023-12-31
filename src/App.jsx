import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const App = () => {
  const api = {
    key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const dateBuilder =(d) => {
    let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return  `${day} ${date} ${month} ${year}`
  }
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
 

  const search = evt => {
    evt.preventDefault()
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          // console.log(result);
        });
    
  }
  return (
    <>
    <h1>Welcome to my weather App</h1>
     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <form className="search-box" onSubmit={search}>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
        </form>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
    </>
  )
}

export default App