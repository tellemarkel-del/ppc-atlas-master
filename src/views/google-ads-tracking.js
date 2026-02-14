import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-tracking.css'

const GoogleAdsTracking = (props) => {
  return (
    <div className="google-ads-tracking-container">
      <Helmet>
        <title>Tracking - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Tracking - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-tracking-hero">
        <div className="google-ads-tracking-breadcrumb">
          <span>Google Ads</span>
          <span className="google-ads-tracking-separator">/</span>
          <span>Tracking</span>
        </div>
        <h1 className="google-ads-tracking-title">Tracking</h1>
        <p className="google-ads-tracking-subtitle">
          Measure performance accurately with comprehensive tracking and attribution
        </p>
      </div>
      <div className="google-ads-tracking-content">
        <div className="google-ads-tracking-wrapper">
          <section className="google-ads-tracking-section">
            <h2 className="google-ads-tracking-heading">Conversion Tracking Fundamentals</h2>
            <p className="google-ads-tracking-text">
              Conversion tracking is the foundation of successful Google Ads campaigns. It allows you to measure the actions that matter to your business, whether that's purchases, form submissions, phone calls, or app downloads. Without accurate conversion tracking, you're operating blind, unable to optimize bids or measure true ROI. Proper implementation requires adding Google's tracking code to your website and defining what constitutes a valuable conversion.
            </p>
            <div className="google-ads-tracking-image-container">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
                alt="Analytics dashboard showing conversion metrics"
                className="google-ads-tracking-image"
              />
            </div>
          </section>

          <section className="google-ads-tracking-section">
            <h2 className="google-ads-tracking-heading">Google Analytics Integration</h2>
            <p className="google-ads-tracking-text">
              Integrating Google Ads with Google Analytics provides deeper insights into user behavior beyond the click. You can analyze how users navigate your site, which pages drive conversions, and how different traffic sources compare. Import Analytics goals into Google Ads to optimize toward on-site engagement metrics. Use Analytics audiences for remarketing and to understand the full customer journey from awareness to conversion.
            </p>
            <div className="google-ads-tracking-highlight">
              <h3 className="google-ads-tracking-highlight-title">Analytics Setup Essentials</h3>
              <p className="google-ads-tracking-text">
                Link your Google Ads and Analytics accounts. Enable auto-tagging in Google Ads. Import conversion goals from Analytics. Set up Enhanced Ecommerce tracking for online stores. Create custom reports to analyze campaign performance in detail.
              </p>
            </div>
          </section>

          <section className="google-ads-tracking-section">
            <h2 className="google-ads-tracking-heading">Enhanced Conversions</h2>
            <p className="google-ads-tracking-text">
              Enhanced conversions improve the accuracy of conversion measurement by sending hashed first-party customer data to Google. This helps recover conversions that might otherwise be lost due to browser restrictions or incomplete data. Enhanced conversions work by supplementing existing conversion tags with hashed customer information like email addresses, providing more reliable attribution in a privacy-focused digital landscape.
            </p>
            <div className="google-ads-tracking-image-container">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop" 
                alt="Data security and privacy-compliant tracking"
                className="google-ads-tracking-image"
              />
            </div>
          </section>

          <section className="google-ads-tracking-section">
            <h2 className="google-ads-tracking-heading">Attribution Models</h2>
            <p className="google-ads-tracking-text">
              Attribution models determine how credit for conversions is assigned to touchpoints in the customer journey. Last-click attribution gives all credit to the final click before conversion, while data-driven attribution uses machine learning to distribute credit across all interactions. Understanding and choosing the right attribution model is crucial for accurately evaluating channel performance and optimizing budget allocation across campaigns.
            </p>
            <div className="google-ads-tracking-highlight">
              <h3 className="google-ads-tracking-highlight-title">Choosing Attribution Models</h3>
              <p className="google-ads-tracking-text">
                Last-click works for simple, single-touch journeys. First-click highlights awareness drivers. Linear distributes credit equally. Data-driven is best for accounts with sufficient conversion volume, as it provides the most accurate view of each touchpoint's true impact.
              </p>
            </div>
          </section>

          <section className="google-ads-tracking-section">
            <h2 className="google-ads-tracking-heading">Offline Conversion Tracking</h2>
            <p className="google-ads-tracking-text">
              Many businesses complete sales offline through phone calls, in-store visits, or sales teams. Offline conversion tracking allows you to connect online clicks to offline outcomes by uploading conversion data back into Google Ads. This complete view of the customer journey enables smarter bidding decisions and more accurate ROI measurement. Set up call tracking, use unique identifiers, and establish processes for regular data uploads.
            </p>
            <div className="google-ads-tracking-image-container">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop" 
                alt="CRM and offline conversion data integration"
                className="google-ads-tracking-image"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsTracking
