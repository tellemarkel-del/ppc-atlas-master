import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './campaign-types.css'

const CampaignTypes = (props) => {
  return (
    <div className="campaign-types-container">
      <Helmet>
        <title>Campaign Types - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Campaign Types - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="campaign-types-hero">
        <div className="campaign-types-breadcrumb">
          <span>Google Ads</span>
          <span className="campaign-types-separator">/</span>
          <span>Campaign Types</span>
        </div>
        <h1 className="campaign-types-title">Campaign Types</h1>
        <p className="campaign-types-subtitle">
          Explore all Google Ads campaign types and choose the right one for your goals
        </p>
      </div>
      <div className="campaign-types-content">
        <div className="campaign-types-wrapper">
          <section className="campaign-types-section">
            <h2 className="campaign-types-heading">Search Campaigns</h2>
            <p className="campaign-types-text">
              Search campaigns display text ads on Google Search results when users search for keywords related to your business. They're ideal for capturing high-intent traffic as users are actively searching for solutions. Search campaigns offer precise targeting through keyword selection and match types, allowing you to connect with customers at the exact moment they're looking for what you offer.
            </p>
            <div className="campaign-types-image-container">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=600&fit=crop" 
                alt="Google Search campaign results"
                className="campaign-types-image"
              />
            </div>
          </section>

          <section className="campaign-types-section">
            <h2 className="campaign-types-heading">Display Campaigns</h2>
            <p className="campaign-types-text">
              Display campaigns show visual ads across Google's Display Network, reaching over 90% of internet users worldwide. These campaigns use images, videos, and rich media to build brand awareness and consideration. Display targeting options include demographics, interests, placements, and remarketing. They're perfect for reaching potential customers earlier in their buying journey and staying top-of-mind throughout the consideration phase.
            </p>
            <div className="campaign-types-highlight">
              <h3 className="campaign-types-highlight-title">Display Campaign Best Practices</h3>
              <p className="campaign-types-text">
                Use responsive display ads for maximum reach. Create compelling visual assets that align with your brand. Layer targeting options for precision. Implement remarketing to re-engage previous visitors. Test different audience combinations to find what works best.
              </p>
            </div>
          </section>

          <section className="campaign-types-section">
            <h2 className="campaign-types-heading">Video Campaigns</h2>
            <p className="campaign-types-text">
              Video campaigns run on YouTube and across Google's video partner sites. Options include skippable in-stream ads, non-skippable ads, bumper ads, and video discovery ads. Video is powerful for storytelling, product demonstrations, and building emotional connections. With billions of hours watched daily on YouTube, video campaigns offer massive reach and engagement opportunities for brands willing to invest in quality video content.
            </p>
            <div className="campaign-types-image-container">
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop" 
                alt="Video advertising production"
                className="campaign-types-image"
              />
            </div>
          </section>

          <section className="campaign-types-section">
            <h2 className="campaign-types-heading">Shopping Campaigns</h2>
            <p className="campaign-types-text">
              Shopping campaigns showcase your products with images, prices, and store information directly in search results. They're essential for e-commerce businesses, driving qualified traffic by showing users exactly what they're looking for before they click. Shopping campaigns use product feed data from Google Merchant Center and can run as Standard Shopping or Smart Shopping campaigns with automated bidding and placement optimization.
            </p>
            <div className="campaign-types-highlight">
              <h3 className="campaign-types-highlight-title">Shopping Campaign Essentials</h3>
              <p className="campaign-types-text">
                Optimize your product feed with accurate titles, descriptions, and high-quality images. Use custom labels for strategic bid management. Monitor search terms to identify opportunities. Segment by product performance to allocate budget effectively.
              </p>
            </div>
          </section>

          <section className="campaign-types-section">
            <h2 className="campaign-types-heading">Performance Max Campaigns</h2>
            <p className="campaign-types-text">
              Performance Max is Google's newest campaign type, using automation to deliver ads across all Google properties including Search, Display, YouTube, Gmail, and Discover. It leverages machine learning to optimize performance toward your conversion goals. Performance Max requires fewer manual inputs but needs high-quality creative assets and clear conversion tracking. It's ideal for advertisers looking to maximize reach and conversions while minimizing manual campaign management.
            </p>
            <div className="campaign-types-image-container">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
                alt="Performance Max automation dashboard"
                className="campaign-types-image"
              />
            </div>
          </section>

          <section className="campaign-types-section">
            <h2 className="campaign-types-heading">App Campaigns</h2>
            <p className="campaign-types-text">
              App campaigns promote mobile app installs and in-app actions across Google's properties. They use machine learning to automatically optimize ad creative, targeting, and bidding to drive app installations and engagement. App campaigns simplify mobile app promotion by automating most aspects of campaign management, making it easier for app developers and marketers to grow their user base and drive valuable in-app actions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CampaignTypes
