import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../AuthProvider/useAuth';
import useFirebase from '../../Firebase/useFirebase';

import './Login.css'
const Login = () => {
  
    const location = useLocation()
    const redirectUrl = location.state?.from || '/home'
    const history = useHistory()
    


    const { googleSignIn, user, isLoading, setIsLoading ,email,password,signInWithEmailAndPassword,setEmail,setPassword,logInWithemail,setUser,error,setError} = useAuth()


    //Google SignIN

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirectUrl);
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    //Email logIn

    const getUserEmail = (event) => {

       setEmail(event.target.value);
    }
    const getUserPassword = (event) => {

        setPassword(event.target.value);
    }




    const handleAccountSubmit = (event) => {
        event.preventDefault();
        logInWithemail(email,password)
        .then((userCredential) => {

            setUser(userCredential.user);
            history.push(redirectUrl);
            // ...
        })
        .catch((error) => {
           
          setError(error.message);
        })
        .finally(() => {
            setIsLoading(false)
        })

    }



    return (
        <div>
            <form className='form' onSubmit={handleAccountSubmit} >
                <h3>Please Login</h3>

                <div>

                    <input onBlur={getUserEmail} className='input-field' type="email" placeholder='E-mail'  required/>
                </div>
                <div>

                    <input onBlur={getUserPassword} className='input-field' type="password" placeholder='Password' required/>
                </div>

                    {error && <span className='text-danger'>{error}</span>}
                <button className='submit-btn' type="submit" >Login</button>

            </form >

            <div className='create'>
                <p>New in MediTech? <Link to='/register'>Create an Account</Link></p>
            </div>
            <p className='sg-btn'> <button onClick={handleGoogleSignin} className='submit-btn create' type="submit" >Login With Google</button></p>
        </div>
    );
};

export default Login;