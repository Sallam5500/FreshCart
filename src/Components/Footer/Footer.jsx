import React from "react";
import google from '../../assets/images/zz.jpeg'
import apple from '../../assets/images/th.jpeg'
import amazon from '../../assets/images/mm.jpeg'
import paypal from '../../assets/images/R.png'
import amircan from '../../assets/images/aa.jpeg'
import master from '../../assets/images/OIP.jpeg'

export default function Footer () {
  return <>
  
  <footer className="bg-gray-100 py-8">
      <div className="container  ">
        <h2 className="text-xl font-semibold mb-4">Get the FreshCart app</h2>
        <p className="text-gray-600 mb-6">
          We will send you a link, open it on your phone to download the app.
        </p>
        <div className="flex  gap-4 mb-6 ">
          <input
            type="email"
            placeholder="Email .."
            className="border border-gray-300 rounded-lg px-4 py-1  w-[70%]"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Share App Link
          </button>
        </div>
         <div className="flex justify-between">
         <div className="flex justify-center items-center gap-8 mb-6">
          <p className="text-gray-600">Payment Partners</p>
          <img src={amazon} alt="Amazon Pay" className="h-6 w-[50px]" />
          <img src={amircan} alt="American Express" className="h-6 [50px]" />
          <img src={master} alt="Mastercard" className="h-6 [50px]" />
          <img src={paypal} alt="PayPal" className="h-6 [50px]" />
        </div>
        <div className="flex justify-center items-center gap-8">
          <p className="text-gray-600">Get deliveries with FreshCart</p>
          <img src={apple} alt="App Store" className="h-8 [50px]" />
          <img src={google} alt="Google Play" className="h-8 [50px]" />
        </div>
         </div>
      </div>
    </footer>
  </>
};



