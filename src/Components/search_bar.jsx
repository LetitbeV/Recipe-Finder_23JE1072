import { map } from 'jquery'
import React from 'react'
import "./search_bar.css"
import fetch_data from '../utils/FetchData'
import { useState } from 'react'
import DishCard from './dish_card'
import axios from 'axios'
import Search from'../assets/search_24dp.svg'

const cuisines=["American","Asian","British","Caibbean","Central Europe","Chinese","Eastern Europe","French","Indian","Italian","Japanese","Kosher","Mediterranean","Mexican","Middle Eastern","Nordic","South American","South East Asian"]

// let data=fetch_data('Pasta','Italian');
// console.log("checkin this damn data: ")
// console.log(data)

const dispCards=(data1)=>{
  console.log(data1)
  console.log('flag1')
  if(data1.hits.length>0){
  data1.hits.map((dsh,index)=>{
    <DishCard 
    dish_img={dsh.recipe.image}
    dish_name={dsh.recipe.label}
    />})
  }
}


const search_bar = () => {
  // let [data,setData]=useState({hits:[]})
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine ] = useState('world')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  
  
  const APP_ID = '7d720594'
  const APP_KEY = '9ed72480638e686dcf6a7095de4532df'

  const getRecipes = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&cuisineType=${cuisine}`
      )
      setRecipes(response.data.hits)
    } catch (error) {
      console.error('Error while axios loading(chk it):', error)
    } finally {
      setLoading(false)
    }
  }
  const handleSearch=(e)=>{
    e.preventDefault()
    getRecipes()
  }




  return (
    <div className='form-wrapper'>
        {/* adding fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Handlee&family=Pacifico&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
     
        <div className='inputArea'>
          <h2 className='askQuery'>So what's Cookin' today?</h2>
          <form action="" onSubmit={handleSearch} className='queryForm'>
              <input name='srch' id='srch' type="search" placeholder={`Search `} value={query} onChange={(e)=>setQuery(e.target.value)}/>
              <br />
              
              <label htmlFor="cuisine" className='cuisine' id="cuisineLabel">Select Cuisine:</label>
              <select name="cuisine" id="cuisine" className='cuisine' onChange={(e)=>setCuisine(e.target.value)}>
                  <option key="-1" value="world">world</option>
                  {
                  cuisines.map((csne,index)=>(
                      <option key={index} value={csne}>{csne}</option>
                  ))}
              </select>
              <br />
              <button type='submit' className='search-btn'>Search</button>
              {/* <button className="srch-btn" onClick={(e)=>{
                e.preventDefault()
                let dish=document.getElementById("srch").value
                let cuisine=document.getElementById("cuisine").value
                
                console.log(dish)
                console.log(cuisine)
                // let datas=fetch_data(dish,cuisine);
                // console.log(`datas: `)
                // console.log(datas)
                // setData(fetch_data(dish,cuisine))
                // setData(datas)
              }}>Search</button> */}
          </form>
        </div>

            {loading?(<p className='loading'>loading..</p>):(
              <div className="dishes">
                {
                  recipes.map((recipe, index) =>{ 
                    if(recipes.length==0){
                      return( <p>No Dishes Found, Try any other combination</p>)
                    }else{
                    return(
                    <DishCard key={index} 
                    dish_img={recipe.recipe.image} 
                    dish_name={recipe.recipe.label}
                    dish_url={recipe.recipe.url}
                    />
                  )}})
                // dispCards(data)
                // data.hits.map((dsh,index)=>{
                //   <DishCard 
                //   dish_img={dsh.recipe.image}
                //   dish_name={dsh.recipe.label}
                //   />})
                }          
              </div>
            )}
    </div>
  )
}

// export let DataExp=data;
export default search_bar
// export data;