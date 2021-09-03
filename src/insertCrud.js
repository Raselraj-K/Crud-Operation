import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';
const Insertcrud = ()=>{
    const [data, setData] = useState({
        name : "",
        designation : "",
        salary : ""
    }) 
    const nameChange = (event)=>{
       const nameVal  = event.target.value
        setData({
            ...data,name : nameVal
        })
    }

    const designationChange = (event)=>{
        const designationVal = event.target.value
        setData({
           ...data,designation : designationVal
        })
    }

    const salaryChange = (event)=>{
        const salaryVal = event.target.value
        setData({
            ...data,salary : salaryVal
        })
    }
    const submitData  = ()=>{
        const value1 = data.name;
        const value2 = data.designation;
        const value3 = data.salary;
        axios.post('http://localhost:8000/insertData/',{
            key1 : value1,
            key2 : value2,
            key3 : value3,}).then(res=>{
        console.log(res.data);
        setData({
            name : "",
            designation : "",
            salary : ""
        })
    })
    }
    
    return(
        
        <div>
        <form  noValidate autoComplete="off">
        <TextField label="Name" onChange = {nameChange}/>
        <TextField label="Designation" onChange = {designationChange}/>
        <TextField label="Salary" type = "number"  onChange = {salaryChange}/><br></br>
        <Button color="primary" onClick = {submitData}>Register</Button>
        </form>
    </div>
    )
}
export default Insertcrud;