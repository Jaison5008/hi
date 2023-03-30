import './App.css'; 

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Page from './Page';
import Add from './Add';
import {   Routes, Route } from 'react-router-dom'; 
import Save from './Save'; 
import { useEffect, useState } from 'react';
//import Data from '../data/newdata.js';
import View from './View'; 
import { useNavigate } from 'react-router-dom'; 
import Edit from './Edit';
//import { Navbar } from 'react-bootstrap'; 
import Ground from '../components3/ground';
import Price from '../components3/Price';
function App() {  
 const [point,setPoint]=useState([]); 
 const [view,setView]=useState([]);  
 const [id,setId]=useState('');   
 const history=useNavigate('')  

 
useEffect(()=>{ 
const points=async()=>{  
  try{
  const response= await fetch("https://64117ea563cb211e7e10a31d.mockapi.io/user",{method:"GET"})
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
    const response= await fetch("https://64117ea563cb211e7e10a31d.mockapi.io/user", 
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
 
 

  
  const update= async (index, jai)=>{    
    
    
    
        
    try{ 
      const response= await fetch( `https://64117ea563cb211e7e10a31d.mockapi.io/user/${jai.id}/` , 
     {method:"PUT",body:JSON.stringify(jai),headers:{"Content-Type":"application/json"}})
      
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
    const response=  await fetch(`https://64117ea563cb211e7e10a31d.mockapi.io/user/${id}`,{method:"Delete"}) 
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
    
      <Routes>  

        <Route exact path='/'  element={<Page/>}/>                                                       
        <Route exact  path='/Add' element={<Add point={point} adduser={adduser}/>}/>
         
         <Route exact path='/Save' element={<Save Spoint={point} deletes={deletes} Views={Views} edit={edit} />}/> 
         <Route exact path='/Edit' element={<Edit point={point} id={id} update={update}/>}/>
         
        <Route exact path='/View' element={<View view={view}/>}/> 
        <Route exact path='/Ground' element={<Ground />}/> 
        <Route exact path='/Price' element={<Price/>}/>
        
      </Routes>
     
  );
}

export default App; 


