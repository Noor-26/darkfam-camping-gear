import React from 'react';
import './AddInventory.css';

const AddInventory = () => {
    const addInventory = event =>{
        event.preventDefault()

    }
    return (
        <div>
            <h2 className="mt-5 pt-3 text-center">Add new items</h2>
            <form onSubmit={addInventory}>
                <div className="add-container container w-50">
                <label htmlFor="name">Item Name</label>
                <input type="text" name="name" id="name" className="py-1 mb-2"/>

                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" id="description" className="mb-2"/>

                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity" className="py-1 mb-2"/>

                <label htmlFor="supplyerName">Supplier name</label>
                <input type="text" name="supplyerName" id="supplyerName" className="py-1 mb-2"/>
                <div className="text-center mt-3">

                <button type="submit" className="btn add-btn px-4 ">Add </button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default AddInventory;