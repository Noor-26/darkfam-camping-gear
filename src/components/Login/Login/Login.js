import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {  useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Form.css'
const Login = () => {
    const emailRef = useRef()
      const passwordRef = useRef()
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      

      const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const resetPassword = () => {

    }
    return (
        <div className="mt-5 pt-3 text-center form-container">
            <form  onSubmit={handleSubmit} className="border p-5">
            <h2>Login here</h2>
                
                <div className="d-flex form-field">
                   
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="mb-3 py-1 ps-1  input-field"    ref={emailRef} required/>
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field" ref={passwordRef} required/>
                   
                    <div className="text-center">
                        <button className="py-1 mb-3  form-btn">Login</button>
                    </div> 

                    <p>Need an account ? <Link to='/register'   className="form-link">Sign up</Link> </p>
                    <p>Forget your password ? <button onClick={resetPassword} className="btn " style={{color:"crimson"}}>Reset Password</button></p>
                    
                </div>
            </form>
        </div>
    );
};

export default Login;