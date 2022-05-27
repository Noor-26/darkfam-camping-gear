import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import campPng from './camping.png'
const Banner = () => {
    return (
        <div>
            <div className="img-container">
            <img src={campPng} className="banner-img" alt="" />
            </div>
            <div className="text-container text-white ">
            
                <h1 className="banner-text text-center " >Equip all your Camping items here </h1>
              <a href='#inventory'><button className="btn btn-def px-3 py-2 px-md-5 py-md-3">See items</button></a>
               
            </div>
        </div>
    );
};

export default Banner;