import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import {  getTematicoService } from '../../services/hotels.services'

function ListHotelTematico() {
  const [ detalleTematico, setDetalleTematico ] = useState(null)
   const navigate = useNavigate()
   
  useEffect(()=> {
    getAllTematico()
    }, [])

    const  getAllTematico = async () => {
      try {
        
        const response = await getTematicoService()
            setDetalleTematico(response.data)
            console.log(response.data)
        
      } catch (error) {
        navigate("/error")
      }
    }
  
  
    if (detalleTematico === null){
      return <DotLoader />
    }


    return (
      <div>
        {
          detalleTematico.map((eachTematico) => {
            return (
              <NavLink to={`/Hotels/${eachTematico._id}`}> <li>{eachTematico.nombre} </li></NavLink>
            )        
          })
        }
          
      </div> 
    )
  }


export default ListHotelTematico