import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getHotelDetailsService, deleteHotelService } from '../../services/hotels.services'

function DetailsHotel() {

  const [deatils, setDetails ] = useState(null)
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(()=> {
    getHotelDetails()
  }, [])

  const getHotelDetails = async () => {
    try {

      const response = await getHotelDetailsService(id)
      setDetails(response.data)
       
    } catch (error) {
      navigate("/error")
    }
  }

  const handleDelete = async () => {
    try {
      await deleteHotelService(id)
      navigate("/Hotels")

    } catch (error) {
      navigate("/error")
    }
  }
  
  if(deatils === null){
    return <DotLoader />
  }

  return (
    <div>
      <h2>{deatils.nombre}</h2>
      <br />
      <img src={deatils.image} alt="imagenHotel" />
      <br />
      <p>{deatils.estrellas}</p>
      <br />
      <p>{deatils.categorias}</p>
      <br />
      <p>{deatils.ubicacion}</p>
      <br />
      <p>{deatils.precios}</p>
      <br />
      <p>{deatils.pension}</p>
      <br />
      <p>{deatils.decripcion}</p>
      <br />
      <button onClick={handleDelete}> Delete </button>
    </div>
  )
}

export default DetailsHotel