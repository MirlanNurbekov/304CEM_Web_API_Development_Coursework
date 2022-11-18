import React from 'react'

const storeData1 = ({city,country,temperature,humidity}) => { 
  // user email is saved in Local Storage in login 'Login.js' line 24
  var getEmail = localStorage.getItem('userEmail');
  

  async function dataClickedFavorite(event) {
    event.preventDefault()
    
    const response = await fetch('http://localhost:1337/api/safedWeather', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        getEmail,
        city,
        country,
        temperature,
        humidity,
      })
    })

    const data = await response.json()
    if (data.status === 'ok'){
      console.log('Save data button ok')
    }
  }

  return (
    <div>
    
    <h2>Location: {city} | {country}</h2>
    <h2>Temperature: {temperature}&deg;C</h2>
    <h2>Humidity: {humidity}%</h2>
    <div><button className='customButton' onClick={dataClickedFavorite}>Save</button></div>
    </div>
  )
}

export default storeData1