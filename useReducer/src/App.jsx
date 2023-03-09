import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://fakestoreapi.com/products/1213213');

      if (response.status < 200 && response.status > 399) {
        throw new Error('Something went wrong');
      }

      const json = await response.json();
      setTitle(json.title);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <button onClick={fetchData}>Fetch Data</button>
      )}

      {error && <p>{error.message}</p>}

      {title && <p>{title}</p>}
    </>
  );
};

export default App;
