import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='container' style={{padding:'10px',textAlign:'center'}}>
        <br/>
        <p>Copyright &copy; 2021<br/>
        <Link to='/about'>About</Link>
        </p>
    </div>
  );
};

export default Footer;