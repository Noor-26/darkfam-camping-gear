import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../../firebase'
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';
import google from '../../../images/google.png'
import github from '../../../images/github.png'
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
  
       
    useEffect(() => {
        if(error || gitError){
            toast.info(error, {
                style: {backgroundColor:"black",color:"white"},
            });
        }
    }, [error,gitError])

    if(loading || gitLoading){
        return <Loading/>
    }

    if(user || gitUser){
        navigate('/home')
        }

 
    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
            </div>
            <div className="buttons">
                <button className="btn border px-5 rounded-pill mx-auto mb-3" onClick={() => signInWithGoogle()}><img src={google} className="icon " alt=""  /> Google Sign in</button>

                <button className="btn-github btn  px-5 rounded-pill mx-auto mb-3" 
                onClick={() => signInWithGithub()}><img src={github} className="icon git-icon " alt=""  />Github Sign in</button> 
            </div>
        </div>
    );
};

export default SocialLogin;