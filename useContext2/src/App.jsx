import Main from './components/Main';
import Nav from './components/Nav';
import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Nav />
      <Main />
    </AuthProvider>
  );
};

export default App;
