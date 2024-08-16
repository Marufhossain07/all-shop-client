import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
 
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        signIn,
        signUp,
        googleSignIn,
        loading
    }

    return (
        <>
        <authContext.Provider value={authInfo}>
             {children}
        </authContext.Provider>
        </>
    );
};

export default AuthProvider;