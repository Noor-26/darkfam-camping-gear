import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import './Inventory.css'
const Inventory = () => {
    const {id} = useParams()
    const [item, setItems] = useState({})
    const {name,img,description,price,supplierName}= item
    const [productQuantity, setQuantity] = useState(0)

      const reduceQuantity =() =>{
          setQuantity(productQuantity - 1)
          
          // update quantity
    
          fetch(`https://floating-inlet-45730.herokuapp.com/inventory/${id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json',
                quantitys : productQuantity - 1

            },
           
        })
        .then(res => res.json())
        .then(data =>{
            
        console.log('success',data)
            
    })
  
}
      const increaseQuantity =event =>{
        event.preventDefault()
        const newQuantity = event.target.increase.value

        const increse = parseInt(productQuantity) + parseInt(newQuantity) 

          setQuantity(increse)
          
          // update quantity
    
          fetch(`https://floating-inlet-45730.herokuapp.com/inventory/${id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json',
                quantitys : increse

            },
           
        })
        .then(res => res.json())
        .then(data =>{
           
        console.log('success',data)
            
    })
    event.target.reset()
  
}
      
      
    
    useEffect(() => {
      fetch(`https://floating-inlet-45730.herokuapp.com/inventory/${id}`)
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
              <button className="btn-def btn px-4 py-2" onClick={reduceQuantity}>Delivered</button>
              
            </div>
            <form onSubmit={increaseQuantity}>
              <h2 className="mt-4">Restock the items</h2>
              <div className="text-center">
              <input type="text" name='increase' className="py-1"/>
                <input type="submit" value="Add"className="btn-def btn add-btn" />
              </div>
            </form>
          </div>
          <div>
          </div>
            </div>
        </div>

        </div>
        <div  className="text-center">
            <Link to="/manageInventory" className="btn my-4 btn-def">Manage Inventory</Link>
        </div>
        </div>
    );
};

export default Inventory;