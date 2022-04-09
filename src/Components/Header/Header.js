import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user?.displayName && user.displayName
                }
                {
                    user?.uid ? <button onClick={() => signOut(auth)}>Sign out</button> :
                        <Link to='/login'>login</Link>


                }
            </nav>
        </div >
    );
};

export default Header;