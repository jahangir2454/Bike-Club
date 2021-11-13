import Myinitializer from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile,GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from 'react';




Myinitializer();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('')
    const [admin,setAdmin] = useState(false)
    const [load,setLoad] = useState(true)
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider()

//    ===========================google sign in start ===========================
const googleSignIn = (location,history)=>{
    setLoad(true)
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        const user= result.user;
        saveUserS(user.email,user.displayName)
        const lock = location?.state?.from||'/';
        history.push(lock)
        setError('')
    }).catch(error=>{
        setError(error.message);
    }).finally(()=>{
        setLoad(false);
    })
}
// ====================github login ===========================
const githubLogin = (location,history)=>{
    setLoad(true);
    signInWithPopup(auth,githubProvider)
    .then(result=>{
        setUser(result.user)
        const lock = location?.state?.from||'/';
        history.push(lock)
        setError('')
    }).catch(error=>{
        setError(error.message)
    }).finally(()=>{
        setLoad(false)
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
},[auth])
// ==========================sign up =========================
const createUser = (email, password,name,location,history)=>{
    setLoad(true);
    createUserWithEmailAndPassword (auth, email, password)
    .then(result=>{
        setUser (result.user)
        saveUser(email,name)
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
// database save user =================
const saveUser = (email,name)=>{
    const newUser = {email,name}
    setLoad(true)
    fetch('https://boiling-harbor-34572.herokuapp.com/allUser',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    .then()
    setLoad(false)
}
const saveUserS = (email,name)=>{
    const newUser = {email,name}
    setLoad(true)
    fetch('https://boiling-harbor-34572.herokuapp.com/allUser',{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    .then()
    setLoad(false)
}
useEffect(()=>{
    fetch(`https://boiling-harbor-34572.herokuapp.com/admin/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
       setAdmin(data.admin)
    })
},[user.email])
return{
    googleSignIn,
    createUser,
    logout,
    githubLogin,
    login,
    admin,
    load,
    error,
    user,
    error,
}
}

export default useFirebase;

