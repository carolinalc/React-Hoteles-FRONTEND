import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getBookingDetails, deleteBooking} from '../../services/booking.services'

function BookingDetails() {

    const [ deatils, setDetails ] = useState(null)

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(()=> {
        getAllDetails()
      }, [])

      const getAllDetails = async () => {
        try {
    
            const response = await getBookingDetails(id)
            setDetails(response.data)
            console.log(response.data)
           
        } catch (error) {
          navigate("/error")
        }
      }

    const handleDelete = async () => {
        try {
          await deleteBooking(id)
          navigate("/hotels")
    
        } catch (error) {
          navigate("/error")
        }
      }
  return (
    <div> 

          <h2>{deatils.clienteId.username}</h2>
          <br />
          <h2>{deatils.hotelId.nombre}</h2>
          <br />
          <h2>{deatils.fechaEntrada}</h2>
          <br />
          <h2>{deatils.fechaSalida}</h2>
          <br />
          <h2>{deatils.huespedes}</h2>
          <br />
          <h2>{deatils.checkin}</h2>
          <br />
          <h2>{deatils.comentarios}</h2>
        
        <button onClick={handleDelete}> Delete </button>
    
    </div>
  )
}

export default BookingDetails