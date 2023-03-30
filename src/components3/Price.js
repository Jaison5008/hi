
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../components/App.css' 
import Base from '../components/Base';
function ListGroupWithHeaderExample() { 
    
  return (   
    <Base thead=' PRICE CHAT' tstyle='headstyle' footer='foot2' children={
    <div className='Home'>
  
    <Card style={{ width: '18rem', height:"16rem" }}>
      <Card.Header>Ticket</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> Group A -500₹</ListGroup.Item>
        <ListGroup.Item>Group B -500₹</ListGroup.Item>
        <ListGroup.Item>Group C -500₹</ListGroup.Item> 
        <ListGroup.Item>Group D -500₹</ListGroup.Item> 
        <ListGroup.Item>Group E -500₹</ListGroup.Item> 
        
        
         
      </ListGroup>
    </Card>
    </div> 
    }> 
    </Base>
  );
}

export default ListGroupWithHeaderExample;