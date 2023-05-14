import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // Verify the JWT on the server-side to ensure it is valid
      // If the JWT is valid, set the isLoggedIn state to true
      setIsLoggedIn(true);
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
