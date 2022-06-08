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
          <NavLink to={`/booking/${each.id}/details`}><ul> <h2>{each.hotelId.nombre}</h2> </ul></NavLink>
=======

          <Link to={`/booking/${each._id}/details`}><ul> <h2>{each.hotelId.nombre}</h2> </ul></Link>

>>>>>>> 4f619b76ec409d7906182ccd24a424e0d89e0432
      </div>
        )

      })}
      
    </div>
  )
}

export default Booking