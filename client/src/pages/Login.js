import './LoginRegister.css';
import { useState } from "react";
import earthpic from '../assets/earth.gif'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault()
    
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        email,
        password,
      }), 
    })
    const data = await response.json()
    if(data.user){
      localStorage.setItem('token', data.user)
      localStorage.setItem('userEmail', email)

      alert('LOGIN WAS SUCCESSFUL')
      window.location.href = '/firstSource'
    } else{
      alert('The username or password was incorrect')
    }
  }

  async function registerPage(event){
    event.preventDefault()
    window.location.href = '/register'
  }

  return ( 
    <div class="customContainer">
      <div class="customForm">
        <h1>Weather app</h1>
        <h3>Get weather from anywhere in the world!</h3>
        <img className="photo" src={earthpic} alt="loading..." />
        <h3>Login</h3>
        <form onSubmit={loginUser}>
          <input class="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email" 
          />
          <br />
          <br />
          <input class="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password" 
          />
          <br />
          <br />
          <input class="submitButton" type="submit" value="Login" />
          <br />
        </form>        
      </div>
      <br />
      <br />
      <br />
      <form onSubmit={registerPage}>
          <button class="custom-btn btn-12"><span>Register now</span><span>Don't have account?</span></button>
      </form>
    </div>
  )  
}

export default App;