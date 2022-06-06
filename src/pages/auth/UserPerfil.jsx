import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import AdminBooking from '../../components/Profile/AdminBooking';
import ClientBooking from '../../components/Profile/ClientBooking';
import { getProfileData } from "../../services/profile.services"
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context.jsx"


function UserPerfil() {

  const [ user, setUser] = useState(null);
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

  if(user === null){
    return <DotLoader />
  }

  return (
    <div>
       <h3>Profile</h3>
              <img src={user.imagen} alt="imagenprofile" />
              <br />
              <p>Name: {user.username}</p>
              <br />
              <p>Email: {user.email}</p>
        <br />

        {  isAdm === true ?  <AdminBooking />  : <ClientBooking /> }
    </div>
  )
}


export default UserPerfil