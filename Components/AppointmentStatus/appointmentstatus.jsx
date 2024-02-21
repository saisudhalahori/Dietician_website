import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase';
function Appointmentstatus() {
    const [app,setApp] = useState("")
    const [appId,setAppId] = useState("")
 const checkStatus= async()=>{
    const docRef = doc(db, "users", appId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setApp(`Your Appointment is ${docSnap.data().appoitment} from Doctor Side`)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div>
        <input type='text' placeholder='enter your appointment id'
        
        onChange={(e)=>setAppId(e.target.value)}
        />
        <button onClick={checkStatus}>Check Status </button>

        <h1>{app}</h1>
    </div>
  )
}

export default Appointmentstatus