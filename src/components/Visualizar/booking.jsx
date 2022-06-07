import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllBooking } from '../../services/booking.services'


function booking() {

  const [ deatils, setDetails ] = useState(null)
  
  const { id } = useParams()

  const navigate = useNavigate()

      useEffect(() =>{
        getDetailsBoooking()
      }, [])

const getDetailsBoooking = async () => {

  try {

    const response = await getAllBooking(id)
    setDetails(response.data)
    
  } catch (error) {
    navigate("/error")
  }
}


  return (
    <div>
      
    </div>
  )
}

export default booking