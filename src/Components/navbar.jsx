import React from 'react'
import rflogo from '../assets/logo31.png'
import menu_tg from '../assets/menu.svg'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import './navbar.css'

const navbar = () => {
  return (
    <div id="nvbr" className='navbar'>
    
      <div className='nvbr-brand'>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>

        <img src={rflogo} alt="unable to disply image" />
        <div className='LogoName'>Recipe Finder</div>
      </div>

      <button className='toggler-btn' onClick={()=>{
        // console.log("clicked")
        const nLinks=document.querySelector("#nvbr-links");
        // if(nLinks.className=='nvbr-links'){
        //   nLinks.className+="-responsive"
        // }
        // else{
        //   nLinks.className=='nvbr-links'
        // }
        // console.log(`nLinks.style.display:${nLinks.style.display}`)
        if(nLinks.style.display=='block') nLinks.style.display='none';
        else nLinks.style.display='block';
      }}>
        
        <img src={menu_tg} alt="" />
      </button>
      <ul className='nvbr-links' id='nvbr-links'>
        <li><a href="">Home</a></li>
        <li><a href="">Favourites</a></li>
      </ul>
    </div>
  )
}

export default navbar