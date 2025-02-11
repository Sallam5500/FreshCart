import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


export default function Login() {
 const [apiError, setApiError] = useState(null)
 const [loading, setLoading] = useState(false)
 let{setUserToken}=useContext(UserContext)
 let navigate=useNavigate();
 
  
async function login(values){
try{
  setLoading(true)
  let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
  console.log(data);
  localStorage.setItem('userToken',data.token);
  setUserToken(data.token)
 navigate('/home')
}catch(err){
   console.log(err.response.data.message);
   setApiError(err.response.data.message)
   setLoading(false)
}
 
}

let validationSchema =Yup.object().shape({
 email : Yup.string().required('email is required').email("email invaild"),
  password : Yup.string().required('password is required').matches(/^[A-Z]\w{4,10}$/,`must be
* Start with a letter (either uppercase or lowercase).
* Be between 6 and 9 characters in total.
* Can only contain letters (A-Z or a-z) and numbers (0-9)`),

})
const formik = useFormik({
  initialValues:{
    email:"",
    password:"",

  },validationSchema
  ,onSubmit:login
})






  return <>
    <h2>Login</h2>

<form onSubmit={formik.handleSubmit} className="md:w-1/2 mx-auto">
{apiError &&   <div className="px-4 py-4 mb-5 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
{apiError}
</div>}
  

  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=""  />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email</label>
  </div>
  {formik.errors.email &&formik.touched.email &&   <div className="px-4 py-4 mb-5 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
{formik.errors.email}
</div>}

  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-main-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder="" />
      <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Password</label>
  </div>
  {formik.errors.password &&formik.touched.password &&   <div className="px-4 py-4 mb-5 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
{formik.errors.password}
</div>}
 
 
 
{loading ? <button type="button" className="text-white bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
  <i className='fas fa-spinner fa-spin'></i></button> 
    :<button type="submit" className="text-white bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
      Submit</button>
}
  

</form>





  </>
}
