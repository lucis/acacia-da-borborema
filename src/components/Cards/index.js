import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Card from './Card'
import styles from './Cards.module.css'

const LIPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam ex molestie turpis imperdiet finibus. Donec in ante condimentum, rutrum orci cursus, pulvinar orci. Vestibulum euismod velit lacinia ante gravida, ac hendrerit dolor rhoncus. Sed tincidunt, mauris eget placerat dignissim, erat nulla dictum justo, a auctor diam erat non ante...'

const mockData = {
  historia: {
    title: 'Nossa História',
    path: '/historia',
    text: LIPSUM,
    image: require('./images/head_loja.png'),
  },
  diretoria: {
    title: 'Diretoria',
    path: '/diretoria',
    text: LIPSUM,
    image: require('./images/head_diretoria.png'),
  },
  veneraveis: {
    title: 'Galera de Veneráveis',
    path: '/galeria-de-veneráveis',
    text: LIPSUM,
    image: require('./images/head_veneraveis.png'),
  },
  filantropia: {
    title: 'Filantropia',
    path: '/filantropia',
    text: LIPSUM,
    image: require('./images/head_filantropia.png'),
  },
}

const Cards = ({
  historia = {},
  diretoria = {},
  veneraveis = {},
  filantropia = {},
}) => {

  const cardsData = {
    historia: {
      ...mockData.historia,
      ...historia,
    },
    diretoria: {
      ...mockData.diretoria,
      ...diretoria,
    },
    veneraveis: {
      ...mockData.veneraveis,
      ...veneraveis,
    },
    filantropia: {
      ...mockData.filantropia,
      ...filantropia,
    },
  }

  return (
    <>
      <div className="pt4" id="cards">
        <div
          className={classnames(
            styles.outter,
            'flex flex-row flex-wrap justify-center-ns db dn-ns'
          )}
        >
          <Card classes="w-100" data={cardsData.historia} />
          <Card classes="w-100" data={cardsData.diretoria} />
          <Card classes="w-100" data={cardsData.veneraveis} />
          <Card classes="w-100" data={cardsData.filantropia} />
        </div>
        <div className="flex-ns flex-s flex-row justify-center dn db-ns">
          <Card classes={styles.cardLarge} data={cardsData.historia} />
          <Card classes={styles.cardLarge} data={cardsData.diretoria} />
        </div>
        <div className="flex-ns flex-s flex-row justify-center dn db-ns">
          <Card classes={styles.cardLarge} data={cardsData.veneraveis} />
          <Card classes={styles.cardLarge} data={cardsData.filantropia} />
        </div>
      </div>
    </>
  )
}

const entryType = PropTypes.shape({
  title: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
})

Cards.propTypes = {
  filantropia: entryType,
  historia: entryType,
  diretoria: entryType,
  veneraveis: entryType,
}

export default Cards
