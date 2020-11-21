import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Text = ({ className, children, color, bold, underline }) => (
  <span className={`today-web-text today-web-text-${color} ${bold ? 'today-web-text-bold' : ''} ${underline ? 'today-web-text-underline' : ''} ${className}`}>
    {children}
  </span>
)

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  bold: PropTypes.bool,
  underline: PropTypes.bool
}

Text.defaultProps = {
  className: '',
  color: 'primary',
  bold: false,
  underline: false
}

export default Text
