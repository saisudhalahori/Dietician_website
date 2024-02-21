import React, { useState ,useEffect } from 'react'
import { createUserWithEmailAndPassword} from "firebase/auth";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import {auth, db, storage} from '../../Firebase'
import './Signup.css'
import { collection, addDoc} from "firebase/firestore"; 
import { serverTimestamp } from 'firebase/firestore';

import { ref, uploadBytesResumable, getDownloadURL,uploadBytes } from "firebase/storage";
// import { doc, onSnapshot } from "firebase/firestore";




const userInputs = [
    {
      id: "Username",
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: "displayname",
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: "Email",
      label: "Email",
      type: "email",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: "Phone",
      label: "Phone",
      type: "number",
      placeholder: "+1 234 567 89",
    },
    {
      id: "Password",
      label: "Password",
      type: "password",
    },
    {
      id: "Address",
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
   
  ];

  
const Signup = () => {
const [file, setFile] = useState(null)
const [data, setData] = useState({})
const [perc,setPerc] = useState(null)
console.log(file)

// useEffect(()=>{
//   const usploadfile = ()=>{
//     let name = new Date().getTime() + file.name
//     const storageRef = ref(storage, file.name);
//     const metaData = {
//      method: `GET /data HTTP/1.1`,
//      Origin : `http://localhost:5173/signup`
//     };
//     uploadBytes(storageRef, file,metaData).then((snapshot) => {
//       console.log('File uploaded successfully!', snapshot);
//     }).catch((error) => {
//       console.error('Error uploading file:', error);
//     });
    
//    }

//  file &&  usploadfile()
// },[file])

// const unsub = onSnapshot(collection(db, "cities", "SF"), (collection) => {
//   const source = collection.metadata.hasPendingWrites ? "Local" : "Server";
//   console.log(source, " data: ", collection.data());
// });



//
console.log(data);
 const handelClick = async(e) => {
  e.preventDefault();
const email = data.Email;
const password = data.Password;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("singed up succesfully")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


    const docRef = await addDoc(collection(db, "users"), {
     ...data
     
    
    });
    console.log('data send susseffuly')
    
 }



  return (
    <div className='singup'>
    <div className="top">
          
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) :
               'https://www.shutterstock.com/image-vector/photo-camera-vector-icon-600nw-1345025204.jpg'}
            alt='' 
            />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon  className='icon'/>
                </label>
                <input type='file' id='file' 
                style={{display:"none"}}
                onChange={(e)=>setFile(e.target.files[0]) }
                />
                
              </div>

              {userInputs.map(input=>{
                  
              return (
              <div className="formInput" key={input.id}>
                <label >{input.label}</label>
                <input type={input.type}
                 placeholder={input.placeholder} 
                 id={input.id}
                 onChange={(e)=>setData((prv)=>({...prv,[e.target.id]:e.target.value}))}
                 />
              </div>)
              })}
              {/* button submit function is disabled  */}
     
              <button type='submit' onClick={handelClick}
                // disabled={perc !==null && perc < 100}
              >Send</button>
              <span onClick={()=>navgate('/')}>Existing User</span>

            </form>
          </div>
          </div>
    
          </div>
        
  )
  
  
            }

export default Signup