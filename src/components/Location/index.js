import React from 'react'
import classnames from 'classnames'
import styles from './Location.module.css'

const Location = ({ address, addressSub, addressLink, title, gMapsUrl }) => {
  return (
    <div className={styles.mainDiv}>
      <h2 className={classnames(styles.title, 'tc f2 pa4')}>Localização</h2>
      <a
        href={addressLink}
        target="_blank"
        rel="noopener"
        className={classnames(styles.address, 'white')}
      >{address}</a>
      <span className={styles.addresssub}>{addressSub}</span>
      <div className={styles.iframecontainer}>
        <iframe
          title={title}
          src={gMapsUrl}
          className={styles.iframe}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </div>
    </div>
  )
}

export default Location
