import React, { useState } from 'react'

const Events = () => {
    let [name,setname]=useState('click me')
    let [bg,setbg]=useState('purple')

    return (
        <div style={{background:bg}}>
           <button onClick={()=>{setname('you just clicked once')
           setbg('red')}} 
           onDoubleClick={()=>{setname('you clicked double')
           setbg('black')}}>{name}</button>
           <button onClick={()=>{setname('click me')
           setbg('transparent')}}>reset</button>
        </div>
    )
}
export default Events
