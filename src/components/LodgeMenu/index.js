import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'gatsby'
import styles from './LodgeMenu.module.css'

const LodgeMenu = ({ items }) => (
  <div className={classnames(styles.scrollmenu, 'relative')}>
    <ul>
      {items.map(({ value, path }, i) => (
        <Fragment key={i}>
          {i !== 0 && <span className={styles.separator}>|</span>}
          <li>
            <Link to={path}>{value}</Link>
          </li>
        </Fragment>
      ))}
    </ul>
  </div>
)

LodgeMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.required,
    path: PropTypes.string.isRequired
  }))
}

export default LodgeMenu
