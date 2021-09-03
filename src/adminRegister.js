import { Button, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDashboard from './adminDashboard';

function AdminRegister(){
    const [product, setProduct] = useState([])
    const [order, setOrder] = useState({
        name : "",
        address : "",
        phone : "",
        productname : "",
        deliverydate : "",
        deliverytime : "",
        email : "",
        password : "",

    })

    
    const getPosts = async()=>{
        try{
            const userPosts = await axios.get('http://localhost:8000/api/productlist')
            setProduct(userPosts.data.data)
            
        }catch(err){
            console.error(err.message);
        }
    };


    useEffect(()=>{
        getPosts()
    },[])

    const nameChange=(event)=>{
        const nameValue = event.target.value
        setOrder({
            ...order,name : nameValue
        })
    }

    const addressChange=(event)=>{
        const addressValue = event.target.value
        setOrder({
            ...order,address : addressValue
        })
    }

    const phoneChange=(event)=>{
        const phoneValue = event.target.value
        setOrder({
            ...order,phone : phoneValue
        })
    }

    const productsChange=(event)=>{
        const productValue = event.target.value
        setOrder({
            ...order,productname : productValue
        })
    }

    const dateChange=(event)=>{
        const dateValue = event.target.value
        setOrder({
            ...order,deliverydate : dateValue
        })
    }

    const timeChange=(event)=>{
        const timeValue = event.target.value
        setOrder({
            ...order,deliverytime : timeValue
        })
    }


    const emailChange=(event)=>{
        const emailValue = event.target.value
        setOrder({
            ...order,email : emailValue
        })
    }

    const passwordChange=(event)=>{
        const passwordValue = event.target.value
        setOrder({
            ...order,password : passwordValue
        })
    }

    const submitOrder=(event)=>{
        event.preventDefault();
        const name = order.name;
        const address = order.address;
        const phone = order.phone;
        const productname = order.productname;
        const deliveryDate = order.deliverydate;
        const deliveryTime = order.deliverytime;
        const email = order.email;
        const password = order.password;
        axios.post('http://localhost:8000/api/order',{
            nameKey : name,
            addressKey : address,
            phoneKey : phone,
            productnameKey : productname,
            dateKey : deliveryDate,
            timeKey : deliveryTime,
            emailKey :email,
            passwordKey : password,
        }).then(res=>{
            alert(res.data.message);
        })
        

    }
    
    // console.log(product);
    return(
        <div>
            <AdminDashboard/>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6 offset-md-3">
                        <h4>Registeration</h4>
                        <form>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text"className="form-control" name="name" placeholder="Enter Your Name" autoComplete="off" onChange={nameChange} required></input>
                            </div>

                            <div className="form-group">
                                <label for="name">Address</label>
                                <textarea type="text"className="form-control" name="name" placeholder="Enter Your Address" autoComplete="off" onChange={addressChange} required></textarea>
                            </div>

                            <div className="form-group">
                                <label for="name">Phone No</label>
                                <input type="number"className="form-control" name="name" placeholder="Enter Your Phone Number" autoComplete="off" onChange={phoneChange} required></input>
                            </div>

                            <div className="form-group">
                            <label for="name">Products</label>
                            <Form.Control as="select" custom onChange={productsChange} required>
                            <option>Select Your Product</option>
                                {
                                    product.map(values=>(
                                        <option value={values.productname}>{values.productname}</option>
                                        ))
                                }
                                
                            </Form.Control>
                            </div>

                           <div className="form-group">
                                <label for="name">Delivery Date</label>
                                <input type="date"className="form-control" name="name" placeholder="Enter Your Name" autoComplete="off" onChange={dateChange} required></input>
                            </div>

                            <div className="form-group">
                                <label for="name">Delivery Time</label>
                                <input type="time"className="form-control" name="name" placeholder="Enter Your Name" autoComplete="off" onChange={timeChange} required></input>
                            </div>

                            <div className="form-group">
                                <label for="name">Email</label>
                                <input type="email"className="form-control" name="name" placeholder="Enter Your Email" autoComplete="off" onChange={emailChange} required></input>
                            </div>

                            <div className="form-group">
                                <label for="name">Password</label>
                                <input type="Password"className="form-control" name="name" placeholder="Enter Your Password" autoComplete="off" onChange={passwordChange} required></input>
                            </div>

                            <div className="form-group">
                            
                            <Button variant="success" type="submit" className="form-control" onClick = {submitOrder}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
    
}
export default AdminRegister;