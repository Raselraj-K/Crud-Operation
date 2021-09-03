import React, { useState } from 'react';
import axios from 'axios';
import {Navbar,Nav,Container,Button,Table,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Deliver() {
    const [users, setUsers] = useState({userValue:[],hiddenTable : true})
    const [table2, setTable2] = useState({hiddenTable2 : true})
    const [btn, setBtn] = useState({btnHidden : true})
    const [updateStatus ,setUpdateStatus] = useState({table : true})
    const [statusValue , setStatusValue] =useState({stsvalue : "", id: ""})
    const [updatedUser , setUpdatedUser] =useState({updatedUserValue : []})
    const forceUpdate = React.useCallback(() => setUsers({userValue : []}), []);
    
    const userData = async()=>{
        
        try{
            const userPosts = await axios.get('http://localhost:8000/api/userdetails')
            setUsers({userValue : userPosts.data.data})
            
        }catch(err){
            console.error(err.message);
        }
        
    };
    


    
    
    const statusClick = (idval)=>{
    const v = users.userValue.filter(person=>person.id === idval)
    console.log(v);

    setUpdatedUser({
        updatedUserValue : v
    })
    
    setBtn({
        btnHidden :false
    })
    
    setTable2({
        hiddenTable2 : false
    })
    }



    const stsValue=(stsid)=>{
        const value1 = document.getElementById("values").value;
        const stsId = stsid;
        setStatusValue({stsvalue : value1, id : stsId});
        
    }




    const submitSts = ()=>{
        const updateStsValue = statusValue.stsvalue
        const updateStsId = statusValue.id
        axios.post('http://localhost:8000/api/updatestatus',{
            key1 :updateStsId,
            key2 : updateStsValue
        }).then((res)=>{
            console.log(res.data.data[0])
            const updatedStatusValue = res.data.data
            setUsers({userValue : updatedStatusValue})

        })

        
        
    }

    // this.bind.render();
    console.log(users.userValue)
    console.log(statusValue.id)
    
    console.log(statusValue.stsvalue);
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                   
                    <h4 style={{color:'white', fontSize : '20px', fontWeight : 500}}>HOUSE KART</h4>
                        <Nav className="me-auto">
                        <Link to="/deliver" style={{color:'white',paddingRight: '50px'}}>Home</Link>
                        <Link to="#" style={{color:'white',paddingRight: '50px'}} onClick={userData}>Order</Link>
                        <Link to="/" style={{color:'white'}}>Logout</Link>
                     </Nav>
                </Container>
            </Navbar>

            <div className = "container">
            

            <Table striped bordered hover size="sm" hidden = {users.hiddenTable}>
  <thead>
    <tr>
     
      <th>NAME</th>
      <th>ADDRESS</th>
      <th>PHONE</th>
      <th>PRODUCT NAME</th>
       <th>Status </th>
       <th>Action </th>
      
    </tr>
  </thead>
  <tbody>
      {
          users.userValue.map((values)=>(
            <tr>
           
            <td >{values.name}</td>
            <td>{values.address}</td>
            <td>{values.phone}</td>
            <td>{values.productname}</td>
            <td>{values.status}</td>
            <td>Edit <i class="fas fa-edit" onClick = {()=>statusClick(values.id)}></i></td>
            </tr>

          ))
          
      }
    
    
  </tbody>
</Table >
       
        <Table striped bordered hover size="sm" hidden = {table2.hiddenTable2}>
  <thead>
    <tr>
    
         <th>NAME</th>
        {/*<th>ADDRESS</th>
      <th>PHONE</th>
      <th>PRODUCT NAME</th> */}
       <th>Status </th>
      
    </tr>
  </thead>
  <tbody>
      {
          updatedUser.updatedUserValue.map((values)=>(
            <tr>
           
             <td >{values.name}</td>
            {/*<td>{values.address}</td>
            <td>{values.phone}</td>
            <td>{values.productname}</td> */}
            <td>
                
            <Form.Control as="select" id = "values" onChange = {()=>stsValue(values.id)}>
                    
                    <option value = "packed">Packed</option>
                    <option value = "shipped">Shipped</option>
                    <option value = "delivered">Delivered</option>
                </Form.Control>
                
                
            </td>
            </tr>

          ))
          
      }
    
    
  </tbody>
</Table >
<div><Button hidden ={btn.btnHidden} onClick = {submitSts}>Update Status</Button></div>
        </div>
        </div>
    )
    
}
export default Deliver;