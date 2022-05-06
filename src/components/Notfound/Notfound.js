import React from 'react';
import notfound from '../../images/Notfound.jpg'
import './Notfound.css'
const Notfound = () => {
    return (
        <div>
            <img src={notfound} alt="" className="img-fluid error-img" />
        </div>
    );
};

export default Notfound;