import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-assets.css'

const GoogleAdsAssets = (props) => {
  return (
    <div className="google-ads-assets-container">
      <Helmet>
        <title>Assets - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Assets - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-assets-hero">
        <div className="google-ads-assets-breadcrumb">
          <span>Google Ads</span>
          <span className="google-ads-assets-separator">/</span>
          <span>Assets</span>
        </div>
        <h1 className="google-ads-assets-title">Assets</h1>
        <p className="google-ads-assets-subtitle">
          Enhance your ads with extensions and assets that improve visibility and performance
        </p>
      </div>
      <div className="google-ads-assets-content">
        <div className="google-ads-assets-wrapper">
          <section className="google-ads-assets-section">
            <h2 className="google-ads-assets-heading">Understanding Ad Assets</h2>
            <p className="google-ads-assets-text">
              Ad assets (formerly known as ad extensions) are additional pieces of information that expand your ad and provide users with more ways to interact with your business. Assets make your ads more prominent on the search results page, typically improving click-through rates and overall performance. Google shows assets when they predict they'll improve your ad's performance.
            </p>
            <div className="google-ads-assets-image-container">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop" 
                alt="Enhanced ad with multiple assets"
                className="google-ads-assets-image"
              />
            </div>
          </section>

          <section className="google-ads-assets-section">
            <h2 className="google-ads-assets-heading">Sitelink Assets</h2>
            <p className="google-ads-assets-text">
              Sitelinks are additional links below your main ad that direct users to specific pages on your website. They allow you to promote multiple offerings in a single ad and give users more reasons to choose your business. Each sitelink includes a headline and optional description lines. Effective sitelinks highlight key products, services, or important pages like testimonials, contact information, or special offers.
            </p>
            <div className="google-ads-assets-highlight">
              <h3 className="google-ads-assets-highlight-title">Sitelink Best Practices</h3>
              <p className="google-ads-assets-text">
                Create at least 4-6 sitelinks to maximize showing opportunities. Use action-oriented text that clearly describes where users will land. Test different sitelinks to find what resonates with your audience and drives the best results.
              </p>
            </div>
          </section>

          <section className="google-ads-assets-section">
            <h2 className="google-ads-assets-heading">Callout Assets</h2>
            <p className="google-ads-assets-text">
              Callout assets are short snippets of text that highlight key selling points, such as "Free Shipping," "24/7 Customer Support," or "Price Match Guarantee." Unlike sitelinks, callouts are not clickable and don't take up much space, making them perfect for showcasing multiple value propositions. They appear below your ad description and help differentiate your business from competitors.
            </p>
            <div className="google-ads-assets-image-container">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop" 
                alt="Marketing callouts and value propositions"
                className="google-ads-assets-image"
              />
            </div>
          </section>

          <section className="google-ads-assets-section">
            <h2 className="google-ads-assets-heading">Structured Snippet Assets</h2>
            <p className="google-ads-assets-text">
              Structured snippets showcase specific aspects of your products or services in a predefined format. Choose from headers like "Brands," "Services," "Types," "Styles," or "Amenities," then list relevant items. These assets provide context about what you offer and help users quickly determine if your business matches their needs. They're particularly effective for businesses with diverse product lines or service offerings.
            </p>
            <div className="google-ads-assets-highlight">
              <h3 className="google-ads-assets-highlight-title">Structured Snippet Guidelines</h3>
              <p className="google-ads-assets-text">
                Use headers that accurately represent your business category. List at least 4 values per header for better performance. Keep values concise and avoid repetition across different snippet types.
              </p>
            </div>
          </section>

          <section className="google-ads-assets-section">
            <h2 className="google-ads-assets-heading">Call and Location Assets</h2>
            <p className="google-ads-assets-text">
              Call assets add a phone number or call button to your ads, making it easy for mobile users to contact your business directly. Location assets show your business address, phone number, and a map marker with your ad, helping users find your physical location. These assets are crucial for local businesses and service providers who want to drive phone calls or in-store visits.
            </p>
            <div className="google-ads-assets-image-container">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop" 
                alt="Mobile device showing call and location features"
                className="google-ads-assets-image"
              />
            </div>
          </section>

          <section className="google-ads-assets-section">
            <h2 className="google-ads-assets-heading">Image and Price Assets</h2>
            <p className="google-ads-assets-text">
              Image assets add visual content to your text ads, making them more engaging and eye-catching. Price assets showcase your products or services with their prices directly in the ad, allowing users to browse offerings before clicking. These visual assets help your ads stand out on the search results page and can significantly improve engagement rates when used strategically.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsAssets
