import React, { useContext, useState } from 'react' 
import { useFormik } from 'formik';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';


export default function CheackOut() {
 const [apiError, setApiError] = useState(null)
 const [loading, setLoading] = useState(false)
 let{cart}=useContext(CartContext)

 
  
async function CheackOut(shippingAdderss){
try{
  setLoading(true)
  let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.cartId}?url=http://localhost:5173`, {
    shippingAdderss 
  },{
    headers:{
      token: localStorage.getItem('userToken')
    }
  })
  console.log(data);
  toast.success(data.status)
 location.href = data.session.url
 
}catch(err){
   console.log(err.response.data.message);
   setApiError(err.response.data.message)
   setLoading(false)
}
 
}

const formik = useFormik({
  initialValues:{
    city:"",
    details:"",
    phone:"",

  }
  ,onSubmit:CheackOut
})






  return <>
    <h2>CheackOut</h2>

<form onSubmit={formik.handleSubmit} className="md:w-1/2 mx-auto">

  

  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="city" id="city" value={formik.values.city}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=""  />
    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your city</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="details" id="details" value={formik.values.details}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=""  />
    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your details</label>
  </div>


  <div class="relative z-0 w-full mb-5 group">
      <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-main-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder="" />
      <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>
  </div>

 
 
 
{loading ? <button type="button" className="text-white bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
  <i className='fas fa-spinner fa-spin'></i></button> 
    :<button type="submit" className="text-white bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
      Submit</button>
}
  

</form>





  </>
}