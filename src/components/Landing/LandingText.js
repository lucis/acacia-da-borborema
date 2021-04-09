import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import styles from './Landing.module.css'

const getTo = (obj, wait) => async next => {
  await new Promise(resolve => setTimeout(resolve, wait))
  await next(obj)
}

const LandingText = ({ location, locationSub, meetings, lodgeName }) => {
  const loja = useSpring({
    to: getTo({ opacity: 1 }, 600),
    from: { opacity: 0 },
  })

  const acacia = useSpring({
    to: getTo({ opacity: 1 }, 1100),
    from: { opacity: 0 },
  })

  const situada = useSpring({
    to: getTo({ opacity: 1 }, 1500),
    from: { opacity: 0 },
  })

  const reunioes = useSpring({
    to: getTo({ opacity: 1 }, 2000),
    from: { opacity: 0 },
  })

  return (
    <div className="flex flex-column justify-end h-100">
      <animated.div style={loja} className={styles.loja}>
        <span className={styles.montserrat}>Loja Maçônica</span>
      </animated.div>
      <animated.div style={acacia} className={styles.acacia}>
        <span className={styles.montserrat}>{lodgeName}</span>
      </animated.div>
      <animated.span style={situada} className={styles.situada}>
        <span className={classnames('white-ns', styles.montserrat)}>
          {location}
        </span>
        <br />
        <p className={styles.locationsub}>
          {locationSub}
        </p>
      </animated.span>
      <animated.span style={reunioes} className={styles.reunioes}>
        <span className={classnames('white-ns', styles.montserrat)}>
          Reuniões nas <b className={styles.montserrat}>{meetings}</b>
        </span>
      </animated.span>
    </div>
  )
}

LandingText.propTypes = {
  meetings: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  lodgeName: PropTypes.string.isRequired,
}

export default LandingText
