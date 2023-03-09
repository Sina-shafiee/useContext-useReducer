import React from 'react';
import Button from './Button';

const Nav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <h1>Logo</h1>
      <Button />
    </nav>
  );
};

export default Nav;
