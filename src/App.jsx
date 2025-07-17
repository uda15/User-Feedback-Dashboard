import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feddbakform from './componunts/feddbakform'
import Feedbakcard from './componunts/feedbakcard'
import Feedbaklist from './componunts/feedbaklist'

function App() {
 
  const [fatchdata,setdata]=useState([])

  function fetchdata()
  {
    fetch("http://localhost:3000/products")
    .then((res)=>res.json())
    .then((data)=>{
       FormData && setdata(data)})
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchdata();
  },[])

 
  return (
    <>
    <Feddbakform/>
    <hr />
   <br />
    <div>
      {
        fatchdata.map((el)=> <Feedbakcard name={el.name} email={el.email} maseg={el.body}  />)
      }

    </div>
     </>
    
  

    
  )
  
}

export default App
