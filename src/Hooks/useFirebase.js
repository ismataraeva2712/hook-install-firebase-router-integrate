
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase.init'
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const signinWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
    }

    return {
        user, signinWithGoogle, handleSignout
    }
}
export default useFirebase;