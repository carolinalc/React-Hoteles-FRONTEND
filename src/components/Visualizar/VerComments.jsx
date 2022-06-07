import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getComments } from '../../services/comment.services'

function VerComments() {

    const [ listComment, setListComment] = useState(null)

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
     getAllComments()
    }, [])
    
    const getAllComments = async () => {

        try {
            const response = await getComments(id)
            setListComment(response.data)
            console.log(response.data)
        } catch (error) {
            navigate("/error")
        }
    }

    if(listComment === null){
        return <DotLoader/>
    } 

  return (
    <div>
        {listComment.map((each) =>{
            return(
                <div>
                    <h3> {each.username}</h3>
                    <h3> {each.valoracion}</h3>
                    <h3> {each.comentario}</h3>
                </div>
            )})}
    </div>
  )
}

export default VerComments