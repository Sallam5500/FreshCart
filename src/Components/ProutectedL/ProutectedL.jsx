import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProutectedL({children}) {
  if (localStorage.getItem('userToken')) {
    return <Navigate to={'/home'}/>
  }else{
    return children
  }



}
