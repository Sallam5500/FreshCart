import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'

export default function Brands() {
  const [brandId, setBrandId] = useState("");
  const [isClosed, setIsClosed] = useState(true);
  const [brand, setBrand] = useState([])
  const [loading, setLoading] = useState(true)
  
    function detailsBrand(id){
      setBrandId(id)
      console.log(id);
      
  }
  async function getBrand() {
    let{data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    console.log(data);
    setBrand(data.data)
  setLoading(false)
  }
  useEffect(()=>{
    getBrand()
  },[])
 
  return <>
  <h1 className='text-main text-center '>All Brand</h1>
    {loading ? <Loading/> :
    <div  className="flex flex-wrap py-8 gap-y-4 justify-center">
     {brand.map((brand)=>  <div key={brand._id} onClick={()=>detailsBrand(brand._id)} className="w-1/4">
  
     <div className="brand p-2">
      <img src={brand.image} alt={brand.name} />
      <h3 className='text-center py-3'>{brand.name}</h3>
     </div>

  
     
     </div>
    )}
    

    </div>
    }
  
  </>
}
