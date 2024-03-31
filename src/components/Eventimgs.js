import React from 'react'
import img_1 from './assets/images/pici.jpg'

function Eventimgs() {
  const arr = [img_1,img_1,img_1,img_1];
  
    return (
    <div className='eve-imgs'>
      {arr.map((img_ele)=>{return <img src={img_ele}/>})}
    </div>
  )
}

export default Eventimgs
