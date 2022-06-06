import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { createAllBooking } from '../services/booking.services'

function CrearBooking() {

  const {id} = useParams()

  const [ fechaEntrada, setFechaEntrada ] = useState("")
  const [ fechaSalida, setFechaSalida ] = useState("")
  const [ huespedes, setHuespedes ] = useState(0)
  const [ checkin, setCheckin ] = useState([])
  const [ comentarios, setComentarios ] = useState("")
 
  const navigate = useNavigate()

  const handleFechaEntradaChange = (e) => setFechaEntrada(e.target.value)
  const handleFechaSalidaChange = (e) => setFechaSalida(e.target.value)
  const handleHuespedesChange = (e) => setHuespedes(e.target.value)
  const handleCheckinChange = (e) => setCheckin(e.target.value)
  const handleComentariosChange = (e) => setComentarios(e.target.value)

  const hadleCreateBooking = async (e) => {
    //e.preventDefault()

    try {

      const bookingCreate = {
        
        fechaEntrada,
        fechaSalida, 
        huespedes, 
        checkin,
        comentarios
      }
      
      await createAllBooking(id, bookingCreate)
      Navigate("/profile")
    } catch (error) {
      navigate("/error")
    }

  }



  return (
    <div>
        <form onSubmit={hadleCreateBooking}>
          <label htmlFor="fechaEntrada">Date In: </label>
                <input type="date"
                name='fechaEntrada'
                onChange={handleFechaEntradaChange}
                value={fechaEntrada} 
                />
           <br />
           <label htmlFor="fechaSalida">Date Out: </label>
                <input type="date"
                name='fechaSalida'
                onChange={handleFechaSalidaChange}
                value={fechaSalida} 
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
                {checkin.map((each)=>{
                  return(
                      <option> {each} </option>
                  ) }) }
                
                </select>
           <br /> 
           <label htmlFor="comment">Comment: </label>
                <textarea type="text"
                name='comment'
                onChange={handleComentariosChange}
                value={comentarios} 
                />
           <br />   
           <button type='submit'>Add booking</button>        
      </form>
    </div>
  )
}

export default CrearBooking