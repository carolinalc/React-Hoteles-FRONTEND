import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createComments } from '../services/comment.services'
import { getCategoriesPension } from '../services/hotels.services'
import Button from 'react-bootstrap/Button';

function Comment() {

  const [ comentario, setComentario ] = useState("")

  const [ valoracion , setValoracion ] = useState(3)
  const [valoracionUtil, setValoracionUtil ] = useState(null)
  
  const { id } = useParams()

  const navigate = useNavigate()

  const handleComentarioChange = (e) => setComentario(e.target.value)
  const handleValoracionChange = (e) => setValoracion(e.target.value)

  

   useEffect(() => {
     mostrarValoracion()
    }, [])

  const mostrarValoracion = async () => {
      try {
        const response = await  getCategoriesPension()
        setValoracionUtil(response.data.valoracion)
      
      } catch (error) {
        navigate("/error")
      }
  }


  const handleCreateComment = async (e) =>{
    // e.preventDefault()

    try {

      const newComment = {
        comentario,
        valoracion
      }

      await createComments(id, newComment)
      navigate("/hotels")
      
    } catch (error) {
      navigate("/error")
    }

  }

  
  if(valoracionUtil === null){
    return <h3>...Loading</h3>
  }
  
  return (
    <div style={{display: "flex", alignItems:"center", flexDirection: "column"}}>
      
    <form onSubmit={handleCreateComment}>
       <br />  
      <label htmlFor="comment">Comment: </label>
            <textarea type="text"
            name='comment'
            onChange={handleComentarioChange}
            value={comentario} 
            />
       <br />
       <label htmlFor="valoracion">Rating: </label>
        <select type="text"
                name='valoracion' 
                onChange={handleValoracionChange}
                >
                  {/* <option> selecciona tu puntuación </option>    */}
                  {valoracionUtil.map((each) => {
                return (
                  <option value={each}> {each} </option>      
                )  })}  
                </select>
       <br />
       <Button type='submit'>Add Comment</Button>   
       </form>
       </div>
  )
}

export default Comment