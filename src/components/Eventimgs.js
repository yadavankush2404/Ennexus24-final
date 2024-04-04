import React from 'react'
import img_1 from './assets/images/pici.jpg'
import img_2 from './assets/images/m.jpg'
import img_3 from './assets/images/o.jpg'
import img_4 from './assets/images/c.jpg'


function Eventimgs() {
  const arr = [img_1,img_2,img_3,img_4];
  
    return (
      <>
      <h1 className='text-center'>Glimpses of the Event</h1>
    <div className='eve-imgs'>
      {arr.map((img_ele)=>{return <img src={img_ele}/>})}
    </div>
      </>
  )
}

export default Eventimgs
