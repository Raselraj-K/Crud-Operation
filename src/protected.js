import React, { useEffect } from 'react';
import {BrowserRouter , Route,Switch,useHistory} from 'react-router-dom';
function Protected(props){
    let Cmp = props.Cmp
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history.push('/');
        }
    })
    return(
        <div>
            <Cmp/>
        </div>
    )
}
export default Protected;