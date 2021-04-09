import React from 'react'
import Menu from '../Menu'
import gl from './mock_gl.png'
import styles from './Header.module.css'
import classnames from 'classnames'

const Header = () => {
  return (
    <header className="flex flex-column">
      <div
        className={classnames(
          styles.blue,
          'flex flex-row justify-between justify-around-ns'
        )}
      >
        <div className="flex flex-row">
          <div className={styles.logo}>
            <img
              alt={'Loja Maçônica Regeneração Campinense'}
              title="Loja Maçônica Regeneração Campinense"
              src={'/images/logo.png'}
            />
          </div>
          <div className="flex flex-column justify-center">
            <span className="tl mid-gray">Loja Maçônica</span>
            <span className={classnames(styles.title, 'tl f3 b')}>
              Acácia da Borborema nº 41
            </span>
          </div>
        </div>
        <div className={classnames(styles.gl, 'flex flex-column justify-end')}>
          <img
            src={gl}
            alt="Filiada à Grande Loja Maçônica do Estado da Paraíba"
            title="Filiada à Grande Loja Maçônica do Estado da Paraíba"
          />
        </div>
      </div>
      <Menu />
    </header>
  )
}

export default Header
