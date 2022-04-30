import React, { useEffect, useState } from 'react';
import { FaArchive,FaDropbox,FaTruck,FaGlobeAmericas,FaWarehouse } from 'react-icons/fa';
import { ImRoad} from 'react-icons/im';
import './Services.css'

const Services = () => {
   
   
    return (
        <div className="mt-5">
          <h2 className="text-center">Our service</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mt-3">

            <div class="col">
        <div class="card h-100 service-card">
          <div class="card-body service-container">
              <div className="service-text p-2">
            <h5 class="card-title">PACKAGING AND STORAGE</h5>
            <p class="card-text">We can package and store your things.</p>
              </div>
              <div><FaArchive className='service-icon'/></div>
          </div>
        </div>
      </div>
            <div class="col">
        <div class="card h-100 service-card">
          <div class="card-body service-container">
              <div className="service-text p-2">
            <h5 class="card-title">CARGO</h5>
            <p class="card-text">Let us transport your things from point A to point B fast and securely</p>
              </div>
              <div><ImRoad className='service-icon'/></div>
          </div>
        </div>
      </div>
            <div class="col">
        <div class="card h-100 service-card">
          <div class="card-body service-container">
              <div className="service-text p-2">
            <h5 class="card-title">WORLDWIDE TRANSPORT</h5>
            <p class="card-text">We can transport your things anywhere in the world.</p>
              </div>
              <div><FaGlobeAmericas className='service-icon'/></div>
          </div>
        </div>
      </div>
            <div class="col">
        <div class="card h-100 service-card">
          <div class="card-body service-container">
              <div className="service-text p-2">
            <h5 class="card-title">GROUND TRANSPORT</h5>
            <p class="card-text">Transport your things with our super moving vans.</p>
              </div>
              <div><FaTruck className='service-icon'/></div>
          </div>
        </div>
      </div>
            <div class="col">
        <div class="card h-100 service-card">
          <div class="card-body service-container">
              <div className="service-text p-2">
            <h5 class="card-title">WAREHOUSING</h5>
            <p class="card-text">We have top notch security and loads of space. Store your stuff at our warehouse.</p>
              </div>
              <div><FaWarehouse className='service-icon'/></div>
          </div>
        </div>
      </div>
            <div class="col">
        <div class="card h-100 service-card">
          <div class="card-body service-container">
              <div className="service-text p-2">
            <h5 class="card-title">DOOR-TO-DOOR DELIVERY</h5>
            <p class="card-text p-1"> Do you need something delivered? We are what you are looking for!</p>
              </div>
              <div><FaDropbox className='service-icon'/></div>
          </div>
        </div>
      </div>
            </div>
           
        </div>
    );
};

export default Services;