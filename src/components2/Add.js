import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Base from './Base';
import './App.css'  


function GridComplexExample(props) {   
  const history=useNavigate()
  const [email, setEmail]=useState(''); 
  const[password,setPassword]=useState('');
  const additem={ 
    email, 
    password,
   }
   
    const Add=(e)=>{   
       
     
    props.adduser(additem); 

   history('/Save1');

    }  
   
  
    
  return (  
    
     
     
     
     
    <Base thead='ADD CONTECTS  india vs Pakistan' tstyle='headstyle'footer='foot' children={
    <div className='Home2'>  
    <div className='bh' style={{gap:'20px'}}>
    <Button   onClick={()=>history('/Save1')}>SAVEE</Button> 
    <Button   onClick={()=>history('/')}>Home</Button>
    </div>
    <Form > 
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ticket Count</Form.Label>
          <Form.Control type="text" placeholder="Ticket Count" name='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
      </Row> 
      

      <Button variant="primary"type="submit" onClick={Add}>
        Submit
      </Button></Form> 
      </div> }>
      </Base>
   
  );
}

export default GridComplexExample;