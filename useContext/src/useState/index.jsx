import React, { useEffect, useState } from 'react';

const State = () => {
  //   let count = 0;
  const [point, setPoint] = useState(0);
  const [count, setCount] = useState(0);

  console.log('rendered');

  useEffect(() => {
    console.log('point changed');
  }, [point]);

  return (
    <div>
      <p>{point}</p>
      <button onClick={() => setPoint(point + 1)}>Increase count</button>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
};

export default State;
