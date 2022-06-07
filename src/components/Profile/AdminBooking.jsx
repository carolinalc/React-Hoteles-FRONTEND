import React from 'react'
import { Link } from 'react-router-dom'
import IsAdm from '../../components/Autorization/isAdmin';

function AdminBooking() {
  return (
    <div>    
           <IsAdm> <button><Link to="/hotels/create"> Create a New Hotel </Link></button> </IsAdm>
           <IsAdm></IsAdm>
    </div>  
  )
}

export default AdminBooking