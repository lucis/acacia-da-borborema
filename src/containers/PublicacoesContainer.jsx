import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Publicacoes from '../components/Publicacoes'

const getReadingTime = (text = ``) => {
  const AVERAGE = 240
  const words = text.split(` `).length
  const minutes = Math.max(Math.ceil(words / AVERAGE), 2)
  return `${minutes} minutos de leitura`
}

const PublicacoesContainer = ({ isHome = false }) => {
  // TODO: We will probably need another container
  const data = useStaticQuery(graphql`
    query NoticiasQuery {
      allPrismicNoticia(
        sort: { fields: first_publication_date, order: DESC }
        limit: 100
      ) {
        nodes {
          uid
          data {
            title {
              text
            }
            conteudo {
              text
            }
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  `)

  const entries = data.allPrismicNoticia.nodes

  const noticias = (isHome ? entries.slice(0, 5) : entries).map(
    ({
      uid,
      data: {
        date,
        title: { text: title },
        conteudo: { text: conteudo },
      },
    }) => {
      return {
        uid,
        date,
        title,
        leitura: getReadingTime(conteudo),
      }
    }
  )

  return <Publicacoes noticias={noticias} isHome={isHome} />
}

export default PublicacoesContainer
