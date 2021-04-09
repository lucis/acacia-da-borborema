import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import styles from './Publicacoes.module.css'

const MOCK = [
  {
    uid: 'me-ouvir-chorar',
    title: 'É lançado o site da Loja Maçônica Acácia da Borborema',
    date: '04/12/2019',
    leitura: '3 minutos de leitura',
  },
]

const renderNoticia = isHome => ({ title, uid, date, leitura }) => {
  const [dia, mes, ano] = date.split('/')
  const data = [dia, mes].join('/')
  return (
    <Link
      to={`/${uid}`}
      key={uid}
      className={classnames(
        'pa2 pb3 dim pointer flex justify-between b',
        { ma2: isHome, mv2: !isHome },
        isHome ? styles.noticia : styles.noticiaPage,
        styles.a
      )}
    >
      <div className="flex flex-column justify-between w-80">
        <span className="f3-ns f4 b pt1 pr1 tl">{title}</span>
        <span className="f6 gray ttu tl">{leitura}</span>
      </div>
      <div className={classnames('flex flex-column b f2 tc')}>
        <span className={styles.data}>{data}</span>
        <span className={styles.ano}>{ano}</span>
      </div>
    </Link>
  )
}
const Publicacoes = ({ noticias = MOCK, isHome }) => {
  return (
    <div
      className={classnames(
        'pb2 flex flex-column items-center',
        isHome ? styles.container : styles.containerPage,
        { ph2: isHome },
        { [styles.c]: !isHome }
      )}
    >
      <div className={classnames(`w-auto`)}>
        {isHome ? (
          <h2 className={classnames(styles.heading, 'f2 tc mv4 w-100')}>
            Publicações
          </h2>
        ) : (
          <h1 className="f3 f2-ns tl">Publicações</h1>
        )}
        {noticias.map(renderNoticia(isHome))}
        {isHome && (
          <div className="flex justify-center">
            <Link
              to="/publicacoes"
              className={classnames(
                styles.a,
                'tc ttu b mt2 mb3 f4 dim pointer bg-white-50 pa2'
              )}
            >
              + Mais
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Publicacoes
