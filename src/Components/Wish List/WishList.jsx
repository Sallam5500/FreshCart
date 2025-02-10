import React, { useContext } from 'react'
import { wishListContext } from '../Context/WishListContext'
import Loading from '../Loading/Loading'

export default function WishList() {
 
const{wishList,deleteProductCountToWishList}= useContext(wishListContext)
 return <>
{wishList? <div>
  <h2 className='text-center text-red-900 py-2 '>Favorite</h2>
  

  <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-16 py-3">
            <span className="sr-only">Image</span>
          </th>
          <th scope="col" className="px-6 py-3">
            Product
          </th>
          <th scope="col" className="px-6 py-3">
            
          </th>
         
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
       {wishList.data.map((item , index)=> <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="p-4">
            <img src={item.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={item.title} />
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
           {item.title}
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
            
              <div>
              
              </div>
           
            </div>
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
           {item.price}
          </td>
          <td className="px-6 py-4">
            <button onClick={()=>deleteProductCountToWishList(item.id)}  className="font-medium text-red-600 dark:text-red-500 hover:underline bg-transparent hover:bg-transparent ">Remove</button>
          </td>
        </tr>)}
       
      </tbody>
    </table>
  </div>
</div>:<Loading/>}


  
  </>
}
