import React, {useState, useEffect} from 'react';
import './Weather.css';
import {firstAPIdata} from './weatherapi';
import Navbar from '../components/Navbar';
import StoreData1 from "../components/storeData1";

function App() {
  const [firstAPIweatherdata, setFirstAPIdata] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  
  //savedata

  const getData = async () => {
    try{
        
        const data = await firstAPIdata(city);
        setFirstAPIdata(data);
     

    }catch(error) {
      console.log("THIS IS NOT A PLACE");
      console.log(error.message);
    }
  }
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
  useEffect(() => {
    getData();
  }, []);
  return (
<>
      <Navbar/>

      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>The first source - openweathermap.org</h2>
        <div className="search-form">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
          <button onClick={() => getData()}>Search</button>
        </div>
       
          {firstAPIweatherdata !== null ? (
            
          <div className="main-container">
              <div className="weather-icon">
                <img src={`http://openweathermap.org/img/w/${firstAPIweatherdata.weather[0].icon}.png`} alt="imgicon"/>
            </div>
            <h2>{firstAPIweatherdata.weather[0].main}</h2>
            <StoreData1
                        city={firstAPIweatherdata.name}
                        country={firstAPIweatherdata.sys.country}
                        temperature={parseFloat(firstAPIweatherdata.main.temp - 273.15).toFixed(1)}
                        humidity={firstAPIweatherdata.main.humidity}
                        />
        </div>
        ) : null}
              
      </div>
    </>
  );
}

export default App;