import './App.css'; 

import 'bootstrap/dist/css/bootstrap.min.css'; 

import Add from './Add';
import {   Routes, Route } from 'react-router-dom'; 
import Save from './Save'; 
import { useState ,useEffect} from 'react';

import View from './View'; 
import { useNavigate } from 'react-router-dom'; 
import Edit from './Edit';

function App() {  
 const [point,setPoint]=useState([]); 
 const [view,setView]=useState([]);  
 const [id,setId]=useState('');
 const history=useNavigate() 


  useEffect(()=>{ 
const points=async()=>{  
  try{
  const response= await fetch("https://64117ea563cb211e7e10a31d.mockapi.io/user2",{method:"GET"})
   const data= await response.json(); 
   setPoint(data); 
  } 
  catch(error){ 
    console.log(error);
  } 
  
} 
points();
},[])

  const adduser= async(user)=>{   
   
    
   try{
    const response= await fetch("https://64117ea563cb211e7e10a31d.mockapi.io/user2", 
    {method:"POST",body:JSON.stringify(user),headers:{"Content-Type":"application/json",}})
    const data= await response.json() 
    
    setPoint([...point,data])
    } 
    catch(error){ 
     console.log(error)
    }
  }  
  const edit=(el)=>{  
   setId(el)

  }    
 
   const update= async (index, jai2)=>{    
    
    try{ 
      const response= await fetch( `https://64117ea563cb211e7e10a31d.mockapi.io/user2/${jai2.id}` , 
     {method:"PUT",body:JSON.stringify(jai2),headers:{"Content-Type":"application/json"}})
      console.log(jai2)
        const datas= await response.json();
       console.log(datas)
       
          
     setPoint (point[index]=datas);
      setPoint([...point])  
    
    }
    catch(error){ 
     console.log(error)
    
    }
   

  }
  
 const deletes= async (id)=>{   
    //console.log(email)  
    try{
    const response=  await fetch(`https://64117ea563cb211e7e10a31d.mockapi.io/user2/${id}`,{method:"Delete"}) 
    const data = await response.data; 
         console.log(data)
    const afterremove= point.filter((point,index)=>{ return(point.id!==id)}); 
    
    setPoint(afterremove); 
    } 
    catch(error){ 
      console.log(error)
    }
}   
const Views=(el)=>{  

setView(el) 
 
history('/View')
}  

return ( 
    <div>  
      <Routes>  
         <Route path='/Add1' element={<Add point={point} adduser={adduser}/>}/>
         <Route path='/Save1' element={<Save Spoint={point} deletes={deletes} Views={Views} edit={edit} />}/> 
         <Route path='/Edit1' element={<Edit point={point} id={id} update={update}/>}/>
         <Route path='/View1' element={<View view={view}/>}/>
      </Routes>
      
    </div>
     
  );
}

export default App; 


