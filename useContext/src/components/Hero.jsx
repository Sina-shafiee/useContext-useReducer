import React, { useContext } from 'react';
import { appContext } from '../App';

const Hero = () => {
  const data = useContext(appContext);
  return <div>{data.heroText}</div>;
};

export default Hero;
