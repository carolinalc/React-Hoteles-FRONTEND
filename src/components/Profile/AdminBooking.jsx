import React from 'react'
import { Link } from 'react-router-dom'
import Booking from '../Visualizar/Bookingpatata.jsx';

function AdminBooking() {

  return (
    <div>    
          <button><Link to="/hotels/create"> Create a New Hotel </Link></button>
             <Booking/>  
    </div>  
  )
}

export default AdminBooking