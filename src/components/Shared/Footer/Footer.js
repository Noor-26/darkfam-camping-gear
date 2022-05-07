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
               <a href="https://www.facebook.com/Mahtab.khannoorkwkw/" className="footer-icon px-1"><FaFacebook/></a>
               <a href="https://www.instagram.com/mahtabkhannoor26/" className="footer-icon px-1"><FaInstagram/></a>
               <a href="https://github.com/Noor-26" className="footer-icon px-1"><FaGithub/></a>

           </div>
        </footer>
    );
};

export default Footer;