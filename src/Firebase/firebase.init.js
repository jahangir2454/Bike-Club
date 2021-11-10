import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const Myinitializer =()=>{
    return initializeApp(firebaseConfig);
}
export default Myinitializer;