import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import useAuth from '../hooks/useAuth';

const Main = () => {
  const data = useAuth();
  return (
    <main
      style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>{data.isLogin ? 'Welcome Dear User' : 'Please Login'}</h1>
    </main>
  );
};

export default Main;
