import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import { Link as RouterLink } from 'react-router-dom'
import './index.css'

const Link = ({ className, children, href, isInternal }) => (
  isInternal 
  ? (
    <RouterLink to={href}>
      <Text className={`today-web-link-text ${className}`}>
        {children}
      </Text>
    </RouterLink>
  )
  : (
    <a href={href} target={'_blank'} rel="noopener noreferrer">
      <Text className={`today-web-link-text ${className}`}>
        {children}
      </Text>
    </a>
  )
)

Link.propTypes = {
  className: PropTypes.string,
  isInternal: PropTypes.bool
}

Link.defaultProps = {
  className: '',
  isInternal: false
}

export default Link
