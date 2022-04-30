import React from 'react';
import Items from '../Items/Items';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div>
            {/* <Banner/>
            <Items/> */}
            <Services/>           
            <Catagory/>                         
        </div>
    );
};

export default Home;