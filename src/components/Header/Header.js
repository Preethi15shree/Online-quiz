import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <Link className='title' to="/">
            SQUEEZE YOUR BRAINN!!!
        </Link>
        <hr className='divider'/>
    </div>
  );
};

export default Header;