import useAuth from '../hooks/useAuth';

const Button = () => {
  const data = useAuth();

  console.log(data);

  return (
    <button onClick={() => data.setIsLogin(!data.isLogin)}>
      {data.isLogin ? 'Log out' : 'Login'}
    </button>
  );
};

export default Button;
