import React from 'react'
import classnames from 'classnames'
import { graphql } from 'gatsby'
import styles from './Noticia.module.css'

const Post = ({ data: { prismicNoticia } }) => {
  const { data } = prismicNoticia
  return (
    <div className="flex justify-center">
      <div className={classnames(styles.content, 'mh3 tl w-90 w-auto-ns')}>
        <h1 className="mb0 pb0">{data.title.text}</h1>
        <span className="i f6 grey">{`Postado em ${data.date}`}</span>
        <div dangerouslySetInnerHTML={{ __html: data.conteudo.html }} />
      </div>
    </div>
  )
}

export default Post
export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicNoticia(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        conteudo {
          html
        }
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
