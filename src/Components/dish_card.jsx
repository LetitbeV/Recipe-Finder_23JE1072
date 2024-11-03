import React from 'react'
import Fav from '../assets/favorite.svg'
import ShowMore from '../assets/expand_circle_show_more.svg'
import './dish_card.css'
// import Favourites from './favourites'
import './favourites.css'
import { useState } from 'react'


const dish_card = ({dish_img,dish_name,dish_url,dish_key}) => {

  const fstchk=(localStorage.getItem(dish_name)==null)?false:true;
  const [isChecked, setIsChecked] = useState(fstchk);
  // const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = async() => {
    let temp=await setIsChecked(!isChecked);
    if(!isChecked){
      // console.log('checked yes')
      localStorage.setItem(dish_name,`${dish_url}^${dish_img}`) //this ^ will be used further as deconstructor
    }
    else{
      localStorage.removeItem(dish_name)
    }
    console.log("localStorage.length: ")
    console.log(localStorage.length)
  }
  
  return (
    <div className='cardWrapper'>
        <img src={dish_img} alt="IMAGE NOT FOUND" className='dishImg' />
        <div className="d_name">{dish_name}</div>
        {/* <Favourites key={dish_key}/> */}
        {/* <img src={Fav} alt=""  className='fav'/> */}
        <input
        type="checkbox"
        id={`like${dish_url}`}
        className='fav-chkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {/* {console.log("dish_url: ")}
      {console.log(dish_url)} */}
      <label htmlFor={`like${dish_url}`}>
        <svg
          className={`heart ${isChecked ? 'checked' : ''}`}
          xmlns={Fav}
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </label>


        
        {/* <div className='s_more'>Show More <span><img src={ShowMore} alt="span image missing" className='s_more_svg' /></span></div> */}
        <div className='s_more'><a href={dish_url}>See Full Recipe</a></div>

    </div>
  )
}

export default dish_card