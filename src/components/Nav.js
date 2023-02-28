import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>400){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' style={{width:'180px'}}/>
    </div>
  )
}

export default Nav