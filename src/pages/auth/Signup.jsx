import React, { useState } from 'react'
import { signupService } from "../../services/auth.services.jsx"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  //error message
  const [errorMessage, setErrorMessage] = useState(null)
  
  const navigate = useNavigate()

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePassword2Change = (e) => setPassword2(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const user = {
        username, 
        email, 
        password,
        password2
    }
    try{

        const response =  await signupService(user)
        localStorage.setItem("authToken", response.data.authToken) //guardamos el token en localStorage
        navigate("/login")

    }catch(error){
      
          console.log(error.response.data.errorMessage) // el mensaje que enviamos desde el BE
          console.log(error.response.status) // el estatus

          if(error.response.status === 400){
              setErrorMessage(error.response.data.errorMessage)
      } else {
          navigate("/error")
      }
  }
};
  return (
    <div>
      <h1>Signup</h1> 
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
    <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
    <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
    <br />
        <label>Confirm password:</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={handlePassword2Change}
        />
    <br />
        { errorMessage !== null && <p>{errorMessage} </p>}

        <button type="submit">Signup</button>
      </form>  

      </div>
  )
}

export default Signup