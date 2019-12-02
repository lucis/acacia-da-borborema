import React from 'react'
import classnames from 'classnames'
import MD from 'react-markdown/with-html'
import styles from './Loja.module.css'

const Loja = ({ texto = TEXTO }) => (
  <div className={'flex justify-center mb4 tl'}>
    <div className={classnames('mh4 tj', styles.container)}>
      <h1 className="f3 f2-ns tl">Sobre a Loja</h1>
      <MD source={texto} escapeHtml={false} />
    </div>
  </div>
)

export default Loja
