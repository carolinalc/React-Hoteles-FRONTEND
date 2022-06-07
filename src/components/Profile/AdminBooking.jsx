import React from 'react'
import { Link } from 'react-router-dom'
import IsAdm from '../Autorization/IsAdmin';
import Booking from '../Visualizar/Booking';

function AdminBooking() {
  return (
    <div>    
           <IsAdm> <button><Link to="/hotels/create"> Create a New Hotel </Link></button> </IsAdm>
           <IsAdm><Booking/></IsAdm>
    </div>  
  )
}

export default AdminBooking