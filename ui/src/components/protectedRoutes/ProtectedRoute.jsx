import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const navigate=useNavigate()
    const [isAuthenticated,setIsAuthenticated]=useState(false);
   
    useEffect(()=>{
        const retrieveToken=()=>{
            const accessToken=JSON.parse(localStorage.getItem("token"))
            const refreshToken=JSON.parse(localStorage.getItem("refreshToken"))

            if(accessToken || refreshToken){
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false)
                navigate('/authenticate/login')
            }
        }
        retrieveToken();
    },[navigate])
  return (
    <>
        {
            isAuthenticated ? props.children:
            null
        }
    </>
  )
}

export default ProtectedRoute;