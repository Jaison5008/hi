import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  
import Base from "./Base";  
import './App.css' 

 function Save({edit ,Spoint,deletes,Views}){  
    const history=useNavigate()  
 
   
return( 
       <Base thead=' SAVE CONTECTS  -  India vs pakistan' tstyle='headstyle'footer='foot' children={ 
        
       <div> <div className="bh" style={{gap:'20px'}}><Button onClick={()=>history('/Add1')}>add</Button>  
       <Button onClick={()=>history('/')}>Home</Button> 
       </div> 

        {Spoint.map((ell,index)=>{return (<div style={{margin:'5px 25px',borderRadius: '5px',display:'flex', 
        justifyContent:'space-around',textAlign:'center', alignItems:'center',border:'1px solid blue', borderLeft:'5px solid blue'}} key={index}>  
       
        <div style={{fontWeight:'bold'}}>{(ell.email)} </div>
        <div style={{fontWeight:'bold'}}>{(ell.password)}</div>

        <div style={{ margin:'20px 0',display:'flex' ,fontWeight:'bold', gap:'20px'}}>
       
        <Button onClick={()=>deletes(ell.id)}>delete </Button> 
        <Button onClick={()=>Views(ell)} >view</Button>  
        <Button onClick={()=>{edit(ell.id); history('/Edit1')}}>edit</Button>  
         </div>
        </div>)})} 
         </div>}>
    </Base>)
      } 
export default Save;