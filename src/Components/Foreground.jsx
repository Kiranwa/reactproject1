import React, { useRef } from 'react'
import Cards from './Cards'


const Foreground = () => {
  
  const ref = useRef(null);

  const data =[
    {
      desc : "Air Jordan: A popular line of shoes designed for basketball, named after Michael Jordan.",
      price : "$180 USD",
      icon : true,
      progbar : {isOpen : true, color : " bg-red-200 ", value : 70},


    },

    {
      desc : "Nike Air Max 1: A line of shoes that features visible air units in the sole for added cushioning and comfort.",
      price : "$160 USD",
      icon : true,
      progbar : {isOpen : true, color : " bg-pink-400 ", value : 90 },


    },
    
    {
      desc : "Nike Air Zoom Flight: A line of shoes that features Zoom Air technology for added cushioning.",
      price : "$129USD",
      icon : true,
      progbar : {isOpen : true, color : " bg-blue-300 " , value : 60},


    }
  ]

  return (
    < div ref={ref} className=" top-0 left-0 fixed z-[3] h-screen w-full flex" > 
       {data.map((item, index) =>(
          <Cards data = {item} reference={ref} />
          
       ))} 
      
      
    </div>
  )
}

export default Foreground