import React from 'react'
import { NavLink } from "react-router-dom";

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"


function Navbar() {

<<<<<<< HEAD

  
=======
    const {  isLogging, authenticateUser } = useContext(AuthContext)

    const handleLogout = () => {
      localStorage.removeItem("authToken")
      authenticateUser()
    }


>>>>>>> 9a4ffe9e20a9dba8020b62e2df0ca48141ad8ee9
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