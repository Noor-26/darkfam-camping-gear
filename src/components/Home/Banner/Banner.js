import React from 'react';
import './Banner.css';
import campPng from './camping.png'
const Banner = () => {
    return (
        <div>
            <div className="img-container">
            <img src={campPng} className="banner-img" alt="" />
            </div>
            <div className="text-container text-white ">
            
                <h1 className="banner-text " >Equip all your Camping items here</h1>
                <button className="btn banner-btn px-5 py-3">See items</button>
               
            </div>
        </div>
    );
};

export default Banner;