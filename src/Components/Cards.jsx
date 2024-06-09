import React from 'react'
import { SiNike } from 'react-icons/si';
import { SiJordan } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import { motion } from "framer-motion"

const Cards = ({data , reference}) => {
  return (
    <> 
    
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative  px-2 py-1  w-[14vw] h-[18vw] bg-slate-900 rounded-[16px] mt-9 ml-6 overflow-hidden'>
            <SiNike  className=' text-green-500 font-medium text-[7vh] px-0 py-0 mr-2 flex float-end' />
             <p className=' text-green-300 text-[11px] lead mt-5 '>{data.desc} </p>
            <div className='   footer absolute bottom-0 w-full text-white font-bold text-[2vh] left-0 '>  
                <div className='pt1 flex items-center justify-between mb-1 px-2 py-1 '> 
                   <h5 className=' text-[10px] font-semibold  '> {data.price} </h5>  
                   
                   <span> 
                        {data.icon ? <SiJordan className=' text-[14px] ' /> : <GiConverseShoe className /> }
                    
                    </span>
                </div>
                    {data.progbar.isOpen && (
                        <div className= {`progbar  px-4 bg-${data.progbar.color}-400 w-full items-center justify-center py-2`}  >
                            <progress  className='  bg-black text-[4px] w-4/5 '  max= "100" value ={data.progbar.value} >100% </progress>
                                
                        </div> 
                    )}
                    
                    
                
            </div>
        </motion.div>
   
    </>
  )
}

export default Cards