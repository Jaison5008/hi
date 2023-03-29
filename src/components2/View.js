import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 import Base from "./Base"; 
 import './App.css'
 const View=({view})=>{  
    //console.log(props)  
    const history=useNavigate()
return(  

   <Base thead=' VIEW CONTECTS  -  india vs pakistan' tstyle='headstyle' footer='foot'children={ 
      <div>
   <div className="bh" style={{gap:'20px'}}> 
    <Button onClick={()=>history('/Save1')}>save</Button> 
    <Button onClick={()=>history('/Add1')}>add</Button>  
    <Button onClick={()=>history('/')}>Home</Button> 
    </div>
    <div className="viewcard">
  <h1>EMAIL    :{view.email}</h1>
  <h1>Ticket   :{view.password }</h1>
   </div> </div>}> 
   </Base>
   ) 




} 
export default View;