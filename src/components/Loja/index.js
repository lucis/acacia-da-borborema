import React, { useEffect } from 'react'
import classnames from 'classnames'
import MD from 'react-markdown/with-html'
import styles from './Loja.module.css'

const Loja = ({ texto = TEXTO, location: { hash } }) => {
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      setTimeout(() => {
        el && el.scrollIntoView()
      }, 100)
    }
    console.log(hash)
  }, [])
  return (
    <div className={'flex justify-center mb4 tl'}>
      <div className={classnames('mh3 tj', styles.container)}>
        <h1 className="f3 f2-ns tl">Sobre a Loja</h1>
        <MD source={texto} escapeHtml={false} />
        <h2 id="filantropia">Filantropia</h2>
        <br />
        <p>
          A Loja Acácia da Borborema nº41 orgulha-se de ter obreiros preocupados
          com o bem comum e dispostos a postarem-se de pé na luta contra a
          desigualdade social, que deve ser tarefa diária de todo maçom. Ao
          contrário de outras instituições, a maçonaria não tem tradição de
          publicizar ações de caridade que realiza, já que o genuíno ato
          filantrópico deve ocorrer <b>sem a necessidade da divulgação.</b>{' '}
          Entretanto, é importante que algumas iniciativas sejam divulgadas para
          que mais pessoas se engajem, seja junto a nós ou por si sós, e um dos
          casos que esta Loja mostra com felicidade é o apoio ao grupo{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/gruposementesdobem/"
          >
            Sementes do Bem
          </a>
          , que já promoveu diversas ações de caridade região de Campina Grande
          - PB, inclusive com o apoio da maçonaria. Ao longo dos 20 anos de
          atividades, a Acácia da Borborema também promoveu ações em apoio a
          associações beneficentes da cidade como APAE (Associação de Pais e
          Amigos dos Excepcionais) , AEV Esperança e Vida e FAP (Fundação
          Assistencial da Paraíba).
        </p>
      </div>
    </div>
  )
}

export default Loja
