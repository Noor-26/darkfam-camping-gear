import React from 'react';

const Item = ({item}) => {
    const {name,img,description,price,supplierName,_Id}= item
    return (
        <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="Product"/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
           
            <p class="card-text">price : ${price}</p>
            <p class="card-text">supplierName : {supplierName}</p>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default Item;