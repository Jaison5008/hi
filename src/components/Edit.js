import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Base from './Base';
import './App.css'  
//import { useParams } from 'react-router-dom'; 

 
function Edit({point ,update,id}) {   
  const history=useNavigate()
  const [emails, setEmail]=useState(''); 
  const[TicketCount,setTictet]=useState('');
   
  const ss=point.find((e)=> {return (e.id===id)});
   const index=point.findIndex((e)=>e.id===id)

useEffect(()=>{ 
  setEmail(ss.email); 

  setTictet(ss.password);  
  
 //setId(id);
},[ss.email,ss.password]) 

const jai={ 
  email:emails,
  password:TicketCount ,  
  id:id,

  
}  
 
 

  return (  
    
     
     
     
     
    <Base thead='EDIT CONTECTS  -   India vs Australia' tstyle='headstyle'footer='foot' children={
    <div className='Home2'>  
    <div className='bh' style={{gap:'20px'}}>
    <Button   onClick={()=>history('/Save')} >SAVE</Button>  
    <Button   onClick={()=>history('/')} >Home</Button>
    </div>
    <Form > 
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={emails} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ticket Count</Form.Label>
          <Form.Control type="text" placeholder="TicketCount" name='TicketCount'value={TicketCount} onChange={(e)=>setTictet(e.target.value)}/>
        </Form.Group>
      </Row> 
      

      <Button variant="primary" type="submit" onClick={()=>{history('/Save');update(index,jai)}}  >
        UPDATE
      </Button></Form> 
      </div>}>
      </Base>
   
  );
}

export default Edit;