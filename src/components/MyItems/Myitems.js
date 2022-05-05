import React, { useEffect, useState } from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import Loading from '../Loading/Loading';
import Myitem from './Myitem/Myitem';

const Myitems = ({ children }) => {
    const [user,loading] = useAuthState(auth)
    const [items, setitems] = useState([])

    useEffect(() => {
    const email = user?.email
    const  run = async  () => {
        const url = `https://hidden-eyrie-13995.herokuapp.com/products?email=${email}`
        try{
           fetch(url).then(res=>res.json()).then(data => setitems(data))
        }
        catch(error){
            console.log("the error is" , error.message);
    }

}
run()
}, [user])


    if(loading || !items){
        return <Loading/>
    }

    
    const deleteUser = (id) => {
        const deleteIt = window.confirm("do you want to delete the item?")

        if(deleteIt){ 

            const url = `https://hidden-eyrie-13995.herokuapp.com/product/${id}` 
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
    return (
        <div>
            <h2 className="mt-5 pt-4 text-center">My items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-3">
                   {
                       items.map(item =><Myitem key={item._id} item={item} deleteUser={deleteUser}/>)
                   }
                   </div> 
        </div>
    );
};

export default Myitems;