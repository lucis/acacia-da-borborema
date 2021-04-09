import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LodgeMenu from '../../components/LodgeMenu'

const Menu = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allMenu {
        nodes {
          path
          value
        }
      }
    }
  `)

  return <LodgeMenu items={data.allMenu.nodes} />
}

export default Menu
