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
          <NavLink to="/About" >About </NavLink>
          <NavLink to="/Hotels" >Hoteles </NavLink>
          <NavLink to="/Profile" >Perfil </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      ): (
        <nav>
          <NavLink to="/" >Home </NavLink>
          <NavLink to="/About" >About </NavLink>
          <NavLink to="/Hotels" >Hoteles </NavLink>
        </nav>
      )
      }
    </div>
  )
}

export default Navbar