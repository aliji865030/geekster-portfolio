import React from 'react'

const ActivityCard = ({img ,heading,para}) => {
  return (
    <div className=' relative bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl py-5 px-5' style={{width:"41%"}}>
      <img src={img} className=' absolute h-20 w-20 bottom-20' alt="" />
      <div>
        <h1 className='text-xl pb-4'>{heading}</h1>
      </div>
      <div>
        <p className='text-sm text-gray-300'>
            {para}
        </p>
      </div>
    </div>
  )
}

export default ActivityCard
