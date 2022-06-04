import React from 'react'
import { NavLink } from "react-router-dom";

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"


function Navbar() {

    const {  isLogging, authenticateUser } = useContext(AuthContext)

    const handleLogout = () => {
      localStorage.removeItem("authToken")
      authenticateUser()
    }


  return (
    <div>
      { isLogging === true ? (
        <nav>
          <NavLink to="/" >Home </NavLink>
          <NavLink to="/about" >About </NavLink>
          <NavLink to="/hotels" >Hoteles </NavLink>
          <NavLink to="/profile" >Perfil </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      ): (
        <nav>
          <NavLink to="/" >Home </NavLink>
          <NavLink to="/about" >About </NavLink>
          <NavLink to="/hotels" >Hoteles </NavLink>
          <NavLink to="/signup" > Signup </NavLink>
          <NavLink to="/login" >Login </NavLink>
        </nav>
      )
      }
    </div>
  )
}

export default Navbar