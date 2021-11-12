import React, {useState} from 'react';
import "./Signin.css";
import {Link} from 'react-router-dom';
import {auth} from './firebase';

function Signin() {
    const [email, setsEmail] = useState('');
    const [password, setsPassword] = useState('');
    const logIn = e => {
        //prevent the page from refreshing
        e.preventDefault();

        //firebase login
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //successfully created a new user with email and password
            console.log(auth);

        })
        .catch(error => alert(error.message));

        //firebase register
    }

    return (
        <div className="signIn">

            <Link to ="/">
                 <img className="signIn__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG7.png" alt="" />
            </Link>
           
            <div className="signIn__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} 
                    onChange={e => setsEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={e => setsPassword(e.target.value)} />

                    <button type="submit" onClick={logIn} className="signIn__button">Sign In</button>

                    <p>By signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                </form>

            </div>

            <button onClick={register} className="signIn__registerButton">Create your Amazon account</button>
        </div>
    )
}

export default Signin;
