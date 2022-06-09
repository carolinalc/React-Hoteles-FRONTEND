
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getRuralService } from '../../services/hotels.services'

function ListHotelRural() {

  const [detalleRural, setDetalleRural] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getAllRural()
  }, [])

  const getAllRural = async () => {
    try {

      const response = await getRuralService()
      setDetalleRural(response.data)

    } catch (error) {
      navigate("/error")
    }
  }


  if (detalleRural === null) {
    return <DotLoader />
  }


  return (
    <div>
      {
        detalleRural.map((eachRural) => {
          return (
            <NavLink className="navlink" to={`/hotels/${eachRural._id}`}> <li>{eachRural.nombre} </li></NavLink>
          )
        })
      }

    </div>
  )
}



export default ListHotelRural