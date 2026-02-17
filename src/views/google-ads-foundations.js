import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const GoogleAdsFoundations = (props) => {
  return (
    <div className="foundations-container">
      <Helmet>
        <title>Google Ads Foundations - PPC Atlas</title>
        <meta property="og:title" content="Google Ads Foundations - PPC Atlas" />
      </Helmet>
      <Navigation />
      
      <div className="foundations-hero">
        <div className="foundations-breadcrumb">
          <Link to="/google-ads-hub" className="breadcrumb-link">Google Ads Atlas</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Foundations</span>
        </div>
        <h1 className="foundations-title">Google Ads – Foundations</h1>
        <p className="foundations-subtitle">
          Understanding the Core of Google Ads
        </p>
      </div>

      <div className="foundations-content">
        <div className="content-wrapper">
          
          <section className="content-section">
            <p className="content-text">
              Google Ads is Google's digital advertising platform, originally launched as Google AdWords in 2000 and rebranded in 2018. At its core, it connects advertisers with users at the precise moment they show intent, whether searching for information, products, or services. Unlike Meta Ads, which is largely demand creation, Google Ads is intent-driven—it captures existing demand. This distinction is foundational for understanding strategy and performance.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" 
              alt="Google Ads Platform"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">What You Will Learn in This Chapter</h2>
            <p className="content-text">By the end of this chapter, you will understand:</p>
            <ul className="content-list">
              <li>How Google Ads works as an intent-based marketing platform</li>
              <li>The pricing and auction mechanics that drive ad placement</li>
              <li>Key networks and channels within Google Ads</li>
              <li>How Google Ads can be used to achieve different business objectives</li>
              <li>The difference between performance-based advertising and content-driven advertising</li>
            </ul>
            <div className="highlight-box">
              <p className="content-text">
                This chapter builds the mental model you need to think like a senior-level PPC strategist on Google Ads.
              </p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-heading">1. Google Ads as an Intention-Based Platform</h2>
            <p className="content-text">
              Google Ads is designed to capture existing user intent, not create it. Every time someone performs a search or interacts with content across Google's properties, an auction triggers in real time. Winning ads are determined not solely by bid, but by a combination of:
            </p>
            <ul className="content-list">
              <li><strong>Ad relevance:</strong> How closely the ad matches the search or content context</li>
              <li><strong>Landing page experience:</strong> Quality, speed, and relevance of the post-click experience</li>
              <li><strong>Expected CTR:</strong> Historical click-through rates for similar queries or audiences</li>
            </ul>
            <div className="highlight-box">
              <p className="content-text">
                This means even a smaller budget can outperform competitors if the ads are highly relevant and user-friendly, making quality just as important as spend.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
              alt="Intent-based advertising"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">2. Pricing & Performance Model</h2>
            <p className="content-text">
              Google Ads operates on a performance-based pricing model, giving advertisers precise control over ROI:
            </p>
            <ul className="content-list">
              <li><strong>CPC (Cost Per Click):</strong> Pay only when someone clicks on your ad</li>
              <li><strong>CPM (Cost Per Mille / 1,000 impressions):</strong> Pay per impression, ideal for brand awareness</li>
              <li><strong>CPA (Cost Per Acquisition / Conversion):</strong> Pay when a desired action, like a purchase or lead, is completed</li>
            </ul>
            <p className="content-text">
              At a senior level, this model means that every ad must justify its spend through measurable results, and small improvements in relevance or conversion can dramatically reduce costs.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
              alt="Performance metrics"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">3. Networks & Channels</h2>
            <p className="content-text">
              Google Ads is more than just search: it provides multiple channels for reaching users throughout the customer journey:
            </p>
            <ul className="content-list">
              <li><strong>Search Network:</strong> Ads appear alongside Google search results, capturing high-intent users</li>
              <li><strong>Display Network:</strong> Visual ads across millions of websites, apps, and videos for awareness and retargeting</li>
              <li><strong>Google Shopping:</strong> Product-focused ads with images, prices, and reviews for e-commerce</li>
              <li><strong>YouTube Ads:</strong> Video-based campaigns for awareness, engagement, or conversion</li>
              <li><strong>Discovery Ads:</strong> Native ads appearing in Gmail, YouTube feeds, and Discover, blending with organic content</li>
            </ul>
            <div className="highlight-box">
              <p className="content-text">
                Senior strategists leverage different networks for different funnel stages: Search for intent capture, Display/YouTube for signal generation and retargeting, and Shopping/Discovery for conversions.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" 
              alt="Google Ads Networks"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">4. Business Goals & Use Cases</h2>
            <p className="content-text">
              Google Ads supports nearly any business objective, provided the funnel is aligned with intent:
            </p>
            <ul className="content-list">
              <li><strong>Sales & E-commerce:</strong> Drive direct transactions via Search, Shopping, or YouTube</li>
              <li><strong>Lead Generation:</strong> Capture high-value leads for professional services, education, insurance</li>
              <li><strong>Brand Awareness:</strong> Visual or video ads to increase reach and recognition</li>
              <li><strong>Local Promotion:</strong> Attract nearby customers to physical stores or localized services</li>
              <li><strong>Apps & Software:</strong> Drive downloads, subscriptions, or SaaS adoption</li>
            </ul>
            <p className="content-text">
              The key principle is matching campaign type to user intent: Search and Shopping ads capture demand, Display and YouTube ads nurture interest.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
              alt="Business goals"
              className="section-image"
            />
          </section>

          <section className="content-section">
            <h2 className="section-heading">5. Core Senior-Level Takeaways</h2>
            <ul className="content-list">
              <li><strong>Google Ads = intention capture:</strong> Users are actively searching; your role is to meet them with relevance</li>
              <li><strong>Performance-based model:</strong> CPC, CPM, and CPA provide measurable levers to control ROI</li>
              <li><strong>Auction dynamics:</strong> Quality and relevance matter as much as bid</li>
              <li><strong>Multiple networks:</strong> Use different channels strategically across the funnel</li>
              <li><strong>Goal alignment:</strong> Campaigns succeed when objectives, intent, and targeting match</li>
            </ul>
            <div className="highlight-box rule-box">
              <h3 className="highlight-title">Rule of Thumb:</h3>
              <p className="content-text">
                "Google Ads is about meeting users where intent exists. Quality, relevance, and proper funnel alignment outperform sheer budget."
              </p>
            </div>
          </section>

          <div className="content-navigation">
            <Link to="/google-ads-hub" className="nav-button nav-back">
              ← Back to Google Ads Atlas
            </Link>
            <Link to="/google-ads-campaign-types" className="nav-button nav-next">
              Next: Campaign Types →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GoogleAdsFoundations
