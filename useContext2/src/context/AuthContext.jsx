import { createContext, useState } from 'react';

export const authContext = createContext({
  isLogin: false,
  setIsLogin: () => {}
});

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <authContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
