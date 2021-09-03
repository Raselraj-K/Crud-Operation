import { colors } from '@material-ui/core';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminRegister from './adminRegister';
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';

function AdminDashboard(){
     return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="/admindashboard">Home Appliances</Navbar.Brand> */}
                    <h4 style={{color:'white', fontSize : '20px', fontWeight : 500}}>HOUSE KART</h4>
                        <Nav className="me-auto">
                        <Link to="/admindashboard" style={{color:'white',paddingRight: '50px'}}>Home</Link>
                        <Link to="/productregister" style={{color:'white',paddingRight: '50px'}}>Order</Link>
                        <Link to="addproduct" style={{color:'white',paddingRight: '50px'}}>Add Products</Link>
                        <Link to="user" style={{color:'white',paddingRight: '50px'}}>User's Details</Link>
                        <Link to="/" style={{color:'white'}}>Logout</Link>
                     </Nav>
                </Container>
            </Navbar>

            
        </div>
    )
}
export default AdminDashboard;