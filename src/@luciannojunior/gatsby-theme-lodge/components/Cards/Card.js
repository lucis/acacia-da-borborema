import React from 'react'
import styles from './Cards.module.css'
import classnames from 'classnames'

const Card = ({ classes, data: { title, path, text, image } }) => {
  return (
    <div className={classnames(classes, 'pa3-ns')}>
      <div
        className={classnames(styles.mainDiv, 'ma3 ma3-ns bg-black-10')}
      >
        <div
          className={classnames(
            styles.title,
            'tl pa1 flex justify-between items-center'
          )}
          style={{ backgroundImage: `url("${image}")` }}
        >
          <h2 className={'tl pa1'}>{title}</h2>
          <a href={path} className={classnames(styles.btn, 'no-underline ph1')}>
            saiba mais
          </a>
        </div>
        <p className="f6 tl i pa2">{text}</p>
        <div />
      </div>
    </div>
  )
}
export default Card
