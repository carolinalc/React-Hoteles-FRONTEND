import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function EditPerfil() {
  const [ username, setUserName] = useState("");
  const [ imagen, setImagen ] = useState("");
  const [ email, setEmail ] = useState("")
  const { id } = useParams();

  return (
    <div>EditPerfil</div>
  )
}

export default EditPerfil