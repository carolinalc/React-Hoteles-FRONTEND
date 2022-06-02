import { createContext, useEffect, useState } from "react";
import { verifyService  } from "../services/auth.services";

const AuthContext = createContext()

function AuthWrapper(props){

    const [ isLogging, setIsLogging ] = useState(false)
    const [ user, setUser ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const authenticateUser = async () => {
        setIsLoading(true)

        try {
            const response = await verifyService()
            console.log("Token valido")
            console.log("El payload es:", response.data)
            setIsLogging(true)
            setUser(response.data)
            setIsLoading(false)

        }catch(error){
            console.log("El usuario no tiene token o no es válido")
            setIsLogging(false)
            setUser(null)
            setIsLoading(false)
        }
    }

    const passedContext = {
        isLogging,
        user,
        authenticateUser
    }

    useEffect(()=>{
        authenticateUser()
    }, [])

    if(isLoading === true){
        return <div className="App"><h3> Verificando al usuario ...</h3></div>
    }

    return (

        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthWrapper }