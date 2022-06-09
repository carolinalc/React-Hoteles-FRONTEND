import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context.jsx"
import { Navigate } from "react-router-dom"

function IsPrivate(props) {

  const { isLogging } = useContext(AuthContext)

  if (isLogging === true) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}

export default IsPrivate