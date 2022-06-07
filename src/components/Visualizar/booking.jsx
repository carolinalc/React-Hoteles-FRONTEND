import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
          {/* <h2>{each.clienteId.username}</h2> */}
          <br />
          {/* <h2>{each.hotelId.nombre}</h2> */}
          <br />
          <h2>{each.fechaEntrada}</h2>
          <br />
          <h2>{each.fechaSalida}</h2>
          <br />
          <h2>{each.huespedes}</h2>
          <br />
          <h2>{each.checkin}</h2>
          <br />
          <h2>{each.comentarios}</h2>
      </div>
        )

      })}
      
    </div>
  )
}

export default Booking