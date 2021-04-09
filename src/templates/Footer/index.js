import React from 'react'
import classnames from 'classnames'
import styles from './Footer.module.css'
import gl from '../Header/mock_gl.png'

const ENDERECO = {
  linha1: 'Rua Siqueira Campos, 1514 - 1º andar - Conceição',
  linha2: 'Campina Grande - PB',
}

const EMAIL = 'contato@acaciadaborborema.com.br'

const ano = new Date().getFullYear()

const Footer = ({ endereco = ENDERECO, email = EMAIL }) => {
  return (
    <footer
      className={classnames(styles.main, 'flex flex-column justify-between')}
    >
      <div className="flex flex-column flex-row-ns justify-between items-center-ns">
        <div className="flex flex-column tl f6 white-80 ma3">
          <span className="ttu white-40" style={{ fontSize: 10 }}>
            Endereço
          </span>
          <span>{endereco.linha1}</span>
          <span>{endereco.linha2}</span>
          <span className="ttu white-40 mt2" style={{ fontSize: 10 }}>
            E-mail
          </span>
          <a className="white" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className="flex flex-row justify-end flex-column-ns tl f6 white-80 ma3">
          <div className="flex flex-row items-center justify-center">
            <span className="w5">
              Filiada à{' '}
              <a
                target="_blank"
                rel="noopener"
                title="Grande Loja Maçônica do Estado da Paraíba"
                href="http://www.grandelojapb.org/"
                className="white"
              >
                Grande Loja Maçônica do Estado da Paraíba
              </a>
            </span>
            <a
              title="Grande Loja Maçônica do Estado da Paraíba"
              href="http://www.grandelojapb.org/"
              target="_blank"
              rel="noopener"
            >
              <img
                src={gl}
                alt="Grande Loja Maçônica do Estado da Paraíba"
                className="w2 ma1"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-column pb3">
        <span className="tc f6 white-50">
          &copy;{`${ano} - Loja Maçônica Acácia da Borborema`}
        </span>
        <span className="f6 white-30">
          Desenvolvido por{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/lucis/acacia-da-borborema"
            className="f6 white-30"
          >
            Luciano Júnior
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
