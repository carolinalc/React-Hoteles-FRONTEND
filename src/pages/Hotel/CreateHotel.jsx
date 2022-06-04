import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { addNewHotelService,  getCategoriesPension } from '../../services/hotels.services'


function CreateHotel() {

  const [hotel, setHotel ] = useState([])

  const [ nombre, setNombre ] = useState("")
  const [ estrellas, setEstrellas ] = useState("")
  // const [ imagen, setImagen ] = useState("")
  const [ categorias, setCategorias ] = useState("")
  const [ ubicacion, setUbicacion ] = useState("")
  const [ precios, setPrecios ] = useState(0)
  const [ pension, setPension] = useState("")
  const [ descripcion, setDescripcion] = useState("")

  const navigate = useNavigate()

  const handleNameChange = (e) => setNombre(e.target.value);
  const handleEstrellasChange = (e) => setEstrellas(e.target.value);
  const handleCategoriasChange = (e) => setCategorias(e.target.value);
  // const handleImagenChange = (e) => setImagen(e.target.value);
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
        setHotel(response.data)
        console.log(response.data)
      } catch (error) {
        navigate("/error")
      }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      
      const newHotel = {
        nombre, 
        estrellas, 
        // imagen,
        categorias, 
        ubicacion, 
        precios, 
        pension,
        descripcion
      }

      
      await addNewHotelService(newHotel)
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
                        {hotel.map((eachHotel) => {
                        return (
                            <option> {eachHotel.categorias} </option>
                              )   }) }
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
                        {hotel.map((eachHotel) => {
                        return (
                            <option> {eachHotel.pension} </option>
                              )    })  }
           </select>
           <br />
           <label htmlFor="descripcion">Description: </label>
          <input type="text"
           name='descripcion'
           onChange={handleDescripcionChange}
           value={descripcion} 
           />
           <br />
           {/* <label htmlFor="imagen">Image: </label>
           <input type="text"
           name='imagen'
           onChange={handleImagenChange}
           value={falta imagen} 
           />  */}

           <button type='submit'> Create</button>
      </form> 
    </div>
  )
}

export default CreateHotel