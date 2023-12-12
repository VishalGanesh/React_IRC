import React from 'react'
import { useState } from 'react'

const StateEx=()=>{
    const[visible,setVisible]=useState(true);


const toggle =()=>
{
    setVisible(!visible)
}

setTimeout(()=>{
    setVisible(false)
},5000)
return(
    <>
    {visible?(
            <div className='Card-wrapper'>
                <div className='Card'>
                    <p className='cookieHead'>We use Cookies</p>
                    <p className='cookieDescription'>This website uses cookies to ensure you get the best experience</p>
                    <div classNmae="buttonContainer">
                        <button className="acceptButton" onClik={toggle}>Allow</button>
                        <button className="declineButton" onClik={toggle}>Decline</button>
                    </div>
                </div>
            </div>
        ) :(
            <button onClick={toggle}>
                Manage cookies
            </button>
        )
    }
    </>
   
)
}

export default StateEx