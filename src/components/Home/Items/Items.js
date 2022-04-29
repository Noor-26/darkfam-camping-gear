import React, { useEffect, useState } from 'react';
import Item from '../item/item';
const Items = () => {
    const [items, setitems] = useState([])
    useEffect(() => {
      
    fetch("http://localhost:5000/product") 
    .then(res => res.json())
    .then(data => setitems(data))
     
    }, [])
    
    return (
        <div className="mt-5">
            <h2 className="ms-5">New inventory items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-3">
            {
                items.map(item => <Item key={item._id} item={item}/>)
            }
            </div>
        </div>
    );
};

export default Items;