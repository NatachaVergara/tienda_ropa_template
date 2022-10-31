import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

const index = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default index