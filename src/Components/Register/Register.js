import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import useAuth from '../../AuthProvider/useAuth';

const Register = () => {
    const { email, setEmail, password, setPassword, emailSignIn, name, setName, updateUserInfo, setUser, setIsLoading ,error,setError} = useAuth()
   


    //Getting user info
    const getEmail = (event) => {
        setEmail(event.target.value);
        

    }
    const getPassword = (event) => {
        setPassword(event.target.value);
    }
    const getName = (event) => {

        setName(event.target.value);
    }

    // signIn using Email and update user profile
    const handleUserinfo = (event) => {
        emailSignIn(email, password, name)
        
            


        event.preventDefault();

    }

    return (
        <div>
            <form className='form' onSubmit={handleUserinfo} >
                <h3>Register For New Account</h3>

                <div>

                    <input onBlur={getName} className='input-field' type="text" placeholder='Your Name' required />
                </div>
                <div>

                    <input onBlur={getEmail} className='input-field' type="email" placeholder='E-mail' required />
                </div>
                <div>

                    <input onBlur={getPassword} className='input-field' type="password" placeholder='Password'  required/>
                </div>

                {error && <span className='text-danger'>{error}</span>}
                <button className='submit-btn' type="submit" >Register</button>

            </form >

            <div className='create'>
                <p>Already have Account ? <Link to='/signin'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default Register;