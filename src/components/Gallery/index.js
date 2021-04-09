import React, { useMemo, useRef, useEffect } from 'react'
import styles from './Gallery.module.css'
import LazyLoad from 'react-lazy-load'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )

  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    },
    [delay]
  )
}

const Gallery = ({ pictures = [] }) => {
  const isMobile = useMemo(
    () => typeof window !== 'undefined'? window.matchMedia('only screen and (max-width: 760px)').matches : true,
    []
  )

  const images = pictures.map(([num, alt]) => [
    `images/${num}${isMobile ? '_mobile' : ''}.jpg`,
    alt,
  ])

  useInterval(() => {
    const hasImage = document.querySelector('#slideshow').children[0]
      .childElementCount
    if (hasImage) {
      const firstDiv = document.querySelector('#slideshow').children[0]
      const firstImg = firstDiv.children[0]
      firstDiv.nextElementSibling.children[0].classList.remove(styles.hide)
      firstDiv.nextElementSibling.children[0].classList.add(styles.show)
      firstImg.classList.add(styles.hide)
      firstImg.classList.remove(styles.show)
      setTimeout(() => {
        const slide = document.querySelector('#slideshow')
        slide && slide.append(firstDiv)
      }, 2000)
    }
  }, 2000)

  return (
    <div>
      <div id="slideshow" className={styles.mainDiv}>
        {images.map(([src, alt], i) => (
          <LazyLoad
            key={src}
            width="100%"
            debounce={false}
            offsetVertical={500}
          >
            <img
              src={src}
              alt={alt}
              className={i !== 0 ? styles.hide : styles.show}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  )
}

export default Gallery
