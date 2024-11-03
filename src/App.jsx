import React from 'react'
import Navbar from './Components/navbar'
import Search_bar from './Components/search_bar'
import Dish_card from './Components/dish_card'
import './App.css'
// import { DataExp } from './Components/search_bar'
import Dishes from './Components/dishes'
// import NavbarBs from './Components/NavbarBs'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import FavouritePG from './pages/favouritePG'


const App = () => {
  
  // function dishDispFn(dishImg,dishName){
  //   return(
  //   <Dish_card 
  //   dish_img={dishImg}
  //   dish_name={dishName}/>
  //   )}
  let DI="https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIQCXGMnV6drE3hKE8n1sGQs4GbDJyDzL%2BE5pSXz78FvAhAIgeQDIB5qiDEptUt3EFxKyVnmEvFuVYHEX2Zh2SXYpxG8qwgUIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDLY3JIFlaN1oThI8OCqWBZuMU3Fp0WgmFQXMCaxMYDdrQoK9qPELIqLJr6fcK1E%2B4vTY2vDEreak1rbK2vhanyZ%2BpwV2AExM0WBnnwmbz7Bdy%2BMDvupum9%2B95jL%2BNUVNqvlRM%2FNADlp9RrwovnRFxuyAP3oa1bV3lY0%2Bm8Tvyo68R3%2FV39NB7AWPEk9t06ScbihQzCiTB6wAbVjyQYys1sMqptzcyTvmv7UvufayreN7vmZAm%2BRK5Bh26fT%2FD4Ylb29PvCCO7deFYfgQZLGkaeNl9jQhar1POh76CWluvevaecxiCBRLZqwN2mNHpinozFGGa8Cx8eFicflzwj4IB8jJ4sdRLR1uM%2FL3GO%2FqRHwlnJD44rJMNtnO3jmwBj7CB%2BVRgBV2SfEq5606gWFRbmxgZ%2BGvk%2B2i41W6Lo6exJ0UOy0FYX7gvWGIf7IL61WjyNzC5tlpEf5WjJNVKQ2SIoiFZotLDnnWx%2Fm6N3hIMXAZypwb2hyFB9ta%2Bybkmy7yJn1su6MZh8xztWa2Zg05Wx5IO2ePZ5NGJ6Kij%2BkIn5VokB%2F%2FLefgPsDFXO5sxabYIzKE8SLEr8VIxNuGwpXVw1jyANWMRYZPs1E9EePuKgGUp1IMOl%2Fe4IR%2FRqhkvgzUg0AXTQzstfB%2BSdfaMWPDMijEgPuLubh%2FLkeyy7YCcZtVVibkIC9mM3wbHWIRGqqI4reEZeaNe3Ym0UGAphoBoSkm%2FeHH5%2FS5ZpBv9MD1QQJbMidTgf5e8b9PBC%2FvpM2cGDgoRwi%2Fr7YyKZfYCDRFkGTEGEpa0RRy4q231WnJ4IlXlJlb7WqdEEV2nmFhr2y06NtB5dgHX2NvauI1FF0o65ejYohUYi5wCQPjm3he03gIweZPUHAKuHFCsPV%2Fpr4M1ozGDTJ3MMS7lLkGOrEBIxTwcna3ei74imW9rA30WMk6PoaYOnYGfZmou44zxa1GHPmMRWAzalRw4e6w1DDa90JO30lO9w%2Ftka7N4PTm%2FZG84Wfp2VN51nXMRBcmM728ymDsKJjIcmxU6kcNm%2BREYHW2X3jicEefxf%2FOTNP%2B3dyr0kdYgu2phD3KK8KEYVUJFgK6lq9q2tzYTg%2Bwe%2FXCepI0sfGwW23XfMh6qdKiC0gUqnN%2BbjuIrZIKFNWMhgrZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241101T192006Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKIKBMHFU%2F20241101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18909aeade1e07c83ffe5aea0c06aa4c72f6d9ec5253a8f92523b4a9272c3dfb"
  let DN="Pasta alla Gricia Recipe"

  return (
    <div>
      
      <Navbar  />

      <br />
      <Search_bar/>
      {/* <NavbarBs/> */}

      {/* <Dish_card 
      dish_img="https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIQCXGMnV6drE3hKE8n1sGQs4GbDJyDzL%2BE5pSXz78FvAhAIgeQDIB5qiDEptUt3EFxKyVnmEvFuVYHEX2Zh2SXYpxG8qwgUIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDLY3JIFlaN1oThI8OCqWBZuMU3Fp0WgmFQXMCaxMYDdrQoK9qPELIqLJr6fcK1E%2B4vTY2vDEreak1rbK2vhanyZ%2BpwV2AExM0WBnnwmbz7Bdy%2BMDvupum9%2B95jL%2BNUVNqvlRM%2FNADlp9RrwovnRFxuyAP3oa1bV3lY0%2Bm8Tvyo68R3%2FV39NB7AWPEk9t06ScbihQzCiTB6wAbVjyQYys1sMqptzcyTvmv7UvufayreN7vmZAm%2BRK5Bh26fT%2FD4Ylb29PvCCO7deFYfgQZLGkaeNl9jQhar1POh76CWluvevaecxiCBRLZqwN2mNHpinozFGGa8Cx8eFicflzwj4IB8jJ4sdRLR1uM%2FL3GO%2FqRHwlnJD44rJMNtnO3jmwBj7CB%2BVRgBV2SfEq5606gWFRbmxgZ%2BGvk%2B2i41W6Lo6exJ0UOy0FYX7gvWGIf7IL61WjyNzC5tlpEf5WjJNVKQ2SIoiFZotLDnnWx%2Fm6N3hIMXAZypwb2hyFB9ta%2Bybkmy7yJn1su6MZh8xztWa2Zg05Wx5IO2ePZ5NGJ6Kij%2BkIn5VokB%2F%2FLefgPsDFXO5sxabYIzKE8SLEr8VIxNuGwpXVw1jyANWMRYZPs1E9EePuKgGUp1IMOl%2Fe4IR%2FRqhkvgzUg0AXTQzstfB%2BSdfaMWPDMijEgPuLubh%2FLkeyy7YCcZtVVibkIC9mM3wbHWIRGqqI4reEZeaNe3Ym0UGAphoBoSkm%2FeHH5%2FS5ZpBv9MD1QQJbMidTgf5e8b9PBC%2FvpM2cGDgoRwi%2Fr7YyKZfYCDRFkGTEGEpa0RRy4q231WnJ4IlXlJlb7WqdEEV2nmFhr2y06NtB5dgHX2NvauI1FF0o65ejYohUYi5wCQPjm3he03gIweZPUHAKuHFCsPV%2Fpr4M1ozGDTJ3MMS7lLkGOrEBIxTwcna3ei74imW9rA30WMk6PoaYOnYGfZmou44zxa1GHPmMRWAzalRw4e6w1DDa90JO30lO9w%2Ftka7N4PTm%2FZG84Wfp2VN51nXMRBcmM728ymDsKJjIcmxU6kcNm%2BREYHW2X3jicEefxf%2FOTNP%2B3dyr0kdYgu2phD3KK8KEYVUJFgK6lq9q2tzYTg%2Bwe%2FXCepI0sfGwW23XfMh6qdKiC0gUqnN%2BbjuIrZIKFNWMhgrZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241101T192006Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKIKBMHFU%2F20241101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18909aeade1e07c83ffe5aea0c06aa4c72f6d9ec5253a8f92523b4a9272c3dfb"
      dish_name="Pasta alla Gricia Recipe"/> */}

      <FavouritePG/>

        {
          
          // dishDispFn(DI,DN)
        }
        {/* <Dishes /> */}

      {
        // DataExp.hits.map((dsh,index)=>(
        //   <Dish_card 
        //   dish_img={dsh.recipe.image}
        //   dish_name={dsh.recipe.label}
        //   />
        // ))
        // console.log(DataExp)
      }



    </div>
  )
}

export default App