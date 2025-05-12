import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isTokenExpired } from '../utils/isTokenExpired/isTokenExpired';
import { logoutUser } from '../features/userProfile/userProfileApi';
import { getItemFromLocalStorage, removeItemFromLocalStorage } from '../utils';

export const useAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      
    const token = getItemFromLocalStorage("token");
    console.log("token",token);
    
    if (token && isTokenExpired(token)) {
      console.warn('Token expired. Logging out...');
      removeItemFromLocalStorage('token');
      removeItemFromLocalStorage('loggedInUser');
      dispatch(logoutUser());
    }
  }, []);
};
