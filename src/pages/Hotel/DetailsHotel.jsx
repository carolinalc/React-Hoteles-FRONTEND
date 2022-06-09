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
import Card from "react-bootstrap/Card"

function DetailsHotel() {

  const [ details, setDetails ] = useState(null)
  const [ showListEdit, setShowListEdit ] = useState(false)
  const [ showListDelete, setShowListDelete ] = useState(false)
  const [ showListComment, setShowListComment ] = useState(false)
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

 const handleShowEdit = ()=> {
   setShowListEdit(!showListEdit)
   
 }

 const handleShowDelete = ()=> {
   setShowListDelete(!showListDelete)
   
 }

 const handleShowComment= ()=> {
   setShowListComment(!showListComment)
   
 }
  
  if(details === null){
    return <DotLoader />
  }



  return (
    <div>
      <br />
      <Card>
      <Card.Img variant="top" src={details.imagen} alt="imagenHotel" width={50} />
        <Card.Body>
          <Card.Text>
              <h2>{details.nombre}</h2> 
              <br />
              <p>{details.estrellas}</p>
              <br />
              <strong></strong>
              <p> <strong>Categories: </strong> &nbsp; {details.categorias}</p>
              <br />
              <p><strong> Location: </strong> &nbsp;  {details.ubicacion}</p>
              <br />
              <p><strong> Prices: </strong> &nbsp; {details.precios} € &nbsp; &nbsp; &nbsp; <strong> Pension: </strong> &nbsp; {details.pension} </p>
              <br />
              <p><strong> Description: </strong> &nbsp; {details.descripcion}</p>
              <br />
          </Card.Text>
        </Card.Body>
      </Card>   
      
          <div><VerComments /></div> 

      { isAdm === true ? <button onClick={handleDelete}> Delete </button> :  <button onClick={handleShowDelete}>Booking</button> }
      { showListDelete === true &&  <CrearBooking /> } 
      <br />
      { isAdm === true ? <button onClick={handleShowEdit}> Edit </button>  : <button onClick={handleShowComment}> Comment </button> }
      { showListEdit === true && <EditHotel /> } 
      { showListComment === true && <Comment />} 

     </div>
  )
}

export default DetailsHotel