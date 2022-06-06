import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { createComments } from '../services/comment.services'

function Comment() {

  const [ comentario, setComentario ] = useState("")
  const [ valoracion , setValoracion ] = useState("")
  const [ userName, setUserName ] = useState("")

  const navigate = useNavigate()

  const handleComentarioChange = (e) => setComentario(e.target.value)
  const handleValoracionChange = (e) => setValoracion(e.target.value)

  useEffect(() => {
    handleCreateComment()
  }, [])

  const handleCreateComment = async (e) =>{
    e.preventDefault()

    try {

      const newComment = {
        comentario,
        valoracion,
        userName
      }

      await createComments(newComment)
      setComentario(comentario)
      setValoracion(valoracion)
      setUserName(userName)
      //Navigate(`/hotels/${id}`)
      
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
       <select type="text"
                name='valoracion'
                onChange={handleValoracionChange}
                value={valoracion} 
                >
                  {valoracion.map((each) => {
                return (
                  <option> {each.valoracion} </option>   
                )  })}  
                </select>
       <br />
       </form>
       </div>
  )
}

export default Comment