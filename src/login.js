import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Login(){
    useEffect(()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        localStorage.removeItem('name');
    })

    const [data, setData] = useState({
        username  : "",
        password : ""
    })
    const history = useHistory();
    const usernameChange=(event)=>{
        const usernameValue = event.target.value;
        setData({
            ...data,username:usernameValue
        })
    }
    const passwordChange=(event)=>{
        const passwordValue = event.target.value;
        setData({
            ...data,password:passwordValue
        })
    }
    const submitData = (event)=>{
        event.preventDefault();
        const username = data.username;
        const password = data.password;
        axios.post('http://localhost:8000/api/login',{
            nameKey : username,
            passwordKey : password
        })
        .then(res=>{
            console.log(res.data);
            if(res.data.status === true&&res.data.data[1].role===1){
            const tokenValue = res.data.data[0].token
            const roleValue = res.data.data[1].role
            const usernameValue = res.data.data[2].email
            const nameValue = res.data.data[3].name
            localStorage.setItem("token" ,tokenValue);
            localStorage.setItem("role" ,roleValue);
            localStorage.setItem("username" ,usernameValue);
            localStorage.setItem("name" ,nameValue);
            history.push('/admindashboard');
            
            }
            else if(res.data.status === true&&res.data.data[1].role===0){
            const tokenValue = res.data.data[0].token
            const roleValue = res.data.data[1].role
            const usernameValue = res.data.data[2].email
            const nameValue = res.data.data[3].name
            localStorage.setItem("token" ,tokenValue);
            localStorage.setItem("role" ,roleValue);
            localStorage.setItem("username" ,usernameValue);
            localStorage.setItem("name" ,nameValue);
            history.push('/userdashboard');
            
            }
            else if(res.data.status === true&&res.data.data[1].role===2){
                const tokenValue = res.data.data[0].token
                const roleValue = res.data.data[1].role
                const usernameValue = res.data.data[2].email
                const nameValue = res.data.data[3].name
                localStorage.setItem("token" ,tokenValue);
                localStorage.setItem("role" ,roleValue);
                localStorage.setItem("username" ,usernameValue);
                localStorage.setItem("name" ,nameValue);
                history.push('/deliver');
                
                }
            else{
                alert(res.data.message);
            }
        })
    }
   
    return(
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6 offset-md-3">
                        <h4>Login</h4>
                        <form>
                            <div className="form-group">
                                <label for="name">Username</label>
                                <input type="text"className="form-control" name="name" placeholder="Enter Your Name" autoComplete="off" onChange={usernameChange}></input>
                            </div>

                            <div className="form-group">
                                <label for="name">Password</label>
                                <input type="password"className="form-control" name="password" placeholder="Enter Your Address" autoComplete="off" onChange={passwordChange} ></input>
                            </div>

                             <div className="form-group">
                                <Button variant="success" type="submit" className="form-control" onClick={submitData}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
    
}
export default Login;