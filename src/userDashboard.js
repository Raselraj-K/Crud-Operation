import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import {Navbar,Nav,Container,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserDashboard(props){
    const [userdata,setUserdata] = useState([])
    const [hide,setHide] = useState({tableHidden : true})
    const getData= async ()=>{
        try{
                    const username = localStorage.getItem('username');
                    console.log(username);
                    const uValue = await axios.post('http://localhost:8000/api/userdata',{usernameKey : username})
                    setUserdata(
                        uValue.data.data 
                        )
                }
                catch(err){
                   console.log(err.message);
        
                }
               
            }
            useEffect(()=>{
                getData()
            },[])
            const showOrder=()=>{
            if(userdata.length === 0){
                alert("You Are Not Order Anything...");
            }
            else{
                setHide({tableHidden : false})
            }
           
           
        }
        const cancelOrder=(id)=>{
            const userId = id;
            console.log(userId);
            axios.post('http://localhost:8000/api/cancelorder',{idKey : userId})
            .then(res=>{
                console.log(res.data.data);
                //setUserdata(res.data.data)
                const idval = res.data.data
                const found = idval.find(element => element.id === userId);
                if(found){
                    alert("Error In Cancel Product")
                }
                else
                {
                    alert("Cancel Successfully");
                    setHide({tableHidden : true})
                } 

                
                // if(values === id){
                //     alert("error");
                // }
                // else{
                //     alert("successfully")
                //     setHide({tableHidden : true})
                // }
        
                    
         
                
            })
            
        }

        // if(userdata.value.length === 1){
        //                     // setUserdata({
        //                     //     value : res.data.data
        //                     //  })
        //                      setHide({tableHidden : false})
        //                 }
        //                  else{
        //                     alert(res.data.message);
                            
        //                 }

        console.log(userdata)
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                 <Container>
                     <Link to="/userdashboard" style={{color:'white'}}>Home Appliances</Link>
                         <Nav className="me-auto">
                         <span style={{color:'black',paddingRight: '50px',fontWeight :500,fontSize : '20px'}}>Welcome {localStorage.getItem('name')}</span>
                         <Link to="#" style={{color:'white',paddingRight: '50px'}} onClick = {showOrder}>Show Order</Link>
                         <Link to="/" style={{color:'white'}}>Logout</Link>
                      </Nav>
                 </Container>
             </Navbar>
             <div>
             <Table striped bordered hover size="sm" hidden = {hide.tableHidden}>
             <thead>
             <tr>
                 <th>NAME</th>
                <th>ADDRESS</th>
                <th>PHONE</th>
                <th>PRODUCT NAME</th>
                <th>DELIVERY DATE</th>
                <th>DELIVERY TIME</th>
                <th>EMAIL</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                   {
          userdata.map(values=>(
              <tr>
                  
              <td>{values.name}</td>
              <td>{values.address}</td>
              <td>{values.phone}</td>
              <td>{values.productname}</td>
              <td>{values.deliverydate}</td>
              <td>{values.deliverytime}</td>
              <td>{values.email}</td>
              <td>{values.status}</td>
             
               <button className = "danger" onClick = {()=>cancelOrder(values.id)}>Cancel Order</button>
              </tr>
              
          ))
      }

            </tbody>

             </Table>
             </div>

        </div>
    )
}
export default UserDashboard;