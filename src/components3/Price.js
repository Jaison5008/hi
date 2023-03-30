
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../components/Base' 
import Base from '../components/App.css';
function ListGroupWithHeaderExample() { 
    
  return (   
    <Base thead=' PRICE CHAT' tstyle='headstyle' footer='foot2' children={
    <div className='Home'>
    
    <Card  style={{ width: '18rem',height:"16rem" }}>
      <Card.Header >Ticket price</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Group A 500₹</ListGroup.Item>
        <ListGroup.Item>Group B 1500₹</ListGroup.Item>
        <ListGroup.Item>Group C 2500₹</ListGroup.Item> 
        <ListGroup.Item>Group D 3500₹</ListGroup.Item> 
        <ListGroup.Item>Group E 4500₹</ListGroup.Item> 
        
        
         
      </ListGroup>
    </Card>
    </div> 
    }> 
    </Base>
  );
}

export default ListGroupWithHeaderExample;