import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getAllBooking } from '../../services/booking.services'
import Card from "react-bootstrap/Card"



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
          <Card style={{ width: '30rem' }}>
          <Card.Body>
                <h3 className="name-hotels">USERS BOOKINGS</h3>
                <br />
                <Link className="navlink" to={`/booking/${each._id}/details`}><h5>{each.hotelId.nombre} </h5></Link>
          </Card.Body>
          </Card>
      </div>
        )

      })}
      
    </div>
  )
}

export default Booking