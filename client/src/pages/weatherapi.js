import axios from 'axios';

const apikey= 'd8a4ef97987d79e74442aab263fb4977';
const apikey1= '83d2d24cfba24574be6120618221611';

export const firstAPIdata = async (city) =>{
    try{
        const{data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        return data;
    }
    catch(error){
        throw error;
    }
}

export const secondAPIdata = async (city) =>{
    try{
        const{data}= await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apikey1}&q=${city}}`);
        return data;
    }
    catch(error){ 
        throw error;
    }
}