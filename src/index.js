/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import SliderData from './SliderData'

import './scss/index.scss'

const baseClass = 'slider'

const ImageSlider = ({ slides = SliderData }) => {
  const [current, setCurrent] = useState(0)
  const { length } = slides

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className={baseClass}>
      <FaArrowAltCircleLeft className={`${baseClass}-arrowLeft`} onClick={prevSlide} />
      <FaArrowAltCircleRight className={`${baseClass}-arrowRight`} onClick={nextSlide} />
      {SliderData.map((slide, index) => (
        <div
          className={index === current ? `${baseClass}-slide active` : `${baseClass}-slide`}
          key={slide.id}
        >
          {index === current && (

          <img src={slide.image} alt="sliders" className={`${baseClass}-slideImage`} />
          )}
        </div>
      ))}
    </section>
  )
}

export default ImageSlider

ImageSlider.propTypes = {
  slides: PropTypes.object.isRequired,

}
