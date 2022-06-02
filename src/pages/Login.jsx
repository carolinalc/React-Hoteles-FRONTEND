import React, { useState, useContext } from 'react'
import { loginService } from "../services/auth.services"

import { AuthContext } from "../context/auth.context.jsx";
import { useNavigate } from "react-router-dom"


function Login() {

  const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email, 
      password
    }

    try {
      const response = await loginService(user)

      localStorage.setItem("authToken", response.data.authToken)
      authenticateUser()
      navigate("/Hotels")


    } catch (error){
      if(error.response.status === 400 || error.response.status === 401 ){
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  }

  return (
    <div>
      
      <form onSubmit={handleLogin}>
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

        { errorMessage !== null && <p>{errorMessage}</p> }

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login