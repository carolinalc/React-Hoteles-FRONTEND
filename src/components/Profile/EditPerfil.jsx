import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { AuthContext } from '../../context/auth.context';
import { uploadService } from '../../services/hotels.services';
import { getProfileData, getProfileEdit } from '../../services/profile.services';



function EditPerfil() {

  const [ username, setUserName] = useState("");
  const [ imagen, setImagen ] = useState("");
  const [ email, setEmail ] = useState("")
  
  const navigate = useNavigate()

  const { _id } = useParams()

  const handleUserNameChange = (e) => setUserName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)

  const handleImagenChange = async (e) => {
    
    const uploadForm = new FormData()
      uploadForm.append("imagen", e.target.files[0])
      
      try {
            const response = await uploadService(uploadForm)
            setImagen(response.data)
            
      } catch (error) {
        navigate("/error")
      }

  }

  useEffect(() => {
    getProfileDetails()
  }, [])

  const getProfileDetails= async () =>{

    try {

      const response = await getProfileData()
     
      setUserName(response.data.username)
      setEmail(response.data.email)
      setImagen(response.data.imagen)
      
      
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

      const response = await getProfileEdit(_id, updateProfile)
      console.log(response.data)
      navigate("/profile")
      
    } catch (error) {
      navigate("/error")
    }
  }


  if(!email || !username){
    return <DotLoader />
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
          <label> Username:</label>
            <input 
              type="text" 
              name="username" 
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
      <br />
           <label htmlFor="imagen">Image: </label>
           <input type="file"
              name='imagen'
              onChange={handleImagenChange}
           />
           <button type='submit'> Update </button>
      </form> 
      <img src={imagen} alt="imagenedit" />
    </div>
  )
}

export default EditPerfil