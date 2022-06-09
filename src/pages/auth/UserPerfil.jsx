import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import AdminBooking from '../../components/Profile/AdminBooking';
import ClientBooking from '../../components/Profile/ClientBooking';
import { getProfileData } from "../../services/profile.services"
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context.jsx"
import EditPerfil from '../../components/Profile/EditPerfil';
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';


function UserPerfil() {

  const [ user, setUser] = useState(null);
  const [ showListEdit, setShowListEdit ] = useState(false)
  const { _id } = useParams();

  const { isAdm } = useContext(AuthContext)

  const navigate = useNavigate();

  useEffect(()=> {

    getUserDetails()

  }, [])

  const getUserDetails = async () => {
        try {
            const response = await getProfileData(_id)
            setUser(response.data)

        } catch (error) {
            navigate("/error")
    }
  }

  const handleShowEdit = ()=> {
    setShowListEdit(!showListEdit)
    
  }

  if(user === null){
    return <DotLoader />
  }

  return (
    <div>
      <Card style={{ width: '30rem' }}>
        <br />
            <h3 className="name-hotels">PROFILE</h3>
          <Card.Img variant="top" src={user.imagen} alt="imagenprofile"  />
             <Card.Body>
                  <br />
                  <Card.Title>Name: &nbsp; {user.username} </Card.Title>
                  <br />
                  <Card.Title>Email: &nbsp; {user.email}</Card.Title>
                  <br />
                  <Button onClick={handleShowEdit}>Edit profile</Button>
            <br />
        { showListEdit === true &&   <EditPerfil getUserDetails={getUserDetails}/> } 
        </Card.Body>
      </Card>   
        {  isAdm === true ?  <AdminBooking />  : <ClientBooking /> }  
    </div>
  )
}


export default UserPerfil