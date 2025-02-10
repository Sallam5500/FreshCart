import React, { useState } from 'react'
import { RingLoader } from 'react-spinners'
const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
export default function Loading() {
    
 
  
  return <>
 <div className="sweet-loading py-10">
  
      <RingLoader
        color={'#0aad0a'}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  
  </>
}
