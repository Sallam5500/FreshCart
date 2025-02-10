import React from 'react'
import style from './Home.module.css'
import RecentProduct from '../RecentProduct/RecentProduct'
import Loading from '../Loading/Loading'
import MainSlaider from '../MainSlaider/MainSlaider'
import CategorySlider from '../CatrgorySlider/CategorySlider'

export default function Home() {



  return <>
 <MainSlaider/>
 <CategorySlider/>

 <RecentProduct/>
     
  </>
}
