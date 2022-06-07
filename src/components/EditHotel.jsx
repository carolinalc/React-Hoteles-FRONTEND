import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { editHotelService, getCategoriesPension, getHotelDetailsService } from '../services/hotels.services'

function EditHotel() {


  const [ categoriasUtils, setCategoriasUtils ] = useState([])
  const [ pensionUtils, setPensionUtils] = useState([])

  const [ nombre, setNombre ] = useState("")
  const [ estrellas, setEstrellas ] = useState("")
  const [ categorias, setCategorias ] = useState(null)
  const [ ubicacion, setUbicacion ] = useState("")
  const [ precios, setPrecios ] = useState(0)
  const [ pension, setPension] = useState(null)
  const [ descripcion, setDescripcion] = useState("")

  const navigate = useNavigate()

  const { id } = useParams()

  const handleNameChange = (e) => setNombre(e.target.value);
  const handleEstrellasChange = (e) => setEstrellas(e.target.value);
  const handleUbicacionChange = (e) => setUbicacion(e.target.value);
  const handlePreciosChange = (e) => setPrecios(e.target.value);
  const handleDescripcionChange = (e) => setDescripcion(e.target.value);
  const handleCategoriasChange = (e) => setCategorias(e.target.value)
  const handlePensionChange = (e) => setPension(e.target.value)

  //Mostrar categorias de la sección select

  useEffect(()=> {
    getAllDetails()
    mostrarCategories()

  }, [])


  const mostrarCategories = async () => {
      try {
        const response = await  getCategoriesPension()
        setCategoriasUtils(response.data.categorias)
        setPensionUtils(response.data.pension)
      } catch (error) {
        navigate("/error")
      }
  }
 
  
  const handleSubmit = async (e) => {

  e.preventDefault();

    try {

    const formularioEdit = new FormData()

     formularioEdit.append("nombre", nombre)
     formularioEdit.append("estrellas", estrellas)
     const inputImg = e.target.querySelector("#img")
     formularioEdit.append("imagen", inputImg.files[0])
     formularioEdit.append("categorias", categorias)
     formularioEdit.append("ubicacion", ubicacion)
     formularioEdit.append("precios", precios)
     formularioEdit.append("pension", pension)
     formularioEdit.append("descripcion", descripcion)

    
     const response = await editHotelService(id, formularioEdit)
     console.log("data edit formulario:", response.data)
      navigate("/hotels")
      

    }catch (error) {
      navigate("/error")
    }
  };



  const getAllDetails = async () => {
    try {

      const response = await getHotelDetailsService(id)
      const { nombre, estrellas, categoriasUtils, ubicacion, precios, pensionUtils, descripcion } = response.data

      setNombre(nombre)
      setEstrellas(estrellas)
      setCategorias(categoriasUtils)
      setUbicacion(ubicacion)
      setPrecios(precios)
      setPension(pensionUtils)
      setDescripcion(descripcion)

      
    } catch (error) {
      navigate("/error")
    }
  }


    if(!categoriasUtils || !pensionUtils){
      return <h3>...Loading</h3>
    }

  return (
    <div>
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
           onChange={handleCategoriasChange}> 
                   {categoriasUtils.map((eachCategoria) => {
                return (
                  <option value={eachCategoria}> {eachCategoria} </option>   
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
           onChange={handlePensionChange}>
                {pensionUtils.map((each) => {
                return (
                  <option value={each}> {each} </option>   
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
              id="img"
           />

           <button type='submit'> Update </button>
      </form> 
    </div>
  )
}

export default EditHotel