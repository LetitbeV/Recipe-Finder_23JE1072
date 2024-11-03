import React from 'react'
import Dish_card from '../Components/dish_card'
import './favouritePG.css'


const favouritePG = () => {
    
    // localStorage.key(index)
    let saved_name=[];
    let saved_url=[];
    let saved_img=[];
    for (let idx = 0; idx < localStorage.length; idx++) {
        saved_name=[...saved_name,localStorage.key(idx)]
        let temp = localStorage.getItem(localStorage.key(idx)).split("^");
        // console.log(temp);
        saved_url=[...saved_url,temp[0]]
        saved_img=[...saved_img,temp[1]]
    }
    console.log(saved_name)
    console.log(saved_img)
    console.log(saved_url)
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Handlee&family=Pacifico&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
     
            <h2 className='favHeader'>Favourites</h2>
            <div className='favParent'>
            {saved_name.map((sName,idx)=>{
                console.log(`sName=${sName}, idx=${idx}`);
                return <Dish_card dish_img={saved_img[idx]} dish_name={saved_name[idx]} dish_url={saved_url[idx]} />
            })
            }
            </div>

        </div>
    )
}

export default favouritePG