import React, { useEffect, useState } from 'react';
import Showitems from './Showitems/Showitems';

const ManageInventory = () => {
    const [Items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
      .then(res => res.json())
      .then(data => setItems(data))
    },[])
    return (
        <div>
            <h2 className="mt-5 pt-3 ">Manage Inventory</h2>
            <table className="table container">
                <thead>
                <tr>
      <th scope="col">Name</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">supplierName</th>
    </tr>
                </thead>
                <tbody>
                    {
                        Items.map(item => <Showitems key={item._id} item={item}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;