import React from 'react'

const LanguageCard = () => {
  return (
    <>
    <div style={{width:"50%"}} >
        <h1 className='text-2xl font-semibold mb-7'>Coding Languages</h1>
        <div className='flex flex-col gap-3 text-start'>

            <div>
                <p>HTML 85%</p>
                <div style={{width:"80%", height:"10px", overflow:"hidden"}} className=' rounded-xl bg-gray-800'>
                    <div style={{width:"85%", backgroundColor:"#ffd36b", height:"100%"}} className=' rounded-xl'>

                    </div>
                </div>
            </div>

            <div>
                <p>CSS 90%</p>
                <div style={{width:"80%", height:"10px", overflow:"hidden"}} className=' rounded-xl bg-gray-800'>
                    <div style={{width:"90%", backgroundColor:"#ffd36b", height:"100%"}} className=' rounded-xl'>

                    </div>
                </div>
            </div>

            <div>
                <p>JavaScript 80%</p>
                <div style={{width:"80%", height:"10px", overflow:"hidden"}} className=' rounded-xl bg-gray-800'>
                    <div style={{width:"80%", backgroundColor:"#ffd36b", height:"100%"}} className=' rounded-xl'>

                    </div>
                </div>
            </div>

            <div>
                <p>JAVA 70%</p>
                <div style={{width:"80%", height:"10px", overflow:"hidden"}} className=' rounded-xl bg-gray-800'>
                    <div style={{width:"70%", backgroundColor:"#ffd36b", height:"100%"}} className=' rounded-xl'>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style={{width:"50%"}}>
       <h1 className='text-2xl font-semibold mb-7'>Human Languages</h1>

       <div className='flex flex-col gap-3 text-start'>
       <div>
                <p>HINDI 99%</p>
                <div style={{width:"80%", height:"10px", overflow:"hidden"}} className=' rounded-xl bg-gray-800'>
                    <div style={{width:"99%", backgroundColor:"#ffd36b", height:"100%"}} className=' rounded-xl'>

                    </div>
                </div>
            </div>

            <div>
                <p>ENGLISH 80%</p>
                <div style={{width:"80%", height:"10px", overflow:"hidden"}} className=' rounded-xl bg-gray-800'>
                    <div style={{width:"80%", backgroundColor:"#ffd36b", height:"100%"}} className=' rounded-xl'>

                    </div>
                </div>
            </div>


       </div>
    </div>
    </>
  )
}

export default LanguageCard
