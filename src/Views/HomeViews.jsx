import React from 'react'
import Featured from '../Componentes/Featured/Featured'
import "./home.css"
import PropertyList from '../Componentes/propertyList/PropertyList'
import FeaturedProperties from '../Componentes/FeaturedProperties/FeaturedProperties'
import MailList from '../Componentes/MailList/MailList'

const HomeViews = () => {
  return (
    <section >
      <div className='homeContainer'>

      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Home guest love</h1>
      <FeaturedProperties/>
      <MailList/>
      </div>

    </section>
  )
}

export default HomeViews