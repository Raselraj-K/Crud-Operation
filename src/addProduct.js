import { useEffect, useState } from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import axios from 'axios';
import AdminDashboard from './adminDashboard';
function AddProduct(){
    const [pname, setPname] = useState({
        pnames : "",
        
    })
    const pnameChange=(event)=>{
        const pnameValue = event.target.value
        setPname({
            ...pname,pnames : pnameValue
        })
    }
    const submitProduct=(event)=>{
        event.preventDefault();
        const pnamesValue = pname.pnames;
        axios.post('http://localhost:8000/api/addproduct',{
            productKey : pnamesValue
        }).then(res=>{
            alert(res.data.message);
        })
    }
    return(
        <div>
            <AdminDashboard/>
        <div className="container">
             <div className = "row">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label for="name">Product Name</label>
                                <input type="text"className="form-control" name="name" placeholder="Enter Your Product Name" autoComplete="off" onChange = {pnameChange}></input>
                            </div>

                            <div className="form-group">
                                <Button variant="success" type="submit" className="form-control" onClick={submitProduct}>Add</Button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </div>
            
    )
    
}
export default AddProduct;