import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { addNewHotelService,  getCategoriesPension } from '../../services/hotels.services'


function CreateHotel() {

  const [ nombre, setNombre ] = useState("")
  const [ estrellas, setEstrellas ] = useState("")
  const [ categorias, setCategorias ] = useState([])
  const [ ubicacion, setUbicacion ] = useState("")
  const [ precios, setPrecios ] = useState(0)
  const [ pension, setPension] = useState([])
  const [ descripcion, setDescripcion] = useState("")

  const navigate = useNavigate()

  const handleNameChange = (e) => setNombre(e.target.value);
  const handleEstrellasChange = (e) => setEstrellas(e.target.value);
  const handleCategoriasChange = (e) => setCategorias(e.target.value);
  const handleUbicacionChange = (e) => setUbicacion(e.target.value);
  const handlePreciosChange = (e) => setPrecios(e.target.value);
  const handlePensionChange = (e) => setPension(e.target.value);
  const handleDescripcionChange = (e) => setDescripcion(e.target.value);

//Mostrar categorias de la sección select
  useEffect(() => {
    mostrarCategories()
  },[])

  const mostrarCategories = async () => {
      try {
        const response = await  getCategoriesPension()
        setCategorias(response.data.categorias)
        console.log(response.data.categorias)
        setPension(response.data.pension)
      } catch (error) {
        navigate("/error")
      }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const formulario = new FormData()
      formulario.append("nombre", nombre)
      formulario.append("estrellas", estrellas)
      formulario.append("imagen", e.target.files[0])
      formulario.append("categorias", categorias)
      formulario.append("ubicacion", ubicacion)
      formulario.append("precios", precios)
      formulario.append("pension", pension)
      formulario.append("descripcion", descripcion)
    
      await addNewHotelService(formulario)
      navigate("/hotels")

    } catch (error) {
      navigate("/error")
    }
  }


  return (
    <div>
      <h3>Create Hotel</h3>
      <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Name: </label>
          <input type="text"
           name='nombre'
           onChange={handleNameChange}
           value={nombre} 
           />
           <br />
           <label htmlFor="estrellas">Starts: </label>
          <input type="text"
           name='estrellas'
           onChange={handleEstrellasChange}
           value={estrellas} 
           />
           <br />
          <label htmlFor="categorias">Categories: </label>
          <select type="text"
           name='categorias'
           onChange={handleCategoriasChange}
           value={categorias}>   
              {categorias.map((eachCategoria) => {
                return (
                  <option> {eachCategoria.categorias} </option>   
                )  })}                       
          </select>
          <br />
          <label htmlFor="ubicacion">Ubication: </label>
          <input type="text"
           name='ubicacion'
           onChange={handleUbicacionChange}
           value={ubicacion} 
           />
           <br />
           <label htmlFor="precios">Prices: </label>
          <input type="number"
           name='precios'
           onChange={handlePreciosChange}
           value={precios} 
           />
           <br />
           <label htmlFor="pension">Pension: </label>
          <select type="text"
           name='pension'
           onChange={handlePensionChange}
           value={pension}>
              {pension.map((eachCategoria) => {
                return (
                  <option> {eachCategoria.pension} </option>   
                )  })}    
    
           </select>
           <br />
           <label htmlFor="descripcion">Description: </label>
          <input type="text"
           name='descripcion'
           onChange={handleDescripcionChange}
           value={descripcion} 
           />
           <br />
           <label htmlFor="imagen">Image: </label>
           <input type="file"
           name='imagen'
           />

           <button type='submit'> Create</button>
      </form> 
    </div>
  )
}

export default CreateHotel