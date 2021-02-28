
import React, { useState } from 'react'

const Digitalclock = () => {
    let stat=useState(new Date().toLocaleTimeString())
    let[ctime,set]=stat

    const updatetime=()=>{
        ctime=new Date().toLocaleTimeString();
        set(ctime);
    };
    setInterval(updatetime,1000)
    return (
        <div>
            <h1>Digitalclock </h1>
           <h2>{ctime}</h2>
        </div>
    )
}

export default Digitalclock
