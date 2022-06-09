import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getBookingProfile, deleteBookingUser } from '../../services/profile.services'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';


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

  
  const handleDelete = async () => {
    try {
      await deleteBookingUser()
      navigate("/hotels")

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
             <Card style={{ width: '30rem' }}>
                <Card.Body>
                <Card.Title><h3 className="name-bookings">BOOKING</h3></Card.Title>
                <hr /> 
                <p><strong>Name Hotel: </strong> &nbsp;  {each.hotelId.nombre} </p>
                <p><strong>Date In: </strong> &nbsp;  {each.fechaEntrada} </p>
                <p><strong>Date Out: </strong> &nbsp;   {each.fechaSalida}</p>  
                <p><strong>Guests: </strong> &nbsp; {each.huespedes} </p>  
                <p><strong>Check-In Time: </strong> &nbsp; {each.checkin} </p>
                <p><strong>Comments: </strong> &nbsp; {each.comentarios} </p>    
                </Card.Body>
             </Card>
             <Button onClick={handleDelete}> Delete </Button> 
          </div>

        )})}
    </div>
  )
}

export default ClientBooking
