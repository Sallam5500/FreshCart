import axios from 'axios';
import React, {  createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';




export let CartContext=createContext();


export default function CartContextProvider({children}) {
    const getToken = () => localStorage.getItem("userToken");
  const headers={
    token: localStorage.getItem('userToken')
}
 const [cart, setCart] = useState(null);
 
 async function addProductToCart(productId) {
    try {
        let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId
        },{
            headers
        })
        console.log(data);

        getProductsCart();
        toast.success(data.message,{
            duration:2000
        })

    } catch (err) {
        console.log(err);
        
    }
 }
 
 async function deleteProductCountToCart(productId) {
    try {
        let {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${ productId}`,{
            headers
        })
        console.log(data);

       setCart(data);
        toast.success(data.status,{
            duration:2000
        })

    } catch (err) {
        console.log(err);
        
    }
 }
 
 async function updateProductCountToCart(productId,count) {
    try {
        let {data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count
        },{
            headers
        })
      

       setCart(data);
        toast.success(data.status,{
            duration:500
        })

    } catch (err) {
        console.log(err);
        
    }
 }

 async function getProductsCart() {
    try {
        let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        })
    
        setCart(data)
     

    } catch (err) {
        console.log(err);
        
    }
 }
 useEffect(() => {
    if (getToken()) {
      getProductsCart();
    } else {
      setCart(null); // Clear cart if no user is logged in
    }
  }, [getToken()]);
  
return<CartContext.Provider value={{addProductToCart , getProductsCart,cart,updateProductCountToCart,deleteProductCountToCart}}>

{children}

</CartContext.Provider>
}
