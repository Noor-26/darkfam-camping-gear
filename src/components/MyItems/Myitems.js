import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import Loading from '../Loading/Loading';
import Myitem from './Myitem/Myitem';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const axios = require('axios').default;

const Myitems = () => {
    const [user,loading] = useAuthState(auth)
    const [items, setitems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
    const email = user?.email
    const  getMyItems = async  () => {
        const url = `https://darkfam-camping-gear-server.onrender.com/products?email=${email}`
        try{
            const  {data} = await axios.get(url, {
                headers:{
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
           { setitems(data)
            if(data.length ===0){
                toast.info('add items',{
                    style: {backgroundColor:"black",color:"white"}
                })

            }
        }
            
        }
        catch(error){
            console.log("the error is" , error.message);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth)
                navigate('/login')
            }
        }
    }
    getMyItems()

}, [user])


    if(loading ){
        return <Loading/>
    }

    
    const deleteUser = (id) => {
        const deleteIt = window.confirm("do you want to delete the item?")

        if(deleteIt){ 

            const url = `https://darkfam-camping-gear-server.onrender.com/product/${id}` 
                    fetch(url,{
                        method:'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                       if(data.deletedCount){
                          const remaining = items.filter(item => item._id !== id)
                          setitems(remaining)
                       }
                    })
        }
            
    }
    if(items.length === 0 ){
        return <Loading/>;
    }
    return (
        <div>
            <h2 className="mt-5 pt-4 text-center">My items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-3">
                   {
                       items?.map(item =><Myitem key={item._id} item={item} deleteUser={deleteUser}/>)
                   }
                   </div> 
        </div>
    );
};

export default Myitems;