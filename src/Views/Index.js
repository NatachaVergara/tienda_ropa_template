import React from 'react'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <header>Soy el header</header>
        <Outlet/>
        <footer>Soy el footer</footer>

    </div>
  )
}

export default Index