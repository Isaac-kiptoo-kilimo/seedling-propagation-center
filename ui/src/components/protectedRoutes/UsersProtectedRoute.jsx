import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UsersProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const retrieveToken = () => {
            const accessToken = JSON.parse(localStorage.getItem("token"));
            const user = JSON.parse(localStorage.getItem("loggedInUser"));
            const refreshToken=JSON.parse(localStorage.getItem("refreshToken"))

            if(accessToken || refreshToken){
                if (user && user.role === "customer") {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false); 
                    navigate('/customer');
                }
            }else{
                setIsAuthenticated(false); 
                navigate('/authenticate/login');
            }
        };
        if (!isAuthenticated) {
            retrieveToken();
        }
    }, [isAuthenticated,navigate]); 

    return (
        <>
            {isAuthenticated ? props.children : null}
        </>
    );
};

export default UsersProtectedRoute;
