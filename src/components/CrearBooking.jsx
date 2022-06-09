import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createAllBooking } from '../services/booking.services'
import { getCategoriesPension } from '../services/hotels.services'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CrearBooking() {

  const { id } = useParams()

  // campos que escribe el usuario
  const [fechaEntrada, setFechaEntrada] = useState("")
  const [fechaSalida, setFechaSalida] = useState("")
  const [huespedes, setHuespedes] = useState(0)
  const [comentarios, setComentarios] = useState("")
  const [checkin, setCheckin] = useState("10:00-13:00")

  // array de utils para el select/options. ES NULO PORQUE NO LO HEMOS RECIBIDO DEL SERVER
  const [checkinUtil, setCheckinUtil] = useState(null)

  const navigate = useNavigate()

  const handleFechaEntradaChange = (e) => setFechaEntrada(e.target.value)
  const handleFechaSalidaChange = (e) => setFechaSalida(e.target.value)
  const handleHuespedesChange = (e) => setHuespedes(e.target.value)
  const handleComentariosChange = (e) => setComentarios(e.target.value)
  const handleCheckinChange = (e) => setCheckin(e.target.value)



  useEffect(() => {
    mostrarCheckin()
  }, [])

  const mostrarCheckin = async () => {
    try {
      const response = await getCategoriesPension()
      console.log(response.data.checkin)
      setCheckinUtil(response.data.checkin)

    } catch (error) {
      navigate("/error")
    }
  }

  const hadleCreateBooking = async (e) => {
    e.preventDefault()

    try {

      const bookingCreate = {

        fechaEntrada,
        fechaSalida,
        huespedes,
        checkin,
        comentarios
      }

      const response = await createAllBooking(id, bookingCreate)
      console.log(response)
      navigate("/profile")
    } catch (error) {
      navigate("/error")
    }

  }

  // PREVIENE QUE SE RENDERICE ANTES DE RECIBIR LA INFO DEL SERVER
  if (checkinUtil === null) {
    return <h3>...Loading</h3>
  }


  return (

    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Form onSubmit={hadleCreateBooking} style={{ width: "50%" }}>
        <Form.Group>
          <Form.Label htmlFor="fechaEntrada">Date In: </Form.Label>
          <Form.Control type="date"
            name='fechaEntrada'
            onChange={handleFechaEntradaChange}
            value={fechaEntrada}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="fechaSalida">Date Out: </Form.Label>
          <Form.Control type="date"
            name='fechaSalida'
            onChange={handleFechaSalidaChange}
            value={fechaSalida}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="huespedes">Guests: </Form.Label>
          <Form.Control type="number"
            name='huespedes'
            onChange={handleHuespedesChange}
            value={huespedes}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="checkin">Check In: </Form.Label>
          <Form.Select type="text"
            name='checkin'
            onChange={handleCheckinChange}
          >
            {checkinUtil.map((each) => {
              return (
                <option value={each}> {each} </option>
              )
            })}
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="comment">Comment: </Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name='comment'
            onChange={handleComentariosChange}
            value={comentarios}
          />
          <br />
        </Form.Group>
        <Button type='submit'>Add booking</Button>
      </Form>

    </div>


  )
}

export default CrearBooking