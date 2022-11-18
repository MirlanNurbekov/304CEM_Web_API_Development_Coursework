import React from 'react'; 

const RemoveDisplay = ({city,country,temperature,humidity})=> {
 
  var getEmail = localStorage.getItem('userEmail'); // to send to server

  async function removeData(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/removeWeather', {
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
      window.location.href = '/savedInformation';
    }
  }

  return (
    <div >
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Location: {city} | {country}  &nbsp;&nbsp;---&nbsp;&nbsp; Temperature: {temperature}&deg;C &nbsp;&nbsp;---&nbsp;&nbsp; Humidity: {humidity}%
    <button onClick={removeData}>✖</button> </h3>
    </div>
  
  )
}

export default RemoveDisplay