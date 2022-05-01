import React from 'react';
import './AddInventory.css';

const AddInventory = () => {
    const addInventory = event =>{
        event.preventDefault()

        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
          
        const item = {name,price,description,img,quantity,supplierName} 
        
        fetch('http://localhost:5000/product',{
        method:"POST",
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data =>{
       
        event.target.reset();
})

    }
    return (
        <div>
            <h2 className="mt-5 pt-3 text-center">Add new items</h2>
            <form onSubmit={addInventory}>
                <div className="add-container container w-50">
                <label htmlFor="name">Item Name</label>
                <input  type="text" name="name" id="name" className="py-1 mb-2" required/>


                <label htmlFor="quantity">Quantity</label>
                <input  type="number" name="quantity" id="quantity" className="py-1 mb-2" required/>

                <label htmlFor="price">Price</label>
                <input  type="text" name="price" id="price" className="py-1 mb-2" required/>
                
                <label htmlFor="img">Image link</label>
                <input  type="text" name="img" id="img" className="py-1 mb-2" required/>

                <label htmlFor="supplierName">Supplier name</label>
                <input  type="text" name="supplierName" id="supplierName" className="py-1 mb-2" required/>

                <label htmlFor="description">Description</label>
                <textarea  type="text" name="description" id="description" className="mb-2" required/>
                <div className="text-center mt-3">

                <button type="submit" className="btn add-btn px-4 ">Add </button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default AddInventory;