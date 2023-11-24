import axios from 'axios';
import { useState } from 'react';
const API_URL = 'your_backend_api_url';

export const signIn = async (userName, password) => {

  try {
    const response = await axios.post(`http://127.0.0.1:8000/ul`, { email : userName, password : password });
    
    const LoggedInUserData = {
      userName: "Azad Chauhan",
      userRole: response.data.role,
      userEmail: userName,
      token:response.data.token,
    };
    // console.log(response)
    
    localStorage.setItem('userId', userName);
    localStorage.setItem('userRole', response.data.role);
    return LoggedInUserData;
  } catch (error) {
    // console.error('Login failed:', error);
    if(error.response.status===401){
      alert("Invalid Username Or Password! Please Try again")
    }
    throw error;
  }
};