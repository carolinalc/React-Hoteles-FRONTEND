import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getAllBooking } from '../../services/booking.services'



function Booking() {

  const [ details, setDetails ] = useState(null)

  const navigate = useNavigate()

      useEffect(() =>{
        getDetailsBoooking()
      }, [])

  const getDetailsBoooking = async () => {

    try {

      const response = await getAllBooking()
      setDetails(response.data)
      console.log(response.data)
      
    } catch (error) {
      navigate("/error")
    }
  }

  

 if(details === null){
   return <DotLoader/>
 }


  return (
    <div>
      {details.map((each) =>{
        return(
        <div>
<<<<<<< HEAD
          <Link to={`/booking/${each._id}/details`}><ul> <h2>{each.hotelId.nombre}</h2> </ul></Link>
=======
<<<<<<< HEAD
          <NavLink to={`/booking/${each.id}/details`}> {each.hotelId} </NavLink>
=======
          <NavLink to={`/booking/${each.id}/details`}><ul> <h2>{each.hotelId.nombre}</h2> </ul></NavLink>
>>>>>>> 469a3e18437e9a82e3b61c95f51df9a94625cebc
>>>>>>> 4025c58960dd0fc820d082ceb7010b4bc6675403
      </div>
        )

      })}
      
    </div>
  )
}

export default Booking