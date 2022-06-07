import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import EditHotel from '../../components/EditHotel'
import { getHotelDetailsService, deleteHotelService } from "../../services/hotels.services"
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context.jsx"
import Comment from '../../components/Comment'
import CrearBooking from '../../components/CrearBooking'
import VerComments from '../../components/Visualizar/VerComments'

function DetailsHotel() {

  const [ deatils, setDetails ] = useState(null)
  // const [ showListEdit, setShowListEdit ] = useState(false)
  // const [ showListDelete, setShowListDelete ] = useState(false)
  // const [ showListComment, setShowListComment ] = useState(false)
  const { id } = useParams()

  const { isAdm } = useContext(AuthContext)

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
      navigate("/hotels")

    } catch (error) {
      navigate("/error")
    }
  }

  // const handleShowEdit = ()=> {
  //   setShowListEdit(!showListEdit)
   
  // }

  // const handleShowDelete = ()=> {
  //   setShowListDelete(!showListDelete)
   
  // }

  // const handleShowComment= ()=> {
  //   setShowListComment(!showListComment)
   
  // }
  
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
      <p>{deatils.descripcion}</p>
      <br />
      {/* <VerComments/> */}
{/* 
      { isAdm === true ? <button onClick={handleDelete}> Delete </button> :  <button onClick={handleShowDelete}>Booking</button> }
      { showListDelete === true &&  <CrearBooking /> } 
      <br />
      { isAdm === true ? <button onClick={handleShowEdit}> Edit </button>  : <button onClick={handleShowComment}> Comment </button> }
      { showListEdit === true && <EditHotel /> } 
      { showListComment === true && <Comment />} */}

      { isAdm === true ? <button onClick={handleDelete}> Delete </button> :  <CrearBooking /> }

      <br />
      { isAdm === true ? <EditHotel />  : <Comment /> }
      
     </div>
  )
}

export default DetailsHotel