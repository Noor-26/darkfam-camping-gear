import React from 'react';
import tent from '../../../images/tent.jpg'
import backpack from '../../../images/backpack.jpg'
import sleepingBag from '../../../images/sleepingBag.jpg'
import './Catagory.css'

const Catagory = () => {
    return (
        <div className="my-5">
            <h2 className="px-5">Top catagory</h2>
            <div  className=" catagory-container container  mt-3" data-aos="fade-down"  data-aos-duration="4000">

            <div>

                <div className="catagory-img-container">
                    <img src={tent} className="img-fluid catagory-img" alt="" />
                    </div>
                <div className="catagory-text">
                    <h5>Camping tent</h5>
                    <p>best camping tent for you</p>
                </div>

            </div>
            <div>

                <div className="catagory-img-container">
                    <img src={backpack} className="img-fluid catagory-img" alt="" />
                    </div>
                <div className="catagory-text">
                    <h5>Backpack</h5>
                    <p>best camping Backpack for you</p>
                </div>


            </div>
            <div>

                
                <div className="catagory-img-container">
                    <img src={sleepingBag} className="img-fluid catagory-img" alt="" />
                    </div>
                <div className="catagory-text">
                    <h5>Sleeping bag</h5>
                    <p>best camping Sleeping bag for you</p>
                </div>


            </div>


            </div>
        </div>
    );
};

export default Catagory;