import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './CardBody.css'

const CardBody = ({ className, children, ...rest }) => {
  return (
    <div className={cx('CardBody', className)} {...rest}>{children}</div>
  )
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default CardBody
