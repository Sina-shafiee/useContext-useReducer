import { createContext } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';

export const appContext = createContext({ btnText: '', heroText: '' });

const App = () => {
  return (
    <appContext.Provider value={{ btnText: 'Click this', heroText: 'Welcome' }}>
      <div>
        <Nav />
        <Hero />
      </div>
    </appContext.Provider>
  );
};

export default App;
