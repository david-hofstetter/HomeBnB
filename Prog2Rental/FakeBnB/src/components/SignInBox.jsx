import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Register.css'



const SignInBox = () => {
  const [formData, setFormData] = useState({
    username: '',
    eMail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user/add', formData);
      console.log('User data sent successfully:', response.data);
      toast.success('Account created!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });

      setFormData({
        username: '',
        eMail: '',
        password: '',
      });
      window.location.assign('http://localhost:5173/');
    } catch (error) {
      console.error('Error sending user data:', error.message);
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <div className='SignInBox'>
      <h1>Create your Account</h1>
      <form className='loginform' onSubmit={handleSubmit}>
        <label>
          <h2>Username</h2>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          <h2>E-Mail</h2>
          <input type="email" name="eMail" value={formData.eMail} onChange={handleChange} />
        </label>
        <label>
          <h2>Password</h2>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>

        <div>
          <button id='loginbuttoninlogin' className='loginbutton' type='submit'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInBox;
