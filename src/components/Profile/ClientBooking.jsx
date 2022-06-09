import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getBookingProfile } from '../../services/profile.services'

function ClientBooking() {

  const [ dataBooking, setDataBooking] = useState(null)
  
  const navigate = useNavigate()

  useEffect(() =>{
    getBookingDetails()
  }, [])

  const getBookingDetails = async () => {

    try {

      const response = await getBookingProfile()
      setDataBooking(response.data)
      console.log(response.data)
      
    } catch (error) {
      navigate("/error")
    }
  }

  if(dataBooking === null){
    return <DotLoader />
  }


  return (
    <div>
      {dataBooking.map((each) =>{
        return(

          <div>
            {each.hotelId.nombre}
            {each.fechaEntrada}
            {each.fechaSalida}
            {each.huespedes}
            {each.checkin}
            {each.comentarios}
          </div>

        )})}
    </div>
  )
}

export default ClientBooking
