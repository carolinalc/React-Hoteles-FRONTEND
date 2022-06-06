import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { createAllBooking } from '../services/booking.services'

function CrearBooking() {

  const [ fecha, setFecha ] = useState("")
  const [ huespedes, setHuespedes ] = useState(0)
  const [ checkin, setCheckin ] = useState([])
  const [ comentarios, setComentarios ] = useState("")
  const [ userName, setUserName] = useState("")
  const [ dataHotel, setDataHotel] = useState("")

  const navigate = useNavigate()

  const handleFechaChange = (e) => setFecha(e.target.value)
  const handleHuespedesChange = (e) => setHuespedes(e.target.value)
  const handleCheckinChange = (e) => setCheckin(e.target.value)
  const handleComentariosChange = (e) => setComentarios(e.target.value)
 
  useEffect(()=>{
    hadleCreateBooking()
  })

  const hadleCreateBooking = async (e) => {
    e.preventDefault()

    try {

      const bookingCreate = {
        fecha, 
        huespedes, 
        checkin,
        comentarios,
        userName,
        dataHotel
      }
      
      await createAllBooking(bookingCreate)
      setUserName(userName)
      setDataHotel(dataHotel)
      Navigate("/profile")
    } catch (error) {
      navigate("/error")
    }

  }



  return (
    <div>
        <form onSubmit={hadleCreateBooking}>

        <label htmlFor="user">User: {userName.username} </label>
           <br />  
          <label htmlFor="fecha">Date: </label>
                <input type="date"
                name='fecha'
                onChange={handleFechaChange}
                value={fecha} 
                />
           <br />
           <label htmlFor="huespedes">Guests: </label>
                <input type="number"
                name='huespedes'
                onChange={handleHuespedesChange}
                value={huespedes} 
                />
           <br />
           <label htmlFor="checkin">Check In: </label>
                <select type="text"
                name='checkin'
                onChange={handleCheckinChange}
                value={checkin} 
                >
                  {checkin.map((each) => {
                return (
                  <option> {each.checkin} </option>   
                )  })}  
                </select>
           <br />
           <label htmlFor="comment">Comment: </label>
                <textarea type="text"
                name='comment'
                onChange={handleComentariosChange}
                value={comentarios} 
                />
           <br />           
      </form>
    </div>
  )
}

export default CrearBooking