import React from 'react';
import './Showitems.css'
const Showitems = ({item,deleteUser}) => {
    const {name,price,supplierName,quantity,_id} = item

    // const deleteUser = id =>{
       
        
    //         console.log("deleting the user" );
    //         const url = `http://localhost:5000/user/${id}`
    //         fetch(url,{
    //             method:'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //            if(data.deletedCount){
    //               const remaining = Items.filter(user => _id !== id)
    //               setItems(remaining)
    //            }
    //         })
        
    // }
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