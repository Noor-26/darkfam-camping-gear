import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Item from '../Item/Item';
const Items = () => {
    const [items, setitems] = useState([])
    useEffect(() => {
      
        fetch("https://hidden-eyrie-13995.herokuapp.com/product/home") 
        .then(res => res.json())
        .then(data => setitems(data))
        
    }, [])
    if(items.length === 0 ){
        return <Loading/>;
    }

    return (
        <div className="mt-5 h-100">
            <h2 className="ms-5" id="inventory">New inventory items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-3">
            {
                items.map(item => <Item key={item._id} item={item}/>)
            }
            </div>
            <div  className="text-center">
            <Link to="/manageInventory" className="btn my-4 btn-def">Manage Inventory</Link>
        </div>
        </div>
    );
};

export default Items;