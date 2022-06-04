import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context.jsx"
import { Navigate } from "react-router-dom"

function IsAdm(props) {

    const { isAdm } = useContext(AuthContext)
  
    if( isAdm === true ){
      return props.children
    } else {
      return <Navigate to="/home" />
    }  
  }
  
  export default IsAdm