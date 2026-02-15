import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './meta-ads-hub.css'

const MetaAdsHub = (props) => {
  return (
    <div className="meta-ads-hub-container">
      <Helmet>
        <title>Meta Ads Hub - PPC Atlas</title>
        <meta property="og:title" content="Meta Ads Hub - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="meta-ads-hub-hero">
        <h1 className="meta-ads-hub-title">Meta Ads Hub</h1>
        <p className="meta-ads-hub-subtitle">
          Comprehensive knowledge base for Meta Ads professionals
        </p>
      </div>
      <div className="meta-ads-hub-content">
        <div className="meta-ads-hub-grid">
          <Link to="/meta-ads-foundations" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">01</div>
            <h2 className="meta-ads-hub-card-title">Foundations</h2>
            <p className="meta-ads-hub-card-description">
              Core concepts, account structure, and platform fundamentals
            </p>
          </Link>
          <Link to="/meta-ads-campaign-types" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">02</div>
            <h2 className="meta-ads-hub-card-title">Campaign Types</h2>
            <p className="meta-ads-hub-card-description">
              Awareness, Traffic, Engagement, Leads, Sales, and more
            </p>
          </Link>
          <Link to="/meta-ads-bidding" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">03</div>
            <h2 className="meta-ads-hub-card-title">Bidding & Budget</h2>
            <p className="meta-ads-hub-card-description">
              Bidding strategies, budget allocation, and cost management
            </p>
          </Link>
          <Link to="/meta-ads-targeting" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">04</div>
            <h2 className="meta-ads-hub-card-title">Targeting</h2>
            <p className="meta-ads-hub-card-description">
              Audience targeting, demographics, interests, and behaviors
            </p>
          </Link>
          <Link to="/meta-ads-assets" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">05</div>
            <h2 className="meta-ads-hub-card-title">Assets</h2>
            <p className="meta-ads-hub-card-description">
              Images, videos, carousel formats, and creative assets
            </p>
          </Link>
          <Link to="/meta-ads-creatives" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">06</div>
            <h2 className="meta-ads-hub-card-title">Creatives</h2>
            <p className="meta-ads-hub-card-description">
              Ad copywriting, visual design, and creative best practices
            </p>
          </Link>
          <Link to="/meta-ads-tracking" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">07</div>
            <h2 className="meta-ads-hub-card-title">Tracking</h2>
            <p className="meta-ads-hub-card-description">
              Pixel tracking, conversions API, and attribution windows
            </p>
          </Link>
          <Link to="/meta-ads-optimization" className="meta-ads-hub-card">
            <div className="meta-ads-hub-card-number">08</div>
            <h2 className="meta-ads-hub-card-title">Optimization</h2>
            <p className="meta-ads-hub-card-description">
              Performance analysis, testing strategies, and continuous improvement
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MetaAdsHub
