import React from 'react'
import {NavLink} from "react-router-dom";

import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <div className='footer'>

        <Card >
        <Card.Body >
           <p>React Hotel by María Díez & Carolina López. 
            Know more <NavLink to="/about">About Us</NavLink></p>
        </Card.Body>
        </Card>

    </div>
  )
}

export default Footer