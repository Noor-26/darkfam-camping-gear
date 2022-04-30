import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {name,img,description,price,supplierName,_id}= item
   
    return (
        <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt="Product"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
           
            <p className="card-text">price : ${price}</p>
            <p className="card-text">supplierName : {supplierName}</p>
            <p className="card-text">{description}</p>
          </div>
          <div className=" text-center w-100">
            <Link to={`/inventory/${_id}`}>
            <button className="my-3 btn btn-info" >Update stock</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Item;