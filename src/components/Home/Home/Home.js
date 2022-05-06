import React from 'react';
import Items from '../Items/Items';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Catagory/>
            <Items/>
            <Services/>           
        </div>
    );
};

export default Home;