import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context.jsx"
import { Navigate } from "react-router-dom"

function IsAdmin(props) {

  const { isAdm } = useContext(AuthContext)

  if (isAdm === true) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}

export default IsAdmin