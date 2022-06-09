import React from 'react'
import { Link } from 'react-router-dom'
import Booking from '../Visualizar/Booking.jsx';

function AdminBooking() {

  return (
    <div>    
          <button><Link className="navlink" to="/hotels/create"> Create a New Hotel </Link></button>
             <Booking/>  
    </div>  
  )
}

export default AdminBooking