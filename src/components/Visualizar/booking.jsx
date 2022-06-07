import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getAllBooking } from '../../services/booking.services'
import { getAllHotelService } from '../../services/hotels.services'


function Booking() {

  const [ details, setDetails ] = useState(null)
  const [ detailsHotel, setDetailsHotel ] = useState(null)
  
  const { id } = useParams()

  const navigate = useNavigate()

      useEffect(() =>{
        getDetailsBoooking()
        getDetailsHotel()
      }, [])

  const getDetailsBoooking = async () => {

    try {

      const response = await getAllBooking(id)
      setDetails(response.data)
      
    } catch (error) {
      navigate("/error")
    }
  }

  const getDetailsHotel = async () => {

    try {

      const response = await getAllHotelService().populate("pension precios")
      setDetails(response.data)
      
    } catch (error) {
      navigate("/error")
    }
  }

 if(details === undefined){
   return <DotLoader/>
 }


  return (
    <div>
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
      
    </div>
  )
}

export default Booking