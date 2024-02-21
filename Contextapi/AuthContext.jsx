import { Children, createContext, useContext, useEffect, useReducer } from "react";
import authReducer from "./AuthReducer";

 const Initialstate ={
    currentUser : JSON.parse(sessionStorage.getItem("user")) || null

 };

 export const AuthContext = createContext(Initialstate);

 export const AuthContextProvider = ({children}) => {
      const [state, Dispatch] = useReducer(authReducer, Initialstate)
      useEffect(()=>{
        sessionStorage.setItem("user",JSON.stringify(state.currentUser));

      },[state.currentUser])

    return <AuthContext.Provider value={{currentUser:state.currentUser, Dispatch}}>
               {children}
    </AuthContext.Provider> 

}

