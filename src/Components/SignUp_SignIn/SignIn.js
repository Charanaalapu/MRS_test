import React from 'react'
import './SignIn.css'
import logo from '../../Assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signIn } from '../authService'
import { setUserData } from '../../Redux/actions';
import { useDispatch } from 'react-redux';


const SignIn = () => {
    const [userName,setUserName]= useState('');
    const [password,setPassword]= useState('');

    const navigate = useNavigate();
    const dispatch= useDispatch();

    const loginAction = async () => {
        try {
          const loggedInUserData = await signIn(userName, password);
          localStorage.setItem('token',loggedInUserData.token);

          dispatch(setUserData(loggedInUserData));

          navigate('/home');
        } catch (error) {
          
        }
      };


    return (
        <>
            <div className='sign-in-main'>
                <div className='sign-in-container'>
                    <div className='sign-in-form'>
                        <div className='sign-in-label'>Sign In</div>
                        <div style={{ fontFamily: 'Roboto', marginBottom: '1rem' }}>Log in with your enquete account</div>
                    </div>
                    <div className='input-fields'>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label>Email Address</label>
                                <input type='text' placeholder='Enter your email address' onChange={(event)=> setUserName(event.target.value)} ></input>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                <label>Password</label>
                                <input type='password' placeholder='Enter your password' onChange={(event)=> setPassword(event.target.value)} ></input>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <p><Link to="/forget-password">Forgot Password ?</Link></p>
                            </div>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={logo}></img>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <button onClick={loginAction} className='sign-in-btn' style={{ width: '14rem', fontWeight: 'bold' }}>Sign In</button>
                        </div>
                        <hr></hr>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <button className='google-btn' style={{ alignItems: 'center', height: '2.5rem' }}><FcGoogle />Sign-In Using Google</button>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:'2rem', gap:'0.8rem'}}>
                        <label style={{fontWeight:'bold'}}>Dont't have a Account ? </label><Link to="/sign-up">Click Here to Sign Up</Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default SignIn