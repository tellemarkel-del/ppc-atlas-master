import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const GoogleAdsTracking = (props) => {
  return (
    <div className="foundations-container">
      <Helmet>
        <title>Google Ads – Tracking - PPC Atlas</title>
        <meta property="og:title" content="Google Ads – Tracking - PPC Atlas" />
      </Helmet>
      <Navigation />

      <div className="foundations-hero">
        <div className="foundations-breadcrumb">
          <Link to="/google-ads-hub" className="breadcrumb-link">Google Ads Atlas</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Tracking</span>
        </div>
        <h1 className="foundations-title">Google Ads – Tracking</h1>
        <p className="foundations-subtitle">
          Data-Driven PPC Starts Here
        </p>
      </div>

      <div className="foundations-content">
        <div className="content-wrapper">

          {/* Intro */}
          <section className="content-section">
            <p className="content-text">
              Tracking is the foundation of all performance optimization in Google Ads. Without it, campaigns are essentially flying blind: money is spent, but you don't know what drives results. At a senior level, tracking goes far beyond counting clicks — it's about measuring conversions, revenue, user behavior, and the customer journey, and using these insights to optimize bidding, targeting, and creatives.
            </p>
            <div className="highlight-box">
              <p className="content-text">
                Mastering tracking turns Google Ads into a precision marketing engine, where decisions are based on real performance, not guesswork.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Google Ads Tracking"
              className="section-image"
            />
          </section>

          {/* 1. Conversion Tracking */}
          <section className="content-section">
            <h2 className="section-heading">1. Conversion Tracking</h2>
            <p className="content-text">
              Measures business-critical actions after users interact with ads — purchases, form submissions, phone calls, app installs, or offline transactions.
            </p>

            <h3 className="subsection-heading">Steps to Implement</h3>
            <ul className="content-list">
              <li>Define conversions: revenue, leads, sign-ups, app installs.</li>
              <li>Install conversion tracking tags: HTML snippet, Google Tag Manager (GTM), or server-side.</li>
              <li>Assign conversion values for revenue attribution.</li>
              <li>Test using Tag Assistant or GTM preview.</li>
            </ul>

            <h3 className="subsection-heading">Types of Conversions</h3>
            <ul className="content-list">
              <li><strong>Website:</strong> purchases, forms, newsletter sign-ups</li>
              <li><strong>Phone calls:</strong> call buttons, call extensions</li>
              <li><strong>App:</strong> installs or in-app events</li>
              <li><strong>Offline:</strong> CRM or in-store conversions</li>
            </ul>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Tips</h3>
              <p className="content-text">Track micro-conversions to understand the full funnel. Assign accurate conversion values to improve Target ROAS and automation. Use enhanced conversions to improve accuracy for users without cookies.</p>
            </div>
          </section>

          {/* 2. GTM */}
          <section className="content-section">
            <h2 className="section-heading">2. Google Tag Manager (GTM)</h2>
            <p className="content-text">
              Centralized, scalable tag management without editing website code.
            </p>

            <h3 className="subsection-heading">Best Practices</h3>
            <ul className="content-list">
              <li>Manage all conversion, remarketing, and event tags through GTM.</li>
              <li>Trigger events for clicks, form submissions, scroll depth, or video views.</li>
              <li>Test every tag in preview mode before publishing.</li>
            </ul>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Tip</h3>
              <p className="content-text">Create custom events and link them to Google Ads as conversions. Use dataLayer variables to dynamically pass values like transaction amount or lead type.</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Google Tag Manager"
              className="section-image"
            />
          </section>

          {/* 3. Enhanced Conversions */}
          <section className="content-section">
            <h2 className="section-heading">3. Enhanced Conversions</h2>
            <p className="content-text">
              Send hashed first-party data (email, phone) to Google to match conversions to users.
            </p>

            <h3 className="subsection-heading">Benefits</h3>
            <ul className="content-list">
              <li>More accurate reporting</li>
              <li>Improved Smart Bidding performance (Target CPA, Target ROAS)</li>
              <li>Better cross-device attribution</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Senior Insight</h3>
              <p className="content-text">
                Crucial for mobile-heavy or cross-device journeys where cookie tracking underreports conversions.
              </p>
            </div>
          </section>

          {/* 4. Offline & CRM */}
          <section className="content-section">
            <h2 className="section-heading">4. Offline &amp; CRM Conversion Import</h2>
            <p className="content-text">
              Align ad spend with real revenue — critical for B2B and high-ticket sales.
            </p>

            <h3 className="subsection-heading">Process</h3>
            <ul className="content-list">
              <li>Track online lead capture</li>
              <li>Match leads to CRM records</li>
              <li>Import conversion date, type, and value</li>
            </ul>

            <div className="highlight-box">
              <p className="content-text">
                <strong>Benefit:</strong> Enables Smart Bidding to optimize for actual ROI instead of just form submissions.
              </p>
            </div>
          </section>

          {/* 5. Metrics */}
          <section className="content-section">
            <h2 className="section-heading">5. Tracking Metrics and KPIs</h2>

            <h3 className="subsection-heading">Core Metrics</h3>
            <ul className="content-list">
              <li><strong>CTR</strong> → engagement indicator</li>
              <li><strong>CPC</strong> → cost efficiency</li>
              <li><strong>Conversion rate</strong> → landing page and ad effectiveness</li>
              <li><strong>CPA</strong> → cost per conversion</li>
              <li><strong>ROAS</strong> → revenue-focused KPI</li>
            </ul>

            <h3 className="subsection-heading">Advanced Metrics</h3>
            <ul className="content-list">
              <li><strong>View-through conversions:</strong> users saw ad but converted later</li>
              <li><strong>Cross-device conversions</strong></li>
              <li><strong>Attribution-adjusted metrics:</strong> data-driven models assign credit across the funnel</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Tracking metrics"
              className="section-image"
            />
          </section>

          {/* 6. Attribution */}
          <section className="content-section">
            <h2 className="section-heading">6. Attribution Models</h2>
            <p className="content-text">
              Determine how conversion credit is assigned across touchpoints.
            </p>

            <h3 className="subsection-heading">Options</h3>
            <ul className="content-list">
              <li>Last click / First click / Linear / Time decay / Position-based / Data-driven</li>
            </ul>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Tip</h3>
              <p className="content-text">Use data-driven attribution for Smart Bidding campaigns. Analyze multi-touch conversion paths to understand contribution per campaign.</p>
            </div>
          </section>

          {/* 7. Cross-Channel */}
          <section className="content-section">
            <h2 className="section-heading">7. Cross-Channel &amp; Analytics Integration</h2>

            <h3 className="subsection-heading">Advanced Tracking</h3>
            <ul className="content-list">
              <li>Link Google Ads to GA4</li>
              <li>Track engagement, sessions, and multi-step conversion paths</li>
              <li>Use UTM parameters for CRM or dashboard reporting</li>
            </ul>

            <div className="highlight-box">
              <h3 className="highlight-title">Senior Insight</h3>
              <p className="content-text">
                Combine Ads conversion data with analytics to identify funnel friction points, optimize landing pages, and refine targeting.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Analytics integration"
              className="section-image"
            />
          </section>

          {/* 8. Common Mistakes */}
          <section className="content-section">
            <h2 className="section-heading">8. Common Tracking Mistakes</h2>
            <div className="warning-box">
              <h3 className="warning-title">⚠ Avoid These Errors</h3>
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Incorrect installation</strong> → incomplete data</li>
                <li><strong>Overcounting</strong> → multiple tags for the same event</li>
                <li><strong>Ignoring micro-conversions</strong> → missing funnel insights</li>
                <li><strong>Not using enhanced conversions</strong> → underreporting cross-device or logged-in users</li>
                <li><strong>Default last-click attribution</strong> → misguides automated bidding</li>
              </ul>
            </div>
          </section>

          {/* 9. Best Practices */}
          <section className="content-section">
            <h2 className="section-heading">9. Senior-Level Best Practices</h2>
            <ul className="content-list">
              <li>Track all business-relevant actions, including micro-conversions</li>
              <li>Use enhanced conversions and offline imports for accuracy</li>
              <li>Integrate GA4 for user behavior insights</li>
              <li>Apply data-driven attribution for Smart Bidding</li>
              <li>Regularly audit tags, conversions, and funnel events</li>
              <li>Combine conversion values with Smart Bidding to maximize revenue</li>
            </ul>

            <div className="highlight-box rule-box">
              <h3 className="highlight-title">Rule of Thumb</h3>
              <p className="content-text">
                "Track everything that drives business value, verify data continuously, and feed insights back into campaign optimization." Tracking is the backbone of data-driven PPC — without it, even the best campaigns are guesswork.
              </p>
            </div>
          </section>

          <div className="content-navigation">
            <Link to="/google-ads-targeting" className="nav-button nav-back">
              ← Previous: Targeting
            </Link>
            <Link to="/google-ads-creatives" className="nav-button nav-next">
              Next: Creatives →
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsTracking
