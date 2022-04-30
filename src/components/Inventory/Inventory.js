import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'
const Inventory = () => {
    const {id} = useParams()
    const [item, setItems] = useState({})
    const {name,img,description,price,supplierName,_id,quantity}= item
    const [productQuantity, setQuantity] = useState(0)

      const reduceQuantity =() =>{
          setQuantity(productQuantity - 1)
          
          // update quantity
    
          fetch(`http://localhost:5000/inventory/${id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json',
                newQuantitys : productQuantity - 1

            },
           
        })
        .then(res => res.json())
        .then(data =>{
            alert('user sent')
        console.log('success',data)
            
    })
  
}
      
       

       
        
      
      
    
    useEffect(() => {
      fetch(`http://localhost:5000/inventory/${id}`)
      .then(res => res.json())
      .then(data => {
          setQuantity(data.quantity )
          setItems(data)
        })
    }, [])
   
    
    return (
        <div className="mt-5">
            <h2 className="mt-2 text-center">Inventory</h2>
        <div  className="row row-cols-1 row-cols-md-2 g-4 container mx-auto mt-3">
        
        <div className="col">
            <div className="card h-100 ">
                <img src={img} alt="" />
            </div>
        </div>
        <div className="col">
            <div className="card h-100 pt-5">
            <div className="card-body ">
            <h3 className="card-title">Product name :{name}</h3>
           
            <p className="card-text mt-2">Price : ${price}</p>
            <p className="card-text mt-2">Quantity : {productQuantity }</p>

            <p className="card-text">SupplierName : {supplierName}</p>
            <p className="card-text">Description : {description}</p>
            <div className=" text-center">
              <button className="inventory-btn btn px-4 py-2" onClick={reduceQuantity}>Delivered</button>
            </div>
          </div>
          
            </div>
        </div>



        </div>
        </div>
    );
};

export default Inventory;