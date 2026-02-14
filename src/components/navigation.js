import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <nav className={`navigation-navigation ${props.rootClassName} `}>
      <Link to="/" className="navigation-navlink">
        {props.Logo}
      </Link>
      <div className="navigation-nav">
        <Link to="/google-ads-hub" className="navigation-navlink1">
          {props.text}
        </Link>
        <span className="navigation-text">{props.text1}</span>
        <span className="navigation-text1">{props.text11}</span>
      </div>
    </nav>
  )
}

Navigation.defaultProps = {
  text11: 'Contact',
  text: 'Google Ads',
  Logo: 'PPC Atlas',
  rootClassName: '',
  text1: 'Meta Ads',
}

Navigation.propTypes = {
  text11: PropTypes.string,
  text: PropTypes.string,
  Logo: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default Navigation
