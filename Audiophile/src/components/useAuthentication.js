import { useEffect, useState } from 'react';
import apiSecurity from '../api/apiSecurityConfig';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // Verify the JWT on the server-side to ensure it is valid
      // If the JWT is valid, set the isLoggedIn state to true
      const config = {
        headers:{
          Authorization: token
        }
      };
      apiSecurity.get('/users/validate', config)
        .then(setIsLoggedIn(true))
        .catch(err => {
          console.error(err)
          setIsLoggedIn(false)
        })
      
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('jwt', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

export default useAuthentication;
