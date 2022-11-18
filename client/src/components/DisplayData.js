import React, { useEffect, useState } from 'react';
import RemoveDisplay from "./RemoveDisplay";
import earthpic from '../assets/earth.gif'
import './DisplayData.css';

const WeatherInfo = () => {
    const [WeatherInfo, setWeatherInfo] = useState([])
    
    async function getWeatherInfos(){
        // server -> index.js

        const req = await fetch('http://localhost:1337/api/data', {
            headers: {'x-email': localStorage.getItem('userEmail')}, 
        })
        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            setWeatherInfo(data.data)      
        } else{
            alert(data.error)  
        }
    }

    useEffect(() => {
        const email = localStorage.getItem('userEmail')
        if(!email){
            console.log('Invalid access')
        } else{
            getWeatherInfos() 
        }
    }, [])


    if(WeatherInfo.length !== 0){
        console.log('Not Empty'); 
        return(
            <div>
                {
                        WeatherInfo.map((data, index) => 
                            <RemoveDisplay
                            city={data.cityName}
                            country={data.countryName}
                            temperature={data.temperatureValue}
                            humidity={data.humidityValue}
                            />  
                        )}
                        <br/>
            </div>
          )
    } else{
        console.log('Empty'); 
        return(
            
            <div class="container">
                <img className="photo" src={earthpic} alt="loading..." />
            </div>
            
          )        
    }    
}

export default WeatherInfo