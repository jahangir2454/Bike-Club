import Myinitializer from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import set from 'set-value';



Myinitializer();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('')
    const [load,setLoad] = useState(true)
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

//    ===========================google sign in start ===========================
const googleSignIn = (location,history)=>{
    setLoad(true)
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        setUser(result.user);
        const lock = location?.state?.from||'/';
        history.push(lock)
        setError('')
    }).catch(error=>{
        setError(error.message);
    }).finally(()=>{
        setLoad(false);
    })
}
// ========================onAuthStateChanged ============================
useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user)
            setError('')
        }else{
            setUser({})
        }
        setLoad(false)
    })
},[])
// ==========================sign up =========================
const createUser = (email, password,name,location,history)=>{
    setLoad(true);
    createUserWithEmailAndPassword (auth, email, password)
    .then(result=>{
        setUser (result.user)
        updateProfile(auth.currentUser,{
            displayName:name
        }).then(()=>{

        }).catch(err=>{
            setError(err.message)
        })
        const lock = location?.state?.from||'/';
        history.push(lock)
        setError('')
    }).catch(error=>{
        setError(error.message)
    }).finally(()=>{
        setLoad(false)
    })
}
// ===================login ================
const login = (email, password,location,history)=>{
    setLoad(true)
    signInWithEmailAndPassword (auth, email, password)
    .then(result=>{
        setUser (result.user)
        const lock = location?.state?.from||'/';
        history.push(lock)
        setError('')
    }).catch(error=>{
        setError (error.message)
    }).finally(()=>{
        setLoad(false)
    })
}
// ========================sign out start ========================
const logout = ()=>{
    setLoad(true)
    signOut(auth)
    .then(()=>{
        setUser({});
    }).catch(error=>{
        setError(error.message);
    }).finally(()=>{
        setLoad(false)
    })
}
return{
    googleSignIn,
    createUser,
    logout,
    login,
    load,
    error,
    user,
    error,
}
}

export default useFirebase;

