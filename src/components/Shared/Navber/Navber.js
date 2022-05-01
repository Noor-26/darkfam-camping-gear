import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

import './Navber.css'
const Navber = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
    <a className="navbar-brand" as={Link} to='/'>Darkfam-camping-gear</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

      <span className=""><HiMenuAlt3 className="navber-icon"/></span> 
      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" as={Link} to='/home'>Home</a>
        </li>
      
    
       
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        
        <li className="nav-item">
         <Link to="/login" className="nav-link">Login</Link>
        </li>
    
       
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navber;