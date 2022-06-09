import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { getComments } from '../../services/comment.services'

import Card from "react-bootstrap/Card";

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
        <Card style={{ width: '37.5rem' }}>
            <Card.Body>
                <br />
                <Card.Title className="comment-title"><h4>COMMENTS</h4></Card.Title>
                <Card.Text>
                    {listComment.map((each) =>{
                        return(
                            <div key={each.comentario}>
                                <hr />
                                <p> <strong> Name: &nbsp; </strong> {each.clienteId.username} &nbsp; &nbsp; <strong> Rating: &nbsp; </strong> {each.valoracion}</p>
                                <p> {each.comentario}</p>
                            </div>
                        )})}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default VerComments