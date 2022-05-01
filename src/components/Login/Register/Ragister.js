import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';


const Ragister = () => {
    const confirmPassRef = useRef()
      const emailRef = useRef()
      const passwordRef = useRef()
      const navigate = useNavigate()
      let errorElement;

      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPassRef.current.value

        
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password)
        
        }
        else{
           
            toast.info("passwords don't matched", {
                style: {backgroundColor:"black",color:"white"},
            });

        }
    }
    if(loading){
        return <Loading/>
    }
    if(error){
        errorElement = <p className="text-danger error-text">Error : {error?.message}</p>
    }
   
    if(user){
        navigate('/home')
    }

    return (
        <div className="form-container">
              <form className="border p-5 mt-5" onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <div className="d-flex form-field">
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" required name="email" id="email" className="mb-3 py-1 ps-1  input-field"    ref={emailRef} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" required name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field  " ref={passwordRef} />

                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" required name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field  " ref={confirmPassRef} />
                   
                    <div className="text-center">
                        <button className="py-1 mb-3  form-btn">Sign up</button>
                    </div> 
                    {errorElement} 

                    <p>Already a user? <Link to='/login' className="form-link">Login here</Link> </p>
                    
                </div>
                <SocialLogin/>
               

            </form>
        </div>
    );
};

export default Ragister;