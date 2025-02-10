import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading';

export default function Categories() {
  const [catigory, setCatigory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCatigory() {
    let{data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      
    console.log(data);
    setCatigory(data.data)
    setLoading(false)
    
   
  }
  useEffect(()=>{
  getCatigory()
  },[])
  return <>
    <h2>Categories</h2>
     {loading ? <Loading/> :
        <div className="flex flex-wrap py-8 gap-y-4 justify-center">
         {catigory.map((catigory)=>  <div key={catigory.id} className="w-4/12 ">
         <div className="catigory p-5">
          <img src={catigory.image} className='w-full h-[450px] object-cover object-top' alt={catigory.name} />
          <h3 className='text-center'>{catigory.name}</h3>
         </div>
         </div>)}
        
    
        </div>
        }
  
  </>
}
