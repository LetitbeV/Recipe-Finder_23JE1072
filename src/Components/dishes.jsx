import React from 'react'
import DishCard from './dish_card'

const dishes = () => {
    const writeData=async ()=>{
        const {DataExp}=await import('./search_bar')
        if(DataExp==[]){
            return <div />
        }     
        console.log(DataExp);
        return DataExp.map((dsh,index)=>{
            <DishCard key={index}
            dish_img={dsh.recipe.image}
            dish_name={dsh.recipe.label}
            dish_key={index}
            />
        })
        // return DataExp.map((dsh,index)=>{
        //     <DishCard 
        //     dish_img={dsh.hits.recipe.image}
        //     dish_name={dsh.hits.recipe.label}
        //     />
        // })
    }
  return (
    <div>
        {writeData()}
    </div>
  )
}

export default dishes