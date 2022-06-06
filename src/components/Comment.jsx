import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { createComments } from '../services/comment.services'
import { getCategoriesPension } from '../services/hotels.services'

function Comment() {

  const [ comentario, setComentario ] = useState("")
  const [ valoracion , setValoracion ] = useState([])
  const [ userName, setUserName ] = useState("")

  const { id } = useParams()

  const navigate = useNavigate()

  const handleComentarioChange = (e) => setComentario(e.target.value)

  useEffect(() => {
    handleCreateComment()
    mostrarValoracion ()
  }, [])

  const mostrarValoracion = async () => {
      try {
        const response = await  getCategoriesPension()
        setValoracion(response.data.valoracion)
      
      } catch (error) {
        navigate("/error")
      }
  }


  const handleCreateComment = async (e) =>{
    e.preventDefault()

    try {

      const newComment = {
        comentario,
        valoracion,
        userName
      }

      await createComments(id, newComment)
      // setComentario(comentario)
      // setUserName(userName)
      navigate("/hotels/")
      
    } catch (error) {
      navigate("/error")
    }

  }
  
  return (
    <div>
      
    <form onSubmit={handleCreateComment}>

    <label htmlFor="user">User: {userName.username} </label>
       <br />  
      <label htmlFor="comment">Comment: </label>
            <textarea type="text"
            name='comment'
            onChange={handleComentarioChange}
            value={comentario} 
            />
       <br />
       <label htmlFor="valoracion">Rating: </label>
       {/* <select type="text"
                name='valoracion' >
                  {valoracion.map((each) => {
                return (
                  <option value={each}> {each} </option>   
                )  })}  
                </select> */}
       <br />
       </form>
       </div>
  )
}

export default Comment