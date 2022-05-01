import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

import './Navber.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';
const Navber = () => {
  const [user] = useAuthState(auth) 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
  <Link to="/" className="navbar-brand">Darkfam-camping-gear</Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

      <span className=""><HiMenuAlt3 className="navber-icon"/></span> 
      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/home" className="nav-link active">Home</Link>
          
        </li>
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        
        <li className="nav-item">
          {
            user ? <button className="btn">Sign out</button> :
         <Link to="/login" className="nav-link">Login</Link>
          }
        </li>
    
       
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navber;