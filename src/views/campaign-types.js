import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './campaign-types.css'

const CampaignTypes = (props) => {
  return (
    <div className="campaign-types-container">
      <Helmet>
        <title>Google Ads Campaign Types - PPC Atlas</title>
        <meta property="og:title" content="Google Ads Campaign Types - PPC Atlas" />
      </Helmet>
      <Navigation />
      
      <div className="campaign-types-hero">
        <div className="campaign-types-breadcrumb">
          <Link to="/google-ads-hub" className="breadcrumb-link">Google Ads Atlas</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Campaign Types</span>
        </div>
        <h1 className="campaign-types-title">Google Ads – Campaign Types</h1>
        <p className="campaign-types-subtitle">
          Choosing the Right Campaign Type for Your Goals
        </p>
      </div>

      <div className="campaign-types-content">
        <div className="content-wrapper">
          
          <section className="content-section">
            <p className="content-text">
              Google Ads offers multiple campaign types, each tailored to a specific business objective. Selecting the right type is critical because it defines ad formats, targeting options, bidding strategies, and placement networks. At a senior level, campaigns are the top layer of organization; each campaign contains ad groups with their own keywords, audiences, and creatives. Understanding campaign types allows you to align strategy with business goals and maximize return on ad spend (ROAS).
            </p>
            <img 
              src="/images/google-ads/ppc-analytics-dashboard.jpg" 
              alt="Campaign management dashboard"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">What You Will Learn in This Chapter</h2>
            <p className="content-text">By the end of this chapter, you will understand:</p>
            <ul className="content-list">
              <li>The core Google Ads campaign types and their purposes</li>
              <li>Best use cases for each type in different stages of the funnel</li>
              <li>How campaign types affect bidding, targeting, and creative strategy</li>
              <li>How senior PPC strategists integrate multiple campaign types into a holistic marketing system</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">1. Search Campaigns (Google Search Network)</h2>
            <p className="content-text">
              <strong>Description:</strong> Text ads appear on Google Search results when users search for relevant keywords, displayed at the top or bottom of results pages.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Capture high-intent traffic</li>
              <li>Reach users actively searching for products or services</li>
              <li>Ideal for direct response, lead generation, and e-commerce sales</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Keyword targeting: broad, phrase, exact, negative</li>
              <li>Ad extensions: sitelinks, callouts, structured snippets, call buttons</li>
              <li>Automated bidding: Maximize Conversions, Target CPA</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Selling specific products online</li>
              <li>Capturing professional service leads</li>
              <li>Driving website conversions from high-intent queries</li>
            </ul>
            <img 
              src="/images/google-ads/advertising-performance-charts.jpg" 
              alt="Search campaign performance metrics"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">2. Display Campaigns (Google Display Network)</h2>
            <p className="content-text">
              <strong>Description:</strong> Visual banner ads, responsive ads, or rich media ads appear across millions of websites, apps, and YouTube placements.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Brand awareness and consideration</li>
              <li>Reach users while browsing or watching content</li>
              <li>Remarketing to users who visited your site but didn't convert</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Audience targeting: in-market, affinity, custom intent, similar audiences</li>
              <li>Placement targeting: websites, categories</li>
              <li>Responsive display ads: auto-adjust size, format, appearance</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Introducing new products</li>
              <li>Retargeting previous visitors</li>
              <li>Driving traffic to landing pages for lead nurturing</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">3. Shopping Campaigns</h2>
            <p className="content-text">
              <strong>Description:</strong> E-commerce product ads with images, prices, and store names appear on Google Search and Shopping.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Drive product-specific traffic</li>
              <li>Increase purchase intent with visual ads</li>
              <li>Streamline promotion for large inventories</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Integration with Google Merchant Center</li>
              <li>Automated targeting by product attributes: category, brand, price</li>
              <li>Smart Shopping campaigns: AI optimizes across networks</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Retailers selling physical products</li>
              <li>Seasonal campaigns (Black Friday, holidays)</li>
              <li>Boosting visibility of high-priority SKUs</li>
            </ul>
            <img 
              src="/images/google-ads/digital-marketing-workspace.jpg" 
              alt="E-commerce campaign workspace"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">4. Video Campaigns (YouTube & Partners)</h2>
            <p className="content-text">
              <strong>Description:</strong> Video ads appear on YouTube, YouTube Shorts, and partner sites.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Build brand awareness and engagement</li>
              <li>Complement search and display campaigns with multimedia content</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Ad formats: skippable in-stream, non-skippable, bumper, discovery ads</li>
              <li>Targeting: demographics, interests, in-market audiences, placements</li>
              <li>Bidding: CPV, CPM, maximize conversions</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Brand/product launches</li>
              <li>Tutorials, demos, or storytelling</li>
              <li>Retargeting site visitors with video messages</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">5. Performance Max Campaigns</h2>
            <p className="content-text">
              <strong>Description:</strong> AI-driven campaigns delivering ads across all Google networks: Search, Display, YouTube, Gmail, and Discover.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Maximize conversions or revenue</li>
              <li>Simplify management by consolidating multiple networks</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Automated bidding, creative, targeting</li>
              <li>Requires assets: text, images, logos, videos</li>
              <li>Performance reporting by conversion type and network</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Fully automated omnichannel campaigns</li>
              <li>Rapid scaling across networks</li>
              <li>Testing new products or markets with AI optimization</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">6. Discovery Campaigns</h2>
            <p className="content-text">
              <strong>Description:</strong> Native, visually engaging ads appear in Google feeds: YouTube Home, Gmail Promotions, Discover.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Reach users in the discovery phase</li>
              <li>Generate awareness and engagement</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Native ad formats blending with feed content</li>
              <li>Audience targeting: in-market, custom intent, similar audiences</li>
              <li>Automated creative optimization</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Driving traffic for lifestyle or e-commerce brands</li>
              <li>Expanding brand presence to non-searching audiences</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">7. Local Campaigns</h2>
            <p className="content-text">
              <strong>Description:</strong> Promote physical stores or services across Google Search, Maps, Display, and YouTube.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Drive foot traffic</li>
              <li>Highlight store locations and business attributes</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Automated ad placements</li>
              <li>Call-to-action buttons: directions, calls, website visits</li>
              <li>Google My Business integration</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Retail, restaurants, service providers</li>
              <li>Local promotions or events</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">8. App Campaigns</h2>
            <p className="content-text">
              <strong>Description:</strong> Promote mobile apps across Search, Play Store, YouTube, Display, and Discovery.
            </p>
            <p className="content-text"><strong>Purpose:</strong></p>
            <ul className="content-list">
              <li>Increase downloads or engagement</li>
              <li>Drive in-app actions, subscriptions, or retention</li>
            </ul>
            <p className="content-text"><strong>Key Features:</strong></p>
            <ul className="content-list">
              <li>Bidding for installs (CPI) or in-app conversions</li>
              <li>Automated targeting and creative optimization</li>
              <li>Requires app assets: text, images, videos</li>
            </ul>
            <p className="content-text"><strong>Best Use Cases:</strong></p>
            <ul className="content-list">
              <li>Mobile games or SaaS apps</li>
              <li>Driving downloads and active user engagement</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="section-heading">Senior-Level Takeaways</h2>
            <ul className="content-list">
              <li><strong>Campaign type determines ad formats, targeting, and bidding levers</strong></li>
              <li><strong>Align campaign types with funnel stages:</strong>
                <ul style={{marginTop: '10px', marginLeft: '20px'}}>
                  <li>Search → high-intent, conversion-driven</li>
                  <li>Display & Discovery → awareness and engagement</li>
                  <li>Shopping → product-level conversions</li>
                  <li>Video → storytelling and recall</li>
                  <li>Performance Max → omnichannel automation</li>
                  <li>Local & App → location- or app-specific objectives</li>
                </ul>
              </li>
              <li><strong>Integrated approach:</strong> Senior strategists often combine multiple types to build a holistic marketing ecosystem for maximum reach, conversions, and ROAS</li>
              <li><strong>Key principle:</strong> Campaigns are not isolated silos; they generate signals, feed each other, and scale systematically</li>
            </ul>
            <div className="highlight-box rule-box">
              <h3 className="highlight-title">Rule of Thumb:</h3>
              <p className="content-text">
                "Campaigns are not isolated silos; they generate signals, feed each other, and scale systematically."
              </p>
            </div>
          </section>

          <div className="content-navigation">
            <Link to="/google-ads-foundations" className="nav-button nav-back">
              ← Back: Foundations
            </Link>
            <Link to="/google-ads-bidding" className="nav-button nav-next">
              Next: Bidding →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CampaignTypes
