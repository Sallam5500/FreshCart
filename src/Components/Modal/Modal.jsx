import React, { useEffect, useState } from 'react'

export default function Modal() {
onst [brand, setBrand] = useState("");
  async function detailsBrand(brandid) {
     let{data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandid}`)
     console.log(data);
     setIsClosed(true)
     useState(data.data)
   }
 useEffect(()=>{
    detailsBrand()
 },[])
 return <>
  
{setIsClosed &&   <div  className="modal-body">
  <div  className="container">
    <div  className="flex justify-center align-items-center"><div  className="w-1/6">
        <h1  className="main-color">{}</h1>
        <p >{}</p>
      </div><div  className="w-1/6">
        <img  alt className="w-full" src={image} />
      </div>
    </div>
  </div>
</div>}

  </>
}
