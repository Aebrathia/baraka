import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Button.css'

const Button = ({ as = 'a', className, children, ...rest }) => {
  const As = as
  return (
    <As className={cx('Button', className)} {...rest}>
      {children}
    </As>
  )
}

Button.propTypes = {
  // Accept either a, button or custom component such as Link
  as: PropTypes.oneOfType([
    PropTypes.oneOf(['a', 'button']),
    PropTypes.elementType
  ]).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Button
