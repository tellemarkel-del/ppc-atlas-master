import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const GoogleAdsFoundations = (props) => {
  return (
    <div className="google-ads-foundations-container">
      <Helmet>
        <title>Foundations - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Foundations - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-foundations-hero">
        <div className="google-ads-foundations-breadcrumb">
          <span>Google Ads</span>
          <span className="google-ads-foundations-separator">/</span>
          <span>Foundations</span>
        </div>
        <h1 className="google-ads-foundations-title">Foundations</h1>
        <p className="google-ads-foundations-subtitle">
          Master the core concepts and fundamentals of Google Ads platform
        </p>
      </div>
      <div className="google-ads-foundations-content">
        <div className="google-ads-foundations-wrapper">
          <section className="google-ads-foundations-section">
            <h2 className="google-ads-foundations-heading">Understanding Google Ads Platform</h2>
            <p className="google-ads-foundations-text">
              Google Ads is the world's largest online advertising platform, enabling businesses to reach potential customers across Google Search, YouTube, Gmail, and millions of partner websites. The platform operates on a pay-per-click model where advertisers bid on keywords and pay only when users interact with their ads. Understanding the platform's structure and mechanics is fundamental to running successful campaigns.
            </p>
            <div className="google-ads-foundations-image-container">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="Google Ads platform overview"
                className="google-ads-foundations-image"
              />
            </div>
          </section>

          <section className="google-ads-foundations-section">
            <h2 className="google-ads-foundations-heading">Account Structure</h2>
            <p className="google-ads-foundations-text">
              Google Ads follows a hierarchical structure with three main levels: Account, Campaigns, and Ad Groups. At the account level, you manage billing and access. Campaigns define budget, targeting, and network settings. Ad Groups contain keywords and ads organized around themes. Proper structure is crucial for organization, budget control, and performance optimization.
            </p>
            <div className="google-ads-foundations-highlight">
              <h3 className="google-ads-foundations-highlight-title">Account Structure Best Practices</h3>
              <p className="google-ads-foundations-text">
                Organize campaigns by product line or goal. Keep ad groups tightly themed with 10-20 related keywords. Use consistent naming conventions. Separate brand and non-brand campaigns. Structure enables efficient management as your account scales.
              </p>
            </div>
          </section>

          <section className="google-ads-foundations-section">
            <h2 className="google-ads-foundations-heading">How Google Ads Auction Works</h2>
            <p className="google-ads-foundations-text">
              Every time someone searches on Google, an auction determines which ads appear and in what order. The auction considers your bid, Quality Score, and ad extensions to calculate Ad Rank. Higher Ad Rank means better position. Quality Score rewards relevant, high-quality ads with lower costs and better positions. Understanding the auction mechanics helps you compete effectively while controlling costs.
            </p>
            <div className="google-ads-foundations-image-container">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
                alt="Google Ads auction process"
                className="google-ads-foundations-image"
              />
            </div>
          </section>

          <section className="google-ads-foundations-section">
            <h2 className="google-ads-foundations-heading">Campaign Types Overview</h2>
            <p className="google-ads-foundations-text">
              Google Ads offers multiple campaign types to match different marketing objectives. Search campaigns show text ads on Google Search results. Display campaigns show visual ads across websites. Video campaigns run on YouTube. Shopping campaigns showcase products with images and prices. App campaigns promote mobile app installs. Performance Max uses automation across all Google properties. Each type serves specific goals and requires different strategies.
            </p>
          </section>

          <section className="google-ads-foundations-section">
            <h2 className="google-ads-foundations-heading">Quality Score Fundamentals</h2>
            <p className="google-ads-foundations-text">
              Quality Score is Google's rating of your ads, keywords, and landing pages on a 1-10 scale. It's based on expected click-through rate, ad relevance, and landing page experience. Higher Quality Scores lead to lower costs and better ad positions. Improving Quality Score requires creating highly relevant ads, selecting appropriate keywords, and optimizing landing pages to match user intent.
            </p>
            <div className="google-ads-foundations-image-container">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop" 
                alt="Quality Score components"
                className="google-ads-foundations-image"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsFoundations
