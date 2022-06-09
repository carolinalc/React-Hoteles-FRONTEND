import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import {getBookingDetails, deleteBooking} from '../../services/booking.services'
import Button from 'react-bootstrap/Button';


function BookingDetails() {

    const [ details, setDetails ] = useState(null)

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
          navigate("/profile")

        } catch (error) {
          navigate("/error")
        }
      }

      if(details === null){
        return <DotLoader/>
      }

  return (
    <div>

          <h2>{details.clienteId.username}</h2> 
          <br />
         <h2>{details.hotelId.nombre}</h2> 
          <br />
          <h2>{details.fechaEntrada}</h2>
          <br />
          <h2>{details.fechaSalida}</h2>
          <br />
          <h2>{details.huespedes}</h2>
          <br />
          <h2>{details.checkin}</h2>
          <br />
          <h2>{details.comentarios}</h2>

         <Button onClick={handleDelete}> Delete </Button> 

    </div>
  )
}

export default BookingDetails