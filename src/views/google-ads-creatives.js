import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-creatives.css'

const GoogleAdsCreatives = (props) => {
  return (
    <div className="google-ads-creatives-container">
      <Helmet>
        <title>Creatives - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Creatives - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-creatives-hero">
        <div className="google-ads-creatives-breadcrumb">
          <span>Google Ads</span>
          <span className="google-ads-creatives-separator">/</span>
          <span>Creatives</span>
        </div>
        <h1 className="google-ads-creatives-title">Creatives</h1>
        <p className="google-ads-creatives-subtitle">
          Craft compelling ad copy and visuals that drive engagement and conversions
        </p>
      </div>
      <div className="google-ads-creatives-content">
        <div className="google-ads-creatives-wrapper">
          <section className="google-ads-creatives-section">
            <h2 className="google-ads-creatives-heading">The Art of Ad Copywriting</h2>
            <p className="google-ads-creatives-text">
              Effective ad copy speaks directly to your audience's needs and motivations. It combines clear value propositions with compelling calls-to-action. Great ad copy is concise, relevant, and differentiated from competitors. Focus on benefits over features, address user intent, and create urgency when appropriate. Your headlines should capture attention while your descriptions provide the context needed to drive clicks.
            </p>
            <div className="google-ads-creatives-image-container">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop" 
                alt="Creative team brainstorming ad concepts"
                className="google-ads-creatives-image"
              />
            </div>
          </section>

          <section className="google-ads-creatives-section">
            <h2 className="google-ads-creatives-heading">Responsive Search Ads</h2>
            <p className="google-ads-creatives-text">
              Responsive Search Ads (RSAs) are Google's default search ad format, allowing you to provide multiple headlines and descriptions that Google's algorithms test and optimize in various combinations. This automation maximizes your ad's relevance to each search query. Provide diverse headlines that highlight different value propositions, and write descriptions that work well with any headline combination. Pin important elements only when necessary to maintain flexibility.
            </p>
            <div className="google-ads-creatives-highlight">
              <h3 className="google-ads-creatives-highlight-title">RSA Optimization Tips</h3>
              <p className="google-ads-creatives-text">
                Create at least 8-10 unique headlines and 3-4 descriptions. Mix branded and non-branded messaging. Include keywords naturally but avoid repetition. Monitor asset performance reports to identify top performers and underperformers.
              </p>
            </div>
          </section>

          <section className="google-ads-creatives-section">
            <h2 className="google-ads-creatives-heading">Display Ad Design Principles</h2>
            <p className="google-ads-creatives-text">
              Display ads require strong visual design to capture attention in a crowded digital landscape. Use high-quality images, maintain brand consistency, and ensure text is readable across all sizes. Your design should communicate the key message instantly, even without reading the copy. Responsive display ads automatically adjust their size, appearance, and format to fit available ad spaces, making them versatile and efficient.
            </p>
            <div className="google-ads-creatives-image-container">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop" 
                alt="Designer working on display ad layouts"
                className="google-ads-creatives-image"
              />
            </div>
          </section>

          <section className="google-ads-creatives-section">
            <h2 className="google-ads-creatives-heading">Video Ad Storytelling</h2>
            <p className="google-ads-creatives-text">
              Video ads on YouTube and partner sites require compelling storytelling within limited timeframes. Capture attention in the first few seconds, deliver your core message quickly, and include a clear call-to-action. Whether you're creating skippable in-stream ads, bumper ads, or video discovery ads, tailor your content to the format and viewer context. Strong video ads balance entertainment with commercial messaging, creating memorable brand moments.
            </p>
            <div className="google-ads-creatives-highlight">
              <h3 className="google-ads-creatives-highlight-title">Video Creative Best Practices</h3>
              <p className="google-ads-creatives-text">
                Hook viewers in the first 5 seconds. Use captions for sound-off viewing. Test different video lengths. Include branding early and often. End with a strong, specific call-to-action that tells viewers exactly what to do next.
              </p>
            </div>
          </section>

          <section className="google-ads-creatives-section">
            <h2 className="google-ads-creatives-heading">Creative Testing Framework</h2>
            <p className="google-ads-creatives-text">
              Systematic creative testing drives continuous improvement in ad performance. Test one variable at a time to understand what truly impacts results. Common elements to test include headlines, descriptions, imagery, calls-to-action, and offers. Use ad rotation settings appropriately, give tests sufficient time to reach statistical significance, and document learnings to inform future creative development. The best advertisers never stop testing.
            </p>
            <div className="google-ads-creatives-image-container">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="A/B testing results and analytics"
                className="google-ads-creatives-image"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsCreatives
