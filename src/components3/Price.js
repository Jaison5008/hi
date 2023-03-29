
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
 import Base from '../components2/Base';


function ListGroupWithHeaderExample() { 
    
  return (   
    <Base thead=' Ticket price List ' tstyle='headstyle' footer='foot'children={
    <div className='Home'>
    
    <Card   style={{ width: '18rem',height:"16rem" }}>
      <Card.Header >Ticket Price</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>500  ₹</ListGroup.Item>
        <ListGroup.Item>1000 ₹</ListGroup.Item>
        <ListGroup.Item>2000 ₹</ListGroup.Item> 
        <ListGroup.Item>3000 ₹</ListGroup.Item> 
        <ListGroup.Item>4000 ₹</ListGroup.Item> 
        
        
         
      </ListGroup>
    </Card>
    </div> }></Base>
    
    
  );
}

export default ListGroupWithHeaderExample;