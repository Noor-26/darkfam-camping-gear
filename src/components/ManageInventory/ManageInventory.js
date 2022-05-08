import React, { useEffect, useState } from 'react';
import Showitems from './Showitems/Showitems';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './ManageInventory.css'
const ManageInventory = () => {
    const [Items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://floating-inlet-45730.herokuapp.com/product`)
      .then(res => res.json())
      .then(data => setItems(data))
    },[])

    const deleteUser = (id) => {
        const deleteIt = window.confirm("do you want to delete the item?")

        if(deleteIt){ 

        const url = `https://floating-inlet-45730.herokuapp.com/product/${id}`
                fetch(url,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                   if(data.deletedCount){
                      const remaining = Items.filter(item => item._id !== id)
                      setItems(remaining)
                   }
                })
        }
    }
    if(Items.length === 0 ){
        return <Loading/>;
    }
    return (
        <div className="table-container">
            <h2 className="mt-5 py-3 px-5 ">Manage Inventory</h2>
            <table className="table container ">
                <thead>
                <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">supplierName</th>
    </tr>
                </thead>
                <tbody>
                    {
                        Items.map(item => <Showitems key={item._id} item={item} deleteUser={deleteUser}/>)
                    }
                </tbody>
            </table>

            <div className="text-center">
                <Link to='/addInventory' >

                <button className="btn btn-def mt-4">Add new item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageInventory;