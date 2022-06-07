import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'

function VerComments() {

    const [ details, setDetails ] = useState(null)

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
     getAllComments()
    }, [])
    
    const getAllComments = async () => {

        try {
            const response = await getAllComments(id)
            setDetails(response.data)
            console.log(response.data.id)
            
        } catch (error) {
            navigate("/error")
        }
    }

    if(details === null){
        return <DotLoader/>
    } 

  return (
    <div>
        {details.map((each) =>{
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