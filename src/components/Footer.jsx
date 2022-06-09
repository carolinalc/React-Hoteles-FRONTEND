import React from 'react'
import {NavLink} from "react-router-dom";

import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <div className='footer'>


        
        <Card fixed="bottom" >
        <Card.Footer >
           <p>React Hotel by María Díez & Carolina López. 
            Know more <NavLink to="/about">About Us</NavLink></p>
        </Card.Footer>
        </Card>

    </div>
  )
}

export default Footer