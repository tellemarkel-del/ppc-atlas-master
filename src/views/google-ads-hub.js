import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-hub.css'

const GoogleAdsHub = (props) => {
  return (
    <div className="google-ads-hub-container">
      <Helmet>
        <title>Google Ads Hub - PPC Atlas</title>
        <meta property="og:title" content="Google Ads Hub - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-hub-hero">
        <h1 className="google-ads-hub-title">Google Ads Hub</h1>
        <p className="google-ads-hub-subtitle">
          Comprehensive knowledge base for Google Ads professionals
        </p>
      </div>
      <div className="google-ads-hub-content">
        <div className="google-ads-hub-grid">
          <Link to="/google-ads-foundations" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">01</div>
            <h2 className="google-ads-hub-card-title">Foundations</h2>
            <p className="google-ads-hub-card-description">
              Core concepts, account structure, and platform fundamentals
            </p>
          </Link>
          <Link to="/google-ads-campaign-types" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">02</div>
            <h2 className="google-ads-hub-card-title">Campaign Types</h2>
            <p className="google-ads-hub-card-description">
              Search, Display, Video, Shopping, Performance Max, and more
            </p>
          </Link>
          <Link to="/google-ads-bidding" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">03</div>
            <h2 className="google-ads-hub-card-title">Bidding & Budget</h2>
            <p className="google-ads-hub-card-description">
              Bidding strategies, budget allocation, and cost management
            </p>
          </Link>
          <Link to="/google-ads-targeting" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">04</div>
            <h2 className="google-ads-hub-card-title">Targeting</h2>
            <p className="google-ads-hub-card-description">
              Audience targeting, demographics, keywords, and placements
            </p>
          </Link>
          <Link to="/google-ads-assets" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">05</div>
            <h2 className="google-ads-hub-card-title">Assets</h2>
            <p className="google-ads-hub-card-description">
              Sitelinks, callouts, structured snippets, and ad extensions
            </p>
          </Link>
          <Link to="/google-ads-creatives" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">06</div>
            <h2 className="google-ads-hub-card-title">Creatives</h2>
            <p className="google-ads-hub-card-description">
              Ad copywriting, visual design, and creative best practices
            </p>
          </Link>
          <Link to="/google-ads-tracking" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">07</div>
            <h2 className="google-ads-hub-card-title">Tracking</h2>
            <p className="google-ads-hub-card-description">
              Conversion tracking, analytics integration, and attribution
            </p>
          </Link>
          <Link to="/google-ads-optimization" className="google-ads-hub-card">
            <div className="google-ads-hub-card-number">08</div>
            <h2 className="google-ads-hub-card-title">Optimization</h2>
            <p className="google-ads-hub-card-description">
              Performance analysis, testing strategies, and continuous improvement
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsHub
