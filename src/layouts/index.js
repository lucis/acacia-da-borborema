import React from 'react'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import SEO from '../components/SEO'

const Layout = ({ children, pageContext: { title, componentProps } }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      {React.cloneElement(children, componentProps)}
      <Footer />
    </>
  )
}

export default Layout
