import axios from 'axios';
import React, { useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=69e34c9d5f3034a4feb801dccf8866c5`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className='search'>
        <input className='input'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'>
        </input>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        {data.name !== undefined &&
          <div className='bottom'>
            <div className='feels'>
              <p className='bold'>{data.main ? <p>{data.main.feels_like.toFixed()} °C</p> : null}</p>
              <p>Feels Like</p></div>
            <div className='humidity'>
              <p className='bold'>{data.main ? <p>{data.main.humidity} %</p> : null}</p>
              <p>Humidity</p></div>
            <div className='wind'>
              <p className='bold'>{data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}</p>
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
