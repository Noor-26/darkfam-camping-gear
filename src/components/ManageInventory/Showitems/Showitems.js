import React from 'react';

const Showitems = ({item}) => {
    const {name,price,supplierName,quantity} = item
    return (
        <tr>
      <th scope="row">{name}</th>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{supplierName}</td>
        </tr>
    );
};

export default Showitems;