import { upload } from '@testing-library/user-event/dist/upload'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from 'react-spinners'
import { editHotelService, getCategoriesPension, getHotelDetailsService, uploadService } from '../services/hotels.services'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditHotel() {


  const [categoriasUtils, setCategoriasUtils] = useState([])
  const [pensionUtils, setPensionUtils] = useState([])

  const [nombre, setNombre] = useState("")
  const [estrellas, setEstrellas] = useState("")
  const [categorias, setCategorias] = useState(null)
  const [ubicacion, setUbicacion] = useState("")
  const [precios, setPrecios] = useState(0)
  const [pension, setPension] = useState(null)
  const [descripcion, setDescripcion] = useState("")
  const [imagen, setImagen] = useState("")

  const navigate = useNavigate()

  const { id } = useParams()

  const handleNameChange = (e) => setNombre(e.target.value);
  const handleEstrellasChange = (e) => setEstrellas(e.target.value);
  const handleUbicacionChange = (e) => setUbicacion(e.target.value);
  const handlePreciosChange = (e) => setPrecios(e.target.value);
  const handleDescripcionChange = (e) => setDescripcion(e.target.value);
  const handleCategoriasChange = (e) => setCategorias(e.target.value)
  const handlePensionChange = (e) => setPension(e.target.value)

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

  //Mostrar categorias de la sección select

  useEffect(() => {
    getAllDetails()
    mostrarCategories()

  }, [])


  const mostrarCategories = async () => {
    try {
      const response = await getCategoriesPension()
      setCategoriasUtils(response.data.categorias)
      setPensionUtils(response.data.pension)
    } catch (error) {
      navigate("/error")
    }
  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formularioEdit = {
        nombre,
        estrellas,
        imagen,
        categorias,
        ubicacion,
        precios,
        pension,
        descripcion
      }



      const response = await editHotelService(id, formularioEdit)
      console.log("data edit formulario:", response.data)
      navigate("/hotels")


    } catch (error) {
      navigate("/error")
    }
  };


  const getAllDetails = async () => {
    try {

      const response = await getHotelDetailsService(id)
      const { nombre, estrellas, categoriasUtils, ubicacion, precios, pensionUtils, descripcion, imagen } = response.data

      setNombre(nombre)
      setEstrellas(estrellas)
      setCategorias(categoriasUtils)
      setUbicacion(ubicacion)
      setPrecios(precios)
      setPension(pensionUtils)
      setDescripcion(descripcion)
      setImagen(imagen)


    } catch (error) {
      navigate("/error")
    }
  }


  if (!categoriasUtils || !pensionUtils) {
    return <DotLoader />
  }

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Form onSubmit={handleSubmit} style={{ width: "50%" }}>
        <Form.Group>
          <Form.Label htmlFor="nombre"><strong> Name: </strong> &nbsp; </Form.Label>
          <Form.Control type="text"
            name='nombre'
            onChange={handleNameChange}
            value={nombre}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="estrellas"><strong>Starts: </strong> &nbsp; </Form.Label>
          <Form.Control type="text"
            name='estrellas'
            onChange={handleEstrellasChange}
            value={estrellas}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="categorias"><strong> Categories: </strong> &nbsp; </Form.Label>
          <Form.Select type="text"
            name='categorias'
            onChange={handleCategoriasChange}>
            {categoriasUtils.map((eachCategoria) => {
              return (
                <option value={eachCategoria}> {eachCategoria} </option>
              )
            })}
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="ubicacion"><strong> Ubication:</strong> &nbsp; </Form.Label>
          <Form.Control type="text"
            name='ubicacion'
            onChange={handleUbicacionChange}
            value={ubicacion}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="precios"><strong>Prices: </strong>&nbsp; </Form.Label>
          <Form.Control type="number"
            name='precios'
            onChange={handlePreciosChange}
            value={precios}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="pension"><strong> Pension:</strong> &nbsp; </Form.Label>
          <Form.Select type="text"
            name='pension'
            onChange={handlePensionChange}>
            {pensionUtils.map((each) => {
              return (
                <option value={each}> {each} </option>
              )
            })}
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="descripcion"><strong>Description:</strong> &nbsp; </Form.Label>
          <Form.Control type="text"
            name='descripcion'
            onChange={handleDescripcionChange}
            value={descripcion}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="imagen"><strong>Image:</strong> &nbsp; </Form.Label>
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

export default EditHotel