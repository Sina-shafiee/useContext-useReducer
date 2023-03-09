import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const useAuth = () => {
  const data = useContext(authContext);

  return data;
};

export default useAuth;
