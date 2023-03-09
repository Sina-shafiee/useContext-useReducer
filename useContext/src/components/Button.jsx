import { useContext } from 'react';
import { appContext } from '../App';

const Button = () => {
  const data = useContext(appContext);

  console.log(data.btnText);
  return <button>{data.btnText}</button>;
};

export default Button;
