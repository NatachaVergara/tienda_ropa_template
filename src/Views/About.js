import React from 'react'
import Banner from '../Components/About/Banner';
import Brands from '../Components/About/Brands';
import Services from '../Components/About/Services';

const About = () => {
  const pageTitle = "Tienda Ropa - Sobre nosotros";
  document.title = pageTitle;
  return (
   <main>
   <Banner/>
   <Services/>
   <Brands/>
   
   </main>
  )
}

export default About