import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'

const Index = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        


    </div>
  )
}

export default Index