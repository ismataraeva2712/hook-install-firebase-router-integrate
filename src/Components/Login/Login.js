import { getAuth } from 'firebase/auth';
import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // ----------------------------------------------
    const handleSIgnInGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <button onClick={handleSIgnInGoogle}>Google sign in</button>
            </div>
            <br /> <br />
            <form >

                <input type="email" name="" placeholder='enter your email' id="" />
                <br /> <br />
                <input type="password" placeholder='enter your password' name="" id="" />
                <br /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;