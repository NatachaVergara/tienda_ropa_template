import React from 'react'
import CategoryMonth from './CategoryMonth'
import FeatureProducts from './FeatureProducts'
import Hero from './Hero'

const HomeContainer = () => {
  return (
    <main>
      <Hero />
      <CategoryMonth />
      <FeatureProducts/>
    </main>
  )
}

export default HomeContainer