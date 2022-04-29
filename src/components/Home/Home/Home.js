import React from 'react';
import Items from '../Items/Items';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Items/>
            <Services/>                                    
        </div>
    );
};

export default Home;