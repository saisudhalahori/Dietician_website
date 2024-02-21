import React, {useState,useContext} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase';
import { AuthContext } from '../../Contextapi/AuthContext';
import { useNavigate} from 'react-router-dom';
import './Login.css';
function Login() {
    let [error,setError] = useState(false);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const {Dispatch} = useContext(AuthContext) ;
    let Navigate = useNavigate()
    const handleLogin=(e)=>{
      
       

        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            
            email ==="useradmin@gmail.com" ? Navigate('/admin') :Navigate('/')
            Dispatch({type:"login",payload:user})
            console.log("login sucess")
            
            // ...
          })
          .catch((error) => {
            setError(true)
            console.log(error)

          });
  }

  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
            <input type='email' placeholder='email' 
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='password' placeholder='password' 
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
            {error && <span>wrong email or password</span>}
        </form>
    </div>
  )
}

export default Login