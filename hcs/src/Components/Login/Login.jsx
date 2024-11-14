import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Import the CSS file

const Login = () => {
    
    return (
        <div className="login-container">
            <form className="login-form">
                <p className="h4">Login</p>
                <div id="RegisterNow" className="form-text">
                    Welcome Back!
                </div>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                >
                    Login
                </button>
                <div id="RegisterNow" className="form-text">
                    Don't have an account? <Link to="/sign-up">Create one now!</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
