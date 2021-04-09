import React from 'react'
import classnames from 'classnames'
import PublicacoesContainer from '../containers/PublicacoesContainer'

const Publicacoes = () => {
  return (
    <div className="flex justify-center">
      <div className={classnames('ph3 ph0-ns')} style={{ maxWidth: '800px' }}>
        <PublicacoesContainer isHome={false}/>
      </div>
    </div>
  )
}

export default Publicacoes
