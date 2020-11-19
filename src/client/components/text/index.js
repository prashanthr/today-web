import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Text = ({ className, children, color }) => (
  <span className={`today-web-text today-web-text-${color} ${className}`}>
    {children}
  </span>
)

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}

Text.defaultProps = {
  className: '',
  color: 'primary'
}

export default Text
