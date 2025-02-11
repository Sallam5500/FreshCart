import React, { useState } from 'react'
import Loading from '../Loading/Loading';

export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);


async function PasswordReset() {
    setLoading(true);
    setMessage("");
    try {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
          method: "POST",
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
            setMessage("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");
          } else {
            setMessage(data.message || "حدث خطأ، يرجى المحاولة مرة أخرى.");
          }
    }catch(err){
        setMessage("حدث خطأ، يرجى المحاولة مرة أخرى.");
     
    }


}
const handleSubmit = (e) => {
    e.preventDefault();
   
  };


  return <>
  
  <h2 className='text-4xl mb-5'>please enter your verification code</h2>
  <div className="flex  justify-center  bg-gray-100 p-4 ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 ">
        <h2 className="text-center text-2xl font-semibold"> Forget Password ?</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full"
              placeholder="Entar Your Email"
            />
          </div>
           <button  type="submit" className="w-full" disabled={loading}>
           {loading ? <Loading className="animate-spin mr-2" /> : "Verify"}</button>
        </form>
        
      </div>
    </div>
  
  </>
}
