import React, { useReducer } from 'react';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHED_DATA':
      return {
        isLoading: false,
        error: null,
        data: payload
      };

    case 'FETCH_ERROR':
      return {
        isLoading: false,
        error: payload,
        data: null
      };

    case 'FETCH_LOADING':
      return {
        isLoading: payload,
        error: null,
        data: null
      };

    default:
      return state;
  }

  //   if (type === 'FETCHED_DATA') {
  //     return {
  //       isLoading: false,
  //       error: null,
  //       data: payload
  //     };
  //   } else if (type === 'FETCH_ERROR') {
  //     return {
  //       isLoading: false,
  //       error: payload,
  //       data: null
  //     };
  //   } else if (type === 'FETCH_LOADING') {
  //     return {
  //       isLoading: payload,
  //       error: null,
  //       data: null
  //     };
  //   }
  //   return state;
};

const App = () => {
  const [fetchState, dispatch] = useReducer(fetchReducer, initialState);

  const handleFetch = async () => {
    dispatch({ type: 'FETCH_LOADING', payload: true });
    try {
      const response = await fetch('/data/data.json');

      await (async function () {
        return new Promise((resolve) => {
          setTimeout(() => resolve(), 1000);
        });
      })();

      if (response.status < 200 && response.status > 399) {
        throw new Error('Something went wrong');
      }

      const json = await response.json();
      dispatch({ type: 'FETCHED_DATA', payload: json.title });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error });
    }
  };

  return (
    <div>
      {fetchState.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <button onClick={handleFetch}>Fetch product</button>
      )}
      {fetchState.data && <p>{fetchState.data}</p>}
      {fetchState.error && <p>We have error</p>}
    </div>
  );
};

export default App;
