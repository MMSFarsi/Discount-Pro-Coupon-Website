import React from 'react'
import Banner from './Banner'
import TopBrand from './TopBrand'
import BrandsOnSale from './BrandsOnSale'
import CouponCategories from './CouponCategories'
import HowItWorks from './HowItWorks'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Discount Pro | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopBrand></TopBrand>
      <BrandsOnSale></BrandsOnSale>
      <CouponCategories></CouponCategories>
      <HowItWorks></HowItWorks>
    </div>
  )
}

export default Home