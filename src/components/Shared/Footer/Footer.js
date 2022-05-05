import React from 'react';
import { FaFacebook,FaInstagram,FaGithub } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="mt-5 text-center footer-container">
           <p> Copyright &copy; {year} DARKFAM | </p>
           <div>
               <a href="#" className="footer-icon px-1"><FaFacebook/></a>
               <a href="#" className="footer-icon px-1"><FaInstagram/></a>
               <a href="#" className="footer-icon px-1"><FaGithub/></a>

           </div>
        </footer>
    );
};

export default Footer;