import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Card.css'

const Card = ({ as = 'article', className, children, ...rest }) => {
  const As = as
  return (
    <As className={cx('Card', className)}>{children}</As>
  )
}

Card.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType
  ]).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Card
