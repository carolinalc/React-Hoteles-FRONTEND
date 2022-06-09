import React, { useState, useContext } from 'react'
import { loginService } from "../../services/auth.services"

import { AuthContext } from "../../context/auth.context.jsx";
import { useNavigate } from "react-router-dom"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

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
      navigate("/hotels")


    } catch (error){
      if(error.response.status === 400 || error.response.status === 401 ){
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  }

  return (
    <div >
    
          <h1>Log In</h1>    
    <br />
    <br />
    <div style={{display: "flex", alignItems:"center", flexDirection: "column"}}>
    <Form onSubmit={handleLogin} style={{width: "50%"}}>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={email} 
          onChange={handleEmailChange} 
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
      </Form.Group>
      <br />
      <br />
      <Button type="submit">Log In</Button>

    </Form>

    { errorMessage && <Alert className="error-message" variant="danger">{errorMessage}</Alert> }

    </div>
  


  
  </div>
)
}

export default Login