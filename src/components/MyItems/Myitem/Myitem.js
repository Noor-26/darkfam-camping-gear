import React from 'react';
import './Myitem.css'
const Myitem = ({item,deleteUser}) => {
    const {name,img,description,price,supplierName,_id}= item

    return (
        <div className="col"
        data-aos="zoom-in-down"  data-aos-duration="3500">
        <div className="card h-100">
          <img src={img} className="card-img-top card-img " alt="Product"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
           
            <p className="card-text">price : ${price}</p>
            <p className="card-text">supplierName : {supplierName}</p>
            <p className="card-text">{description}</p>
          </div>
          <div className=" text-center ">
            <button className="btn btn-def mb-3 " onClick={() =>deleteUser(_id)}> Delete </button>
          </div>
        </div>
      </div>
    );
};

export default Myitem;