import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import {  getResortService } from '../../services/hotels.services'

function ListHotelResort() {
  const [ detalleResort, setDetalleResort ] = useState(null)
   const navigate = useNavigate()
   
  useEffect(()=> {
    getAllResort()
    }, [])

    const  getAllResort = async () => {
      try {
        
        const response = await getResortService()
            setDetalleResort(response.data)
            console.log(response.data)
        
      } catch (error) {
        navigate("/error")
      }
    }
  
  
    if (detalleResort === null){
      return <DotLoader />
    }


    return (
      <div>
        {
          detalleResort.map((eachResort) => {
            return (
              <NavLink to={`/hotels/${eachResort._id}`}> <li>{eachResort.nombre} </li></NavLink>
            )        
          })
        }
          
      </div> 
    )
  }

export default ListHotelResort





  
