import React from 'react'
import img404 from '../assets/img/error404_1.jpg'

const ErrorPage = () => {
  const pageTitle = "Tienda Ropa - 404";
  document.title = pageTitle;
  return (
    <div className='error404'>
      <img src={img404} alt='error 404'/>
    </div>
  )
}

export default ErrorPage