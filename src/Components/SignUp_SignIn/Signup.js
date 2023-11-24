import React from 'react'
import './Signup.css'
import logo from '../../Assets/logo.png'
import { useState } from 'react'
import { validate, res } from 'email-validator';
// import frame from '../../Assets/png-assets/Asset 24-8.png'
const Signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirm,setConfirm]=useState('');
  const [phone, setPhone]=useState();

  console.log(name+","+email+","+password+","+confirm+","+phone)

  const signupValidation = () =>{

    if(name===""){
      alert("Please fill all the details")
    } else if(validate(email)){
        alert("Invalid Email")
    }

  }
  return (
    <div className='signup-main'>
      <div className='sign-up-container'>
        <div>
          <div style={{ fontFamily: 'Roboto', fontWeight: 'bold' , fontSize:'3rem'}}>Sign Up</div>
          <p style={{ fontFamily: 'Roboto' }}>Get started with a free account</p>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', gap: '5rem' }}>
          <div style={{ display: 'flex',flex:0.8, flexDirection: 'column', gap: '1rem' }}>
            <div style={{ }}>
              <label>Enter Fullname</label>
              <input type='text' placeholder='enter fullname' onChange={(event)=> setName(event.target.value) }></input>
            </div>
            <div>
              <label>Email Address</label>
              <input type='text' placeholder='enter email address' onChange={(event)=> setEmail(event.target.value) }></input>
            </div>
            <div>
              <label>Phone Number</label>
              <input type='number' placeholder='enter phone number' onChange={(event)=> setPhone(event.target.value) }></input>
            </div>
            <div>
              <label>Set Password</label>
              <input type='password' placeholder='enter password' onChange={(event)=> setPassword(event.target.value) }></input>
            </div>
            <div>
              <label>Confirm Password</label>
              <input type='password' placeholder='enter password' onChange={(event)=> setConfirm(event.target.value) }></input>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ flex: 0.3 }} height="100px" width="150px" src={logo}></img>
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <button onClick={signupValidation} className='sign-up-btn'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Signup