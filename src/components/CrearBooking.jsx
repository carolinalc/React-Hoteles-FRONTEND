import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { createAllBooking } from '../services/booking.services'
import { getCategoriesPension } from '../services/hotels.services'

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
  const handleComentariosChange = (e) => setComentarios(e.target.value)
  // const handleCheckinChange = (e) => setCheckin(e.target.value)

  useEffect(() => {
    mostrarCheckin()
  }, [])

  const mostrarCheckin = async () => {
      try {
        const response = await getCategoriesPension()
        setCheckin(response.data.checkin)
      
      } catch (error) {
        navigate("/error")
      }
  }

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
      navigate("/profile")
    } catch (error) {
      navigate("/error")
    }

  }

  if(checkin === null){
    return <h3>...Loading</h3>
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
                // onChange={handleCheckinChange}
                >  
                {checkin.map((each) =>  {
                  return(
                      <option value={each}> {each} </option>
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