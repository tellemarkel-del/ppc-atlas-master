import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-bidding.css'

const GoogleAdsBidding = (props) => {
  return (
    <div className="google-ads-bidding-container">
      <Helmet>
        <title>Bidding & Budget - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Bidding & Budget - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-bidding-hero">
        <div className="google-ads-bidding-breadcrumb">
          <span>Google Ads</span>
          <span className="google-ads-bidding-separator">/</span>
          <span>Bidding & Budget</span>
        </div>
        <h1 className="google-ads-bidding-title">Bidding & Budget</h1>
        <p className="google-ads-bidding-subtitle">
          Master bidding strategies and budget allocation for optimal campaign performance
        </p>
      </div>
      <div className="google-ads-bidding-content">
        <div className="google-ads-bidding-wrapper">
          <section className="google-ads-bidding-section">
            <h2 className="google-ads-bidding-heading">Understanding Bidding Strategies</h2>
            <p className="google-ads-bidding-text">
              Google Ads bidding strategies determine how you pay for users to interact with your ads. The right bidding strategy depends on your campaign goals, whether you're focused on clicks, impressions, conversions, or views. Modern bidding leverages machine learning to optimize performance in real-time based on auction-time signals.
            </p>
            <div className="google-ads-bidding-image-container">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
                alt="Analytics dashboard showing bidding performance"
                className="google-ads-bidding-image"
              />
            </div>
          </section>

          <section className="google-ads-bidding-section">
            <h2 className="google-ads-bidding-heading">Smart Bidding Strategies</h2>
            <p className="google-ads-bidding-text">
              Smart Bidding uses machine learning to optimize conversions or conversion value in each auction. These automated strategies include Target CPA, Target ROAS, Maximize Conversions, and Maximize Conversion Value. They analyze millions of signals at auction time to set the optimal bid for each query.
            </p>
            <div className="google-ads-bidding-highlight">
              <h3 className="google-ads-bidding-highlight-title">Key Smart Bidding Features</h3>
              <p className="google-ads-bidding-text">
                Advanced machine learning algorithms consider device, location, time of day, remarketing lists, ad characteristics, and interface language to predict conversion likelihood and adjust bids accordingly.
              </p>
            </div>
          </section>

          <section className="google-ads-bidding-section">
            <h2 className="google-ads-bidding-heading">Manual vs Automated Bidding</h2>
            <p className="google-ads-bidding-text">
              Manual bidding gives you complete control over your bids at the keyword or ad group level. This approach works well for experienced advertisers with specific bid requirements or limited historical data. Automated bidding, on the other hand, uses Google's algorithms to set bids based on your performance goals, saving time and often improving results through advanced optimization.
            </p>
            <div className="google-ads-bidding-image-container">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="Comparison chart between manual and automated bidding"
                className="google-ads-bidding-image"
              />
            </div>
          </section>

          <section className="google-ads-bidding-section">
            <h2 className="google-ads-bidding-heading">Budget Allocation Strategies</h2>
            <p className="google-ads-bidding-text">
              Effective budget allocation ensures your campaigns have sufficient funding to achieve their objectives without overspending. Daily budgets control spend on a day-to-day basis, while shared budgets distribute funding across multiple campaigns. Understanding budget pacing and the relationship between budget and bidding is crucial for maximizing return on ad spend.
            </p>
            <div className="google-ads-bidding-highlight">
              <h3 className="google-ads-bidding-highlight-title">Budget Optimization Tips</h3>
              <p className="google-ads-bidding-text">
                Monitor your budget utilization closely. Campaigns that consistently hit their budget limit may be missing opportunities. Consider using portfolio bid strategies to optimize across campaigns and reallocate budget to top performers.
              </p>
            </div>
          </section>

          <section className="google-ads-bidding-section">
            <h2 className="google-ads-bidding-heading">Bid Adjustments</h2>
            <p className="google-ads-bidding-text">
              Bid adjustments allow you to increase or decrease your bids based on specific conditions such as device type, location, time of day, or audience. These adjustments give you granular control over when and where your ads appear, helping you allocate budget more efficiently to higher-performing segments.
            </p>
            <div className="google-ads-bidding-image-container">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
                alt="Bid adjustment interface example"
                className="google-ads-bidding-image"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsBidding
