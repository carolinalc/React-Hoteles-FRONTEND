import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { uploadService } from '../../services/hotels.services';
import { getProfileData, getProfileEdit } from '../../services/profile.services';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function EditPerfil(props) {

  const [username, setUserName] = useState("");
  const [imagen, setImagen] = useState("");
  const [email, setEmail] = useState("")

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

  const getProfileDetails = async () => {

    try {

      const response = await getProfileData()
      console.log(response.data)

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
      props.getUserDetails()

    } catch (error) {
      navigate("/error")
    }
  }


  if (!email || !username) {
    return <DotLoader />
  }

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Form onSubmit={handleSubmit} style={{ width: "50%" }}>
        <Form.Group>
          <Form.Label> Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleUserNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="imagen">Image: </Form.Label>
          <Form.Control type="file"
            name='imagen'
            onChange={handleImagenChange}
          />
        </Form.Group>
        <Button type='submit'> Update </Button>
      </Form>
      <img src={imagen} alt="imagenedit" />
    </div>
  )
}

export default EditPerfil