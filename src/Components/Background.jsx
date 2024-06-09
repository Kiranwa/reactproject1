import React from 'react'

const Background = () => {
  return (
    <>
    <div className=' fixed z-[2] w-full h-screen'>
        <div className=" absolute w-full flex justify-center italic items-center text-xl font-bold mt-4">
            NIKE.
        </div>
        <h1 className=" h-[30vh] w-[18vw] absolute text-black  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] object-cover text-[8vw] italic  font-semibold">
            <img src="https://i.pinimg.com/736x/4c/c1/43/4cc14326a0c1ee4e27664c693b63e046.jpg" alt="" />
            
        </h1>
    </div>

    </>
  )
}

export default Background