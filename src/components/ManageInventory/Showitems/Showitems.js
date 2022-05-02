import React from 'react';
import './Showitems.css'
const Showitems = ({item,deleteUser}) => {
    const {name,price,supplierName,quantity,_id} = item

    return (
        <tr>
      <th scope="row">{name}</th>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{supplierName}</td>
      <td><button className="delete-btn px-3 py-1" onClick={() =>deleteUser(_id)}>delete</button></td>
        </tr>
    );
};

export default Showitems;