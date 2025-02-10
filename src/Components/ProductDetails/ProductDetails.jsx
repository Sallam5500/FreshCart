import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import Loading from '../Loading/Loading';
import { CartContext } from '../Context/CartContext';
import { wishListContext } from '../Context/WishListContext'; 

export default function ProductDetails() {
  const {addProductToCart} = useContext(CartContext)
 const {addProductToWishList}= useContext(wishListContext);
    let settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000
      };

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
 let {id} = useParams();

 async function getProduct(productid){
  
 let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productid}`)
    
 console.log(data);
 setProduct(data.data);
 setLoading(false)
 
  }
  useEffect(()=>{
    getProduct(id)
  },[])

 return <>
  
  {loading ? <Loading/> :
  <div className="flex p-8 items-center">
    <div className="w-1/4">
    <Slider {...settings}>
    {product.images.map((image,index)=>  <img key={index}  src={image} className='w-full' alt={product.title} />)}
    </Slider>
    </div>
    <div className="w-3/4 p-6">
    <h2>{product.title} </h2>
    <p className='m-2 text-gray-600'>{product.description}</p>
    <p className=''>{product.category.name}</p>

    <div className="flex justify-between">
        <span>{product.price}EGP</span>
        <span><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</span>
      </div>
      <div className='flex justify-between py-3'>
    <button onClick={()=> addProductToCart(product.id)} className='btn w-full'>Add To Cart</button>
    <button onClick={()=>addProductToWishList(product.id)} className=' bg-transparent hover:bg-transparent text-slate-900 ' >  <i  className="icon fa-solid fa-heart w-15 text-2xl "></i></button>
    </div>
    </div>
  </div>
}
  </>
}
