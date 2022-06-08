import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { uploadService } from '../../services/hotels.services';
import { getProfileEdit } from '../../services/profile.services';



function EditPerfil() {
  const [ username, setUserName] = useState("");
  const [ imagen, setImagen ] = useState("");
  const [ email, setEmail ] = useState("")

  const { id } = useParams();

  const navigate = useNavigate()

  const handleUserNameChange = (e) => setUserName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)

  useEffect(() => {
    getProfileData()
  }, [])

  const getProfileData= async () =>{

    try {

      const response = await getProfileData()
      const { username, email, imagen } = response.data

      setUserName(username)
      setEmail(email)
      setImagen(imagen)
      
    } catch (error) {
      navigate("/error")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updateProfile = {
      username, 
      email, 
      imagen
    }

    try {

      await getProfileEdit(id, updateProfile)
      navigate("/profile")
      
    } catch (error) {
      navigate("/error")
    }
  }

  const handleIamgenChange = async (e) => {

    const uploadForm = new FormData()
    uploadForm.append("imagen", e.target.files[0])

    try {
      const response = await uploadService(uploadForm)
      setImagen(response.data)
      
    } catch (error) {
      navigate("/error")
    }
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>

          <label>Username:</label>
            <input 
              type="text" 
              Username="Username" 
              value={username} 
              onChange={handleUserNameChange} 
            />

          <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={handleEmailChange} 
            />

            <label htmlFor="imagen">Image:</label>
            <input type="file" name="imagen" onChange={handleIamgenChange} />

            <button type="submit">Update</button>

      </form>

            <img src={imagen} alt="profile-pic" width={100}/>              
       
    </div>
  )
}

export default EditPerfil