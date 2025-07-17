import React from 'react'
import Feedbakcard from './feedbakcard'
import Feddbakform from './feddbakform'
import App from '../App'

const Feedbaklist = () => {
  return (
   <>
  <div>

   <Feedbakcard name={el.name} email={el.email} maseg={el.body}  />
<h1>feddbake list </h1>



   </div>
   
   
      </>
  )
}

export default Feedbaklist