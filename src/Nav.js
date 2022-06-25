import React, { useState,useEffect } from 'react';
import "./Nav.css"; 

function Nav() {
const [show, handleShow ] = useState(false);

const transitionNavBar =() => {
    if(window.scrollY > 100){
        handleShow(true);  
    }else  {
        handleShow(false);
    }
     
}
useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return()=> window.removeEventListener("scroll",transitionNavBar);
},[])
    
  
  
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'></div>
         <img 
         className='nav__logo'
          src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
         alt=''
         />

         <img 
         className='nav__avatar'
          src='https://www.nicepng.com/png/detail/115-1150032_avatar-logo-png-avatar-movie-logo-png.png' 
          alt=''
          />
            
           
        </div>
    )
}

export default Nav
