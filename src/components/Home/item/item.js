import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {name,img,description,price,quantity,supplierName,_id}= item
   
    return (
        <div className="col" data-aos="fade-up"
        data-aos-duration="3500">
        <div className="card h-100">
          <img src={img} className="card-img-top card-img" alt="Product"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">price : ${price}</p>
            <p className="card-text">Quantity : {quantity}</p>
            <p className="card-text">supplierName : {supplierName}</p>
            <p className="card-text">{description.slice(0,150)}...</p>
          </div>
          <div className=" text-center w-100">
            <Link to={`/inventory/${_id}`}>
            <button className="my-3 btn btn-def" >Update stock</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Item;