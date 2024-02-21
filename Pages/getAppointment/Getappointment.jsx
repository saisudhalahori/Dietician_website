import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { collection, addDoc,serverTimestamp } from "firebase/firestore"; 
import {db} from '../../Firebase';
import './getapp.scss'
import { useNavigate } from 'react-router-dom';

let requirDetail = [
   {
    id:"name",
    tag:"input",
    lable:"Name",
    type:"text",
    placeholder:"enter your name",
   },
   {
    id:"email",
    tag:"input",
    lable:"Email",
    type:"email",
    placeholder:"enter your email",
   },
   {
    id:"phone",
    tag:"input",
    lable:"Phone",
    type:"number",
    placeholder:"enter your phone",
   },
   {
    id:"age",
    tag:"input",
    lable:"age",
    type:"number",
    placeholder:"enter your age",
   },
   {
    id:"discription",
    tag:"textarea",
    lable:"Discription",
    type:"textArea",
    placeholder:"discribe the health issue",
   },
]

function Getappointment() {
  const [data,setData] = useState({})
  const navtigat = useNavigate()
  
   const handelsubmit = (e)=>{
    e.preventDefault()

    const senddata=async()=>{
      try{
        await addDoc(collection(db, "users") , {
          appoitment:"pending",
          time:serverTimestamp(),
          ...data
        });
        console.log(collection)
      alert("Dr will confrom the appoitment its pending now");
      navtigat(-1)

      }catch(error){
        console.log(error)
      }
          }

          senddata()  
   
   }

  return (
    <div className='appointment'>
      <Navbar />
      <div className="form">
        <form onSubmit={handelsubmit}>
          {
            requirDetail.map((item)=>{
             return (
              <div className='inputs' key={item.id}>
              <label>{item.lable}</label>
             <item.tag type={item.type}
              placeholder={item.placeholder}
               id={item.id} 
               onChange = {(e)=>setData(prv=>({...prv,[e.target.id]:e.target.value}))
}               />
             </div>)
            })
            
          }
          
          <button type='submit'>Submite</button>
        </form>
      </div>
    </div>
  )
}

export default Getappointment