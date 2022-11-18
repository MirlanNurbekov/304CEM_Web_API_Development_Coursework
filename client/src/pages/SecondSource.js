import React, {useState, useEffect} from 'react';
import './Weather.css';
import {secondAPIdata} from './weatherapi';
import Navbar from '../components/Navbar';
import StoreData2 from "../components/storeData2";

function App() {
  const [secondAPIweatherdata, setSecondAPIdata] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  
  //savedata

  const getData = async () => {
    try{
        
        const data = await secondAPIdata(city);
        setSecondAPIdata(data);
     

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
        <h2 className="title"><i className="fa fa-cloud"></i>The secons source - weatherapi.com</h2>
        <div className="search-form">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
          <button onClick={() => getData()}>Search</button>
        </div>
       
          {secondAPIweatherdata !== null ? (
            
          <div className="main-container">
            <StoreData2
                        city={secondAPIweatherdata.location.name}
                        country={secondAPIweatherdata.location.country}
                        temperature={secondAPIweatherdata.current.temp_c}
                        humidity = {secondAPIweatherdata.current.humidity}
                        />
        </div>
        ) : null}
              
      </div>
    </>
  );
}

export default App;