import React from 'react'
import Landing from './Landing'
import Cards from './Cards'
import Location from './Location'
import Gallery from './Gallery'
import PublicacoesContainer from '../containers/PublicacoesContainer'

const Home = ({ landing, cards = {}, location = {}, gallery = {} }) => (
  <>
    <Landing {...landing} />
    <Cards {...cards} />
    <Location {...location} />
    <Gallery {...gallery} />
    <PublicacoesContainer isHome />
  </>
)

export default Home
