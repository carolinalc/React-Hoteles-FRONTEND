import React from 'react'
import {NavLink} from "react-router-dom";

import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <div className='footer'>

      <footer>
         <p>React Hotel by <span class="negrita">María Diez</span> & <span class="negrita">Carolina López.</span><span>Know more <NavLink to="/about">About Us</NavLink> </span> </p>
      </footer>
    </div>
  )
}

export default Footer