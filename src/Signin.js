import React from 'react';
import "./Signin.css";
import {Link} from 'react-router-dom';

function Signin() {
    return (
        <div className="signIn">

            <Link to ="/">
                 <img className="signIn__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG7.png" alt="" />
            </Link>
           
            <div className="signIn__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button className="signIn__button">Sign In</button>

                    <p>By signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                </form>

            </div>

            <button className="signIn__registerButton">Create your Amazon account</button>
        </div>
    )
}

export default Signin;
