import React from 'react'

const Card = ({img,heading,para}) => {
  return (
    <div className='flex bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl p-5' style={{width:"48%", color:"#fafafa"}}>
      <div style={{width:"20%"}}>
        <img src={img} alt="" className='h-12 w-12' />
      </div>
      <div style={{width:"80%"}}>
        <h1 className='text-xl font-semibold text-start'>{heading}</h1>
        <p className='text-md text-gray-300 text-start'>{para}</p>
      </div>
    </div>
  )
}

export default Card
