import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './user.scss'
import { Timestamp, collection, getDocs ,serverTimestamp,onSnapshot,deleteDoc,doc,setDoc} from "firebase/firestore";
import {db} from '../../Firebase';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {field:"img",headerName:"icon",with:100},
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is  sortable.',
      sortable: true,
      width: 120
    },
    {
        field: 'appoitment',
        headerName: 'Appointment Status',
        description: 'This column has a value getter and is  sortable.',
        sortable: true,
        width: 160
      },
      
  ];

  
  


function UserInfo() {
    const [data , setData] = useState([]);


    useEffect(()=>{
        const fetchdata=async()=>{
            // let list = []
            // const querySnapshot = await getDocs(collection(db, "users"));
            // querySnapshot.forEach((doc) => {
            //   // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
            //   list.push({...doc.data(),id:doc.id,Timestamp:serverTimestamp})
            // });
            // setData(list)
        }

           
        // fetchdata()
     const list = []
        const unsubscribe = onSnapshot(collection(db, "users"), 
        (snapshot) => {
          snapshot.docs.forEach(item=>{
            list.push({...item.data(),id:item.id,Timestamp:serverTimestamp})
          })
          setData(list)
        },
        (error) => {
          // ...
        });

    return ()=>{
             unsubscribe()
    }

    },[])


 
  

    const actionColumn = [{
        field:"action",headerName:"Action",width:300,renderCell:(params)=>{
            return (
                <div className='cellAction'>
                  <Link to="/users/test" style={{textDecoration:"none"}}>
                      <div className="viewButton">view</div>
    
                  </Link>
                  <div className="Button"
                  onClick={async()=>{
                    const id = params.id
                    const citiesRef = collection(db, "users");
                    await setDoc(doc(citiesRef, id), {
                      
                      appoitment:"Conformed"
                    });
                  }}
                   >Conform</div>
                   <div className="Button"
                   
                   onClick={async()=>{
                     const id = params.id
                    {
                        try{
                          await deleteDoc(doc(db, "users",id));
                          setData(data.filter((item)=>item.id !==id))
                          console.log(id)
                        }catch(error){
                                 console.log(error)
                        }
                        
                      }
                   }}
                   >Delete</div>
                </div>
            )
        }
    }]
     
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserInfo