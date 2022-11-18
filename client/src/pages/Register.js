import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        name,
        email,
        password,
      }), 
    })
    const data = await response.json()
   
    if(data.status === 'ok'){
      navigate('/login') 
    }
  }

  return (
    <div>
      <div class="customForm">
        <h1>Weather app</h1>
        <h3>Register</h3>
        <form onSubmit={registerUser}>
          <input class="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name" 
          />
          <br />
          <br />
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
          <input class="submitButton" type="submit" value="Create Account" />
          <br/>
          <h4>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Cancel</Link>
          </h4> 
        </form>
      </div>    
  </div>
  )  
}

export default App;