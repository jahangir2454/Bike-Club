import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"


const useAut = () => {
    return useContext(AuthContext)
}
export default useAut;