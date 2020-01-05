import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Nav.css'

const Nav = ({ className, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cx('Nav', className)} {...rest}>
      <img src='http://placekitten.com/50/50' alt='Logo' className='Nav__logo' />
      <button type='button' className='Nav__control' onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <ul className={cx('Nav__list', { 'Nav__list--active': isOpen })}>
        <li className='Nav__item'><a href='#' className='Nav__link'>Home</a></li>
        <li className='Nav__item'><a href='#' className='Nav__link'>Link 1</a></li>
        <li className='Nav__item'><a href='#' className='Nav__link'>Link 2</a></li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  className: PropTypes.string
}

export default Nav
