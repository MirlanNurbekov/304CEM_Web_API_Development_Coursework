import { React } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import FirstSource from './pages/FirstSource'; 
import SecondSource from './pages/SecondSource'; 
import SavedInformation from './pages/SavedInformation'; 


function App() {

    let x = localStorage.getItem('token') 
    if(x){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login/>} />
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/register" element={<Register/>} />
                        <Route exact path="/firstSource" element={<FirstSource/>} />
                        <Route exact path="/secondSource" element={<SecondSource/>} />
                        <Route exact path="/savedInformation" element={<SavedInformation/>} />    
                    </Routes>
                </BrowserRouter>    
            </div>
        )
    } else{
        console.log('No token')
        return(
            <div>
                
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login/>} />
                        <Route exact path="/register" element={<Register/>} />  
                    </Routes>
                </BrowserRouter>    
            </div>
        )
    }    
}

export default App