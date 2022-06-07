import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import {  getCiudadService } from '../../services/hotels.services'

function ListHotelCiudad() {

  const [ detalleCiudad, setDetalleCiudad ] = useState(null)
   const navigate = useNavigate()

  useEffect(()=> {
     getAllCiudad()
     }, [])

  const  getAllCiudad = async () => {
    try {
      
      const response = await getCiudadService()
          setDetalleCiudad(response.data)
         
    } catch (error) {
      navigate("/error")
    }
  }


  if (detalleCiudad === null){
    return <DotLoader />
  }

  return (
    <div>
      {
        detalleCiudad.map((eachCiudad) => {
          return (
            <NavLink to={`/hotels/${eachCiudad._id}`}> <li>{eachCiudad.nombre} </li></NavLink>
          )        
        })
      }
        
    </div> 
  )
}

export default ListHotelCiudad