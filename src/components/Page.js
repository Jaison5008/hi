import React  from "react"; 
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Base from "./Base";
function Page() { 
const history=useNavigate();

   return(
   
   <Base thead=' PRE BOOKING OPEN ' tstyle='headstyle' footer='foot'children={ 
    
   <div className='Home'> 
   <div className="bh" style={{gap:'20px'}}><Button onClick={()=>history('/Save')}>Match-1</Button> 
        <Button onClick={()=>history('/Save1')}>Match 2</Button> 
        </div> 
 < Card border="secondary" style={{width: '18rem',height:'12rem'}} >
        <Card.Header>match 1</Card.Header>
        <Card.Body>
          <Card.Title>india vs Australia</Card.Title>
          <Card.Text>
            chennai 
          </Card.Text> 
          <Button onClick={()=>history('/Add')}>Book</Button>
        </Card.Body>
      </Card> 
      < Card border="secondary" style={{width: '18rem',height:'12rem' }} >
        <Card.Header>match 2</Card.Header>
        <Card.Body>
          <Card.Title>india vs pakistan</Card.Title>
          <Card.Text>
            Banglore
          </Card.Text> 
          <Button onClick={()=>history('./Add1')}>Book</Button>
        </Card.Body>
      </Card> 
      
      
      </div>}></Base>
   ) 
} 
export default Page;