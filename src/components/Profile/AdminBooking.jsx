import React from 'react'
import { Link } from 'react-router-dom'
import Booking from '../Visualizar/Booking.jsx';
import Button from 'react-bootstrap/Button';

function AdminBooking() {

  return (
    <div>    
          <Button><Link className="createLink" to="/hotels/create"> Create a New Hotel </Link></Button>
             <Booking/>  
    </div>  
  )
}

export default AdminBooking