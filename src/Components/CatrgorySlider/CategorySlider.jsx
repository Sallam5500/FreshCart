

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CategorySlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000
      };

  const [categories, setCategories] = useState([])
    async function getCategory() {
        let{data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);

       setCategories(data.data)
    }
    useEffect(()=>{
        getCategory()
    },[])
 
 return <>
  
  <Slider {...settings}>
    {categories.map((category,index)=>  <div key={index} className='my-3'>
      <img src={category.image} alt={category.name} className='w-full h-[200px] object-cover object-top' />
      <h3>{category.name}</h3>
    </div>)}
    </Slider>
  
  </>

}
