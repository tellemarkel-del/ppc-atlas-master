import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <nav className={`navigation-navigation ${props.rootClassName} `}>
      <Link to="/" className="navigation-logo">
        PPC Atlas
      </Link>
      <div className="navigation-nav">
        <Link to="/google-ads-hub" className="navigation-link">
          Google Ads
        </Link>
        <Link to="/meta-ads-hub" className="navigation-link">
          Meta Ads
        </Link>
        <Link to="/about" className="navigation-link">
          About Me
        </Link>
        <a href="#contact" className="navigation-contact-button">
          Contact
        </a>
      </div>
    </nav>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navigation
