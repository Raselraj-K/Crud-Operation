import axios from 'axios';
import { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import AdminDashboard from './adminDashboard';
function Userdetails(){
    const [users, setUsers] = useState({userValue:[]})
    const getPosts = async()=>{
        try{
            const userPosts = await axios.get('http://localhost:8000/api/userdetails')
            setUsers({userValue : userPosts.data.data})
            
        }catch(err){
            console.error(err.message);
        }
    };


    useEffect(()=>{
        getPosts()
    },[])

    console.log(users.userValue);
    return(
        <div>
            <AdminDashboard/>
        <div className = "container">
            

            <Table striped bordered hover size="sm" >
  <thead>
    <tr>
     
      <th>NAME</th>
      <th>ADDRESS</th>
      <th>PHONE</th>
      <th>PRODUCT NAME</th>
      <th>DELIVERY DATE</th>
      <th>EMAIL</th>
      <th>Status</th>
      
    </tr>
  </thead>
  <tbody>
      {
          users.userValue.map((values)=>(
            <tr>
                
            <td>{values.name}</td>
            <td>{values.address}</td>
            <td>{values.phone}</td>
            <td>{values.productname}</td>
            <td>{values.deliverydate}</td>
            <td>{values.email}</td>
            <td>{values.status}</td>
            
        </tr>

          ))
          
      }
    
    
  </tbody>
</Table>
        </div>
        </div>
    )

}
export default Userdetails;
