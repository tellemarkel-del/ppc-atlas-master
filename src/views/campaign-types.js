import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const CampaignTypes = (props) => {
  return (
    <div className="foundations-container">
      <Helmet>
        <title>Google Ads – Campaign Types - PPC Atlas</title>
        <meta property="og:title" content="Google Ads – Campaign Types - PPC Atlas" />
      </Helmet>
      <Navigation />

      <div className="foundations-hero">
        <div className="foundations-breadcrumb">
          <Link to="/google-ads-hub" className="breadcrumb-link">Google Ads Atlas</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Campaign Types</span>
        </div>
        <h1 className="foundations-title">Google Ads – Campaign Types</h1>
        <p className="foundations-subtitle">
          Choosing the Right Campaign Type for Your Goals
        </p>
      </div>

      <div className="foundations-content">
        <div className="content-wrapper">

          {/* Intro */}
          <section className="content-section">
            <p className="content-text">
              Google Ads offers multiple campaign types, each designed for a specific business objective. Selecting the correct campaign type is one of the most important strategic decisions in PPC because it determines:
            </p>
            <ul className="content-list">
              <li>Ad formats</li>
              <li>Placement networks</li>
              <li>Targeting capabilities</li>
              <li>Bidding options</li>
              <li>Optimization logic</li>
            </ul>
            <p className="content-text">
              At a structural level, campaigns are the highest layer inside a Google Ads account. Each campaign contains ad groups, and each ad group contains keywords, audiences, and creatives. Understanding campaign types means understanding how to align marketing goals with the correct distribution system — and ultimately maximizing return on ad spend (ROAS).
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Google Ads Campaign Types Overview"
              className="section-image"
            />
          </section>

          {/* What You Will Learn */}
          <section className="content-section">
            <h2 className="section-heading">What You Will Learn in This Chapter</h2>
            <p className="content-text">By the end of this chapter, you will understand:</p>
            <ul className="content-list">
              <li>The core Google Ads campaign types and how they function</li>
              <li>When each campaign type should (and should not) be used</li>
              <li>The minimum data requirements for automation and Smart Bidding</li>
              <li>The advantages and limitations of each campaign type</li>
              <li>How senior PPC strategists integrate campaigns into a full-funnel system</li>
            </ul>
          </section>

          {/* 1. Search */}
          <section className="content-section">
            <h2 className="section-heading">1. Search Campaigns (Google Search Network)</h2>
            <p className="content-text">
              Search campaigns display text ads on Google's search results pages when users enter queries related to your selected keywords. Ads appear at the top or bottom of the results page. Search captures existing demand — the user is actively looking for something.
            </p>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Capture high-intent traffic</li>
              <li>Generate leads or sales</li>
              <li>Drive direct-response conversions</li>
              <li>Monetize existing demand</li>
            </ul>

            <h3 className="subsection-heading">Key Features</h3>
            <ul className="content-list">
              <li><strong>Keyword targeting:</strong> Broad, Phrase, Exact, and Negative match types</li>
              <li><strong>Ad extensions:</strong> Sitelinks, Callouts, Structured Snippets, Call Extensions</li>
              <li><strong>Bidding:</strong> Manual or automated (Maximize Conversions, Target CPA, Target ROAS)</li>
              <li><strong>Reporting:</strong> Full search term transparency</li>
            </ul>

            <h3 className="subsection-heading">When Should You Use Search?</h3>
            <p className="content-text">Search is ideal when:</p>
            <ul className="content-list">
              <li>Users are actively searching for your product or service</li>
              <li>You need measurable ROI</li>
              <li>Your goal is conversions, not awareness</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Data Requirements for Smart Bidding</h3>
              <p className="content-text">
                You can launch Search without historical data. However, for stable automated bidding: minimum 15–30 conversions in the last 30 days per campaign. Ideal: 30+ conversions for Target CPA or ROAS stability.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>High purchase intent</li>
              <li>Strong ROI potential</li>
              <li>Precise keyword control</li>
              <li>Clear performance tracking</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Limited to existing demand</li>
              <li>Competitive industries can be expensive</li>
              <li>Requires constant negative keyword management</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Search Campaigns"
              className="section-image"
            />
          </section>

          {/* 2. Display */}
          <section className="content-section">
            <h2 className="section-heading">2. Display Campaigns (Google Display Network)</h2>
            <p className="content-text">
              Display campaigns show visual ads — banners, responsive ads, rich media — across millions of websites, apps, and YouTube placements. Unlike Search, Display generates demand rather than capturing it.
            </p>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Brand awareness</li>
              <li>Mid-funnel consideration</li>
              <li>Remarketing</li>
              <li>Supporting full-funnel strategy</li>
            </ul>

            <h3 className="subsection-heading">Key Features</h3>
            <ul className="content-list">
              <li><strong>Audience targeting:</strong> In-market, Affinity, Custom Intent</li>
              <li><strong>Placement targeting:</strong> Specific websites or categories</li>
              <li><strong>Format:</strong> Responsive Display Ads that auto-adjust to any placement</li>
            </ul>

            <h3 className="subsection-heading">When Should You Use Display?</h3>
            <p className="content-text">Best for:</p>
            <ul className="content-list">
              <li>Introducing new products</li>
              <li>Retargeting previous visitors</li>
              <li>Expanding brand visibility</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Data Requirements</h3>
              <p className="content-text">
                No minimum data is required to launch Display. For conversion-based automation, 20+ conversions in the past 30 days is recommended.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>Massive reach</li>
              <li>Low CPC</li>
              <li>Strong remarketing tool</li>
              <li>Supports brand lift</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Lower intent traffic</li>
              <li>Lower direct conversion rates</li>
              <li>Can waste budget without exclusions and placement controls</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Display Campaigns"
              className="section-image"
            />
          </section>

          {/* 3. Shopping */}
          <section className="content-section">
            <h2 className="section-heading">3. Shopping Campaigns (Standard Shopping)</h2>
            <p className="content-text">
              Shopping campaigns display product ads with images, prices, and store names directly in search results and Google Shopping. They rely on a product feed submitted via Google Merchant Center.
            </p>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Drive product-specific purchases</li>
              <li>Increase visibility for SKUs</li>
              <li>Capture high commercial intent</li>
            </ul>

            <h3 className="subsection-heading">Key Features</h3>
            <ul className="content-list">
              <li>Merchant Center integration</li>
              <li><strong>Product-level targeting:</strong> brand, category, price, custom labels</li>
              <li>Feed optimization is critical for performance</li>
            </ul>

            <h3 className="subsection-heading">When Should You Use Shopping?</h3>
            <ul className="content-list">
              <li>You sell physical products</li>
              <li>You have a structured product feed</li>
              <li>Your goal is direct online sales</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Data Requirements</h3>
              <p className="content-text">
                You can start Shopping without conversions. For scaling and smart optimization: 30–50 conversions in 30 days recommended.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>Highly visual</li>
              <li>Strong commercial intent</li>
              <li>Excellent ROAS potential</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Limited messaging control</li>
              <li>Dependent on feed quality</li>
              <li>Requires continuous feed optimization</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Shopping Campaigns"
              className="section-image"
            />
          </section>

          {/* 4. Performance Max */}
          <section className="content-section">
            <h2 className="section-heading">4. Performance Max Campaigns (PMax)</h2>
            <p className="content-text">
              Performance Max is an AI-driven campaign type that delivers ads across all Google networks using machine learning to allocate budget dynamically across channels:
            </p>
            <ul className="content-list">
              <li>Search</li>
              <li>Display</li>
              <li>YouTube</li>
              <li>Gmail</li>
              <li>Discover</li>
              <li>Shopping</li>
            </ul>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Maximize conversions or revenue</li>
              <li>Scale beyond Search limitations</li>
              <li>Automate omnichannel delivery</li>
            </ul>

            <h3 className="subsection-heading">When Should You Use Performance Max?</h3>
            <p className="content-text">Performance Max works best when:</p>
            <ul className="content-list">
              <li>You already have stable conversion tracking</li>
              <li>You want to scale volume</li>
              <li>You have strong creative assets (text, images, videos)</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Minimum Conversion Requirements</h3>
              <p className="content-text">
                For stable performance: minimum 30 conversions in last 30 days. Recommended for eCommerce: 50+ conversions. More data = better algorithmic accuracy. Launching PMax without data increases volatility and inefficient learning.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>Full cross-network reach</li>
              <li>Automated optimization</li>
              <li>Strong scaling tool</li>
              <li>Efficient for mature accounts</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Reduced transparency (limited keyword insights)</li>
              <li>Lower manual control</li>
              <li>Can cannibalize branded Search campaigns</li>
              <li>Harder to diagnose issues</li>
            </ul>

            <div className="highlight-box rule-box">
              <h3 className="highlight-title">When NOT to Use PMax</h3>
              <p className="content-text">
                Brand-new accounts, poor tracking setup, low conversion volume, or when strict keyword control is required. PMax is a scaling engine — not a beginner's starting point.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Performance Max"
              className="section-image"
            />
          </section>

          {/* 5. Video */}
          <section className="content-section">
            <h2 className="section-heading">5. Video Campaigns (YouTube &amp; Partners)</h2>
            <p className="content-text">
              Video campaigns run ads on YouTube, Shorts, and partner placements using multiple formats:
            </p>
            <ul className="content-list">
              <li>Skippable in-stream</li>
              <li>Non-skippable</li>
              <li>Bumper ads</li>
              <li>In-feed discovery ads</li>
            </ul>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Brand awareness</li>
              <li>Storytelling</li>
              <li>Product education</li>
              <li>Remarketing reinforcement</li>
            </ul>

            <h3 className="subsection-heading">When Should You Use Video?</h3>
            <ul className="content-list">
              <li>Product launches</li>
              <li>Explaining complex services</li>
              <li>Supporting Search and Display campaigns</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Conversion-Based Video Campaigns</h3>
              <p className="content-text">
                If optimizing for conversions: 30+ conversions in 30 days recommended. Otherwise focus on CPV, brand lift, and view-through engagement.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>High engagement</li>
              <li>Strong emotional impact</li>
              <li>Supports upper funnel growth</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Requires quality video assets</li>
              <li>Often indirect ROI</li>
              <li>Longer optimization cycles</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Video Campaigns"
              className="section-image"
            />
          </section>

          {/* 6. Demand Gen */}
          <section className="content-section">
            <h2 className="section-heading">6. Discovery / Demand Gen Campaigns</h2>
            <p className="content-text">
              Discovery (now evolving into Demand Gen) campaigns place visually rich, native-style ads in:
            </p>
            <ul className="content-list">
              <li>YouTube Home feed</li>
              <li>Gmail Promotions</li>
              <li>Google Discover feed</li>
            </ul>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Reach users in browsing mode</li>
              <li>Expand brand visibility</li>
              <li>Support mid-funnel engagement</li>
            </ul>

            <h3 className="subsection-heading">When Should You Use Demand Gen?</h3>
            <ul className="content-list">
              <li>Visually appealing products</li>
              <li>Lifestyle brands</li>
              <li>Prospecting new audiences</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Data Recommendation</h3>
              <p className="content-text">
                20–30 conversions in 30 days for stable automation. Demand Gen works best with strong creative assets — its native ad integration generates higher engagement among cold audiences at mid-funnel stages.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>Native ad integration</li>
              <li>Strong creative flexibility</li>
              <li>Good for prospecting</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Lower intent than Search</li>
              <li>Requires strong visuals</li>
            </ul>
          </section>

          {/* 7. Local */}
          <section className="content-section">
            <h2 className="section-heading">7. Local Campaigns</h2>
            <p className="content-text">
              Local campaigns promote physical locations across Google Search, Google Maps, Display, and YouTube — focusing on driving store visits, calls, and directions.
            </p>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Increase foot traffic</li>
              <li>Promote local events</li>
              <li>Drive calls and directions</li>
            </ul>

            <h3 className="subsection-heading">Best Use Cases</h3>
            <ul className="content-list">
              <li>Retail stores</li>
              <li>Restaurants</li>
              <li>Service providers</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Limited usefulness for online-only businesses</li>
              <li>Heavy automation with limited manual control</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Local Campaigns"
              className="section-image"
            />
          </section>

          {/* 8. App */}
          <section className="content-section">
            <h2 className="section-heading">8. App Campaigns</h2>
            <p className="content-text">
              App campaigns promote mobile applications across Search, Google Play, YouTube, Display, and Discover — fully automated to drive installs, in-app purchases, or engagement.
            </p>

            <h3 className="subsection-heading">Strategic Purpose</h3>
            <ul className="content-list">
              <li>Increase app installs</li>
              <li>Drive in-app purchases</li>
              <li>Boost engagement</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Data Requirements</h3>
              <p className="content-text">
                For stable Smart Bidding: 50+ installs or in-app events recommended. App campaigns are fully automated with broad distribution — the trade-off is minimal targeting control and full dependency on accurate event tracking from day one.
              </p>
            </div>

            <h3 className="subsection-heading">Advantages</h3>
            <ul className="content-list">
              <li>Fully automated</li>
              <li>Broad distribution</li>
              <li>Effective for scaling apps</li>
            </ul>

            <h3 className="subsection-heading">Limitations</h3>
            <ul className="content-list">
              <li>Minimal targeting control</li>
              <li>Dependent on accurate event tracking</li>
            </ul>
          </section>

          {/* Senior Integration */}
          <section className="content-section">
            <h2 className="section-heading">Senior-Level Strategic Integration</h2>
            <p className="content-text">
              A professional PPC ecosystem rarely relies on a single campaign type. A mature funnel often looks like:
            </p>
            <ul className="content-list">
              <li><strong>Awareness:</strong> Display, Video, Demand Gen</li>
              <li><strong>Consideration:</strong> YouTube + Remarketing</li>
              <li><strong>Conversion:</strong> Search + Shopping</li>
              <li><strong>Scaling:</strong> Performance Max</li>
              <li><strong>Offline Growth:</strong> Local</li>
              <li><strong>Mobile Growth:</strong> App</li>
            </ul>
            <p className="content-text">Campaigns are not isolated silos. They:</p>
            <ul className="content-list">
              <li>Generate data signals</li>
              <li>Feed audience lists</li>
              <li>Strengthen Smart Bidding</li>
              <li>Support cross-channel scaling</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Full funnel strategy"
              className="section-image"
            />

            <div className="highlight-box rule-box">
              <h3 className="highlight-title">Core Strategic Principle</h3>
              <p className="content-text">
                Campaign type determines the demand stage you target, the automation level available, the creative requirements, and the scalability ceiling. Choosing correctly is not about following Google recommendations — it is about understanding business objective, data maturity, budget size, funnel stage, and tracking reliability.
              </p>
              <p className="content-text">
                Mastery of campaign types is the foundation of advanced PPC strategy. A well-structured, strategically aligned campaign system allows you to scale confidently, optimize efficiently, and maximize long-term ROAS.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="content-navigation">
            <Link to="/google-ads-foundations" className="nav-button nav-back">
              ← Previous: Foundations
            </Link>
            <Link to="/google-ads-bidding" className="nav-button nav-next">
              Next: Bidding &amp; Budget →
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CampaignTypes
