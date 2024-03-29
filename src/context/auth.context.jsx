import { createContext, useEffect, useState } from "react";
import { verifyService  } from "../services/auth.services";

const AuthContext = createContext()

function AuthWrapper(props){

    const [ isLogging, setIsLogging ] = useState(false)
    const [ user, setUser ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isAdm, setIsAdm ] = useState(false)

    const authenticateUser = async () => {
        setIsLoading(true)

        try {
            const response = await verifyService()
            console.log("Token valido")
            console.log("El payload es:", response.data)
            setIsLogging(true)
            setUser(response.data)
            setIsLoading(false)

            if(response.data.role === "admin"){
                setIsAdm(true)
            } else {
                setIsAdm(false)
            }

        }catch(error){
            console.log("El usuario no tiene token o no es válido")
            setIsLogging(false)
            setUser(null)
            setIsLoading(false)
            setIsAdm(false)
        }
    }

    const passedContext = {
        isLogging,
        user,
        authenticateUser,
        isAdm
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