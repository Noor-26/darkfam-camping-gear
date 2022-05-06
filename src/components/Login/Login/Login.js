import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Form.css'
import Loading from '../../Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
const axios = require('axios').default;

const Login = () => {
      const emailRef = useRef()
      const passwordRef = useRef()
      const navigate = useNavigate()
      const location = useLocation()

      let from = location.state?.from?.pathname || '/'

      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      
      const  handleSubmit = async event =>{
        await  event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('https://hidden-eyrie-13995.herokuapp.com/login',{email});
        localStorage.setItem("accessToken",data)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
          await sendPasswordResetEmail(email);
          toast.info("Email sent", {
            style: {backgroundColor:"black",color:"white"},
        });
      }
      
      else{
        toast.info("Enter your email to reset password", {
            style: {backgroundColor:"black",color:"white"},
        });
      }
    }

    useEffect(() => {
        if(error ){
          toast.info(error?.message, {
            style: {backgroundColor:"black",color:"white"},
        });
      }
    }, [error]) 

    if(loading || sending){
        return <Loading/>
    }

    if(user){
        navigate(from,{replace:true})
      }

    return (
        <div className="mt-5 pt-3 form-container">
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
            <SocialLogin/>
            </form>
        </div>
    );
};

export default Login;