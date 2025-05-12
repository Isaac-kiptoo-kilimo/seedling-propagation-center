import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminProtectedRoute = (props) => {
    const navigate=useNavigate()
    const [isAuthenticated,setIsAuthenticated]=useState(false);
   
    useEffect(()=>{
        const retrieveToken=()=>{
            const accessToken=JSON.parse(localStorage.getItem("token"))
            const refreshToken=JSON.parse(localStorage.getItem("refreshToken"))
            const user=JSON.parse(localStorage.getItem("loggedInUser"))
         if(accessToken || refreshToken ){
            if(user && user.role === "admin"){
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false)
                navigate('/')
            }
         }else{
            setIsAuthenticated(false)
            navigate('/authenticate/login')
         }
        }
        if (!isAuthenticated) {
            retrieveToken();
        }
    },[isAuthenticated,navigate])
  return (
    <>
        {
            isAuthenticated ? props.children:
            null
        }
    </>
  )
}

export default AdminProtectedRoute;