import React from 'react'
import axios from 'axios';

let fetch_data=async(dish,cuisine)=>{

    let final_data={hits:[]};

    let api_id=`7d720594`
    let app_key=`9ed72480638e686dcf6a7095de4532df`
    let url=`https://api.edamam.com/api/recipes/v2?type=public&q=${dish}&app_id=${api_id}&app_key=${app_key}`
    if(cuisine!=''){
        url+=`&cuisineType=${cuisine}`
    }
    const response=await axios.get(url)
    // await fetch(url)
    //     .then(res=>{
    //         if(!res.ok){
    //             console.log("error")
    //             // throw new Error("Could not ")
    //         }
    //         return res.json()
    //     }).then(data=>{
    //         console.log(`data: `)
    //         console.log(data)
    //         console.log(`data.hits: `)
    //         console.log(data.hits)
    //         // console.log(`number of elements=${data.hits.length}`)
    //         if(data.count==0){
    //             console.log("no dish found")
    //             return {};
    //         }
    //         final_data=data
    //         return data;

    //         // for (let i = 0; i < data.hits.length; i++) {
    //         //     let dish_img=document.createElement('img')
    //         //     dish_img.src=data.hits[i].recipe.images.REGULAR.url;
    //         //     dish_img.style.display='inline_block'
    //         //     wrapper.appendChild(dish_img)
    //         // }
    //     })
    //     .catch(error=>{
    //         console.log("error:")
    //         console.log(error)
    //     })
        return final_data;
}

export default fetch_data

// const FetchData = () => {
//   return (
//     <div>FetchData</div>
//   )
// }

// export default FetchData