import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './meta-ads-foundations.css'

const MetaAdsFoundations = (props) => {
  return (
    <div className="meta-ads-foundations-container">
      <Helmet>
        <title>Foundations - Meta Ads - PPC Atlas</title>
        <meta property="og:title" content="Foundations - Meta Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="meta-ads-foundations-hero">
        <div className="meta-ads-foundations-breadcrumb">
          <span>Meta Ads</span>
          <span className="meta-ads-foundations-separator">/</span>
          <span>Foundations</span>
        </div>
        <h1 className="meta-ads-foundations-title">Foundations</h1>
        <p className="meta-ads-foundations-subtitle">
          Master the fundamentals of Meta advertising platform
        </p>
      </div>
      <div className="meta-ads-foundations-content">
        <div className="meta-ads-foundations-wrapper">
          <section className="meta-ads-foundations-section">
            <h2 className="meta-ads-foundations-heading">Understanding Meta Ads Platform</h2>
            <p className="meta-ads-foundations-text">
              Meta Ads Manager is the comprehensive advertising platform for Facebook, Instagram, Messenger, and Audience Network. It provides powerful tools for creating, managing, and optimizing campaigns across Meta's family of apps. Understanding the platform's structure and capabilities is essential for successful advertising. The platform uses advanced machine learning to deliver ads to the right people at the right time.
            </p>
            <div className="meta-ads-foundations-image-container">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop" 
                alt="Meta advertising platform interface"
                className="meta-ads-foundations-image"
              />
            </div>
          </section>

          <section className="meta-ads-foundations-section">
            <h2 className="meta-ads-foundations-heading">Account Structure</h2>
            <p className="meta-ads-foundations-text">
              Meta Ads follows a three-tier structure: Business Manager at the top, Ad Accounts in the middle, and Campaigns at the campaign level. Each campaign contains ad sets, which hold individual ads. This hierarchical structure allows for organized management and precise budget control. Proper account structure is crucial for scaling campaigns and maintaining clear reporting.
            </p>
            <div className="meta-ads-foundations-highlight">
              <h3 className="meta-ads-foundations-highlight-title">Account Structure Best Practices</h3>
              <p className="meta-ads-foundations-text">
                Use Business Manager to centralize assets and team access. Organize campaigns by objective or product line. Keep ad sets focused on specific audiences. Test multiple ad creatives within each ad set for optimal performance.
              </p>
            </div>
          </section>

          <section className="meta-ads-foundations-section">
            <h2 className="meta-ads-foundations-heading">Campaign Objectives</h2>
            <p className="meta-ads-foundations-text">
              Meta offers campaign objectives aligned with different stages of the customer journey: Awareness (Brand Awareness, Reach), Consideration (Traffic, Engagement, App Installs, Video Views, Lead Generation, Messages), and Conversion (Conversions, Catalog Sales, Store Traffic). Choosing the right objective is critical as it determines how Meta's algorithm optimizes your ad delivery and what actions you can optimize for.
            </p>
            <div className="meta-ads-foundations-image-container">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="Campaign objectives overview"
                className="meta-ads-foundations-image"
              />
            </div>
          </section>

          <section className="meta-ads-foundations-section">
            <h2 className="meta-ads-foundations-heading">Ad Placements</h2>
            <p className="meta-ads-foundations-text">
              Meta Ads can appear across multiple placements: Facebook Feed, Instagram Feed, Instagram Stories, Facebook Stories, Messenger, Audience Network, and more. Automatic placements let Meta's algorithm optimize across all available options, while manual placements give you control over where ads appear. Each placement has unique specifications and best practices for creative assets.
            </p>
          </section>

          <section className="meta-ads-foundations-section">
            <h2 className="meta-ads-foundations-heading">Business Manager Setup</h2>
            <p className="meta-ads-foundations-text">
              Business Manager is Meta's centralized platform for managing ad accounts, pages, pixels, catalogs, and team members. It provides advanced features for agencies and businesses managing multiple assets. Proper setup includes verifying your business, adding team members with appropriate permissions, connecting payment methods, and organizing assets logically for efficient campaign management.
            </p>
            <div className="meta-ads-foundations-image-container">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop" 
                alt="Business Manager dashboard"
                className="meta-ads-foundations-image"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MetaAdsFoundations
