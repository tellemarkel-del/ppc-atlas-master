import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const GoogleAdsErrors = (props) => {
  return (
    <div className="foundations-container">
      <Helmet>
        <title>Google Ads – Common Errors - PPC Atlas</title>
        <meta property="og:title" content="Google Ads – Common Errors - PPC Atlas" />
      </Helmet>
      <Navigation />

      <div className="foundations-hero">
        <div className="foundations-breadcrumb">
          <Link to="/google-ads-hub" className="breadcrumb-link">Google Ads Atlas</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Common Errors</span>
        </div>
        <h1 className="foundations-title">Google Ads – Common Errors</h1>
        <p className="foundations-subtitle">
          Senior-Level PPC Playbook
        </p>
      </div>

      <div className="foundations-content">
        <div className="content-wrapper">

          {/* Intro */}
          <section className="content-section">
            <p className="content-text">
              Even the most sophisticated campaigns can fail if common mistakes aren't avoided. Google Ads is powerful but unforgiving — small misconfigurations, overlooked settings, or lack of strategy can waste budgets, lower ROI, and distort data. At a senior level, errors are structural, not tactical, and avoiding them requires building campaigns on best practices, disciplined testing, and ongoing monitoring.
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Common Google Ads Errors"
              className="section-image"
            />
          </section>

          {/* 1. Campaign Structure */}
          <section className="content-section">
            <h2 className="section-heading">1. Campaign Structure Mistakes</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Too few ad groups</strong> → multiple keywords lumped together reduce relevance.</li>
                <li><strong>One ad for many keywords</strong> → low Quality Score, high CPC.</li>
                <li><strong>Overlapping campaigns targeting same keywords</strong> → self-competition, increased costs.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Use tight, theme-based ad groups.</li>
              <li>Separate campaigns by objective or product category.</li>
              <li>Maintain negative keyword lists to prevent cannibalization.</li>
            </ul>
          </section>

          {/* 2. Keyword Strategy */}
          <section className="content-section">
            <h2 className="section-heading">2. Poor Keyword Strategy</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Only broad match keywords</strong> → wasted clicks.</li>
                <li><strong>Ignoring negative keywords</strong> → irrelevant traffic.</li>
                <li><strong>Not using long-tail keywords</strong> → miss high-intent users.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Research with Search Terms Report and Keyword Planner.</li>
              <li>Implement negative keywords systematically.</li>
              <li>Layer match types for coverage + control.</li>
            </ul>
          </section>

          {/* 3. Ad Copy */}
          <section className="content-section">
            <h2 className="section-heading">3. Weak Ad Copy &amp; Messaging</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Generic or vague ads</strong> → low CTR, reduced Quality Score.</li>
                <li><strong>Ignoring ad extensions</strong> → missed ad rank opportunities.</li>
                <li><strong>Messaging mismatch between ad and landing page</strong> → high bounce rates.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Write benefit-driven, specific ad copy.</li>
              <li>Use all ad extensions (sitelinks, callouts, structured snippets).</li>
              <li>Ensure landing page relevance and ad consistency.</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Ad copy mistakes"
              className="section-image"
            />
          </section>

          {/* 4. Bidding & Budget */}
          <section className="content-section">
            <h2 className="section-heading">4. Improper Bidding &amp; Budgeting</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Bids too low</strong> → ads rarely show.</li>
                <li><strong>Overspending on poor-performing campaigns.</strong></li>
                <li><strong>Frequent changes to automated bids</strong> → disrupts learning.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Align bidding with campaign goals (traffic vs conversions).</li>
              <li>Monitor budget allocation and adjust per campaign performance.</li>
              <li>Give Smart Bidding campaigns enough data before making changes.</li>
            </ul>
          </section>

          {/* 5. Targeting */}
          <section className="content-section">
            <h2 className="section-heading">5. Targeting Mistakes</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Overly broad targeting</strong> → irrelevant traffic.</li>
                <li><strong>Too many exclusions</strong> → restricts reach.</li>
                <li><strong>Ignoring high-value segments or remarketing lists.</strong></li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Layer targeting strategically: keywords + audience + demographics + location.</li>
              <li>Analyze performance per segment → adjust bids/exclusions.</li>
              <li>Leverage remarketing lists and lookalikes for funnel optimization.</li>
            </ul>
          </section>

          {/* 6. Conversion Tracking */}
          <section className="content-section">
            <h2 className="section-heading">6. Conversion Tracking Failures</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>No conversion tracking</strong> → blind ROI.</li>
                <li><strong>Misconfigured tags</strong> → double-counting or missing conversions.</li>
                <li><strong>Using only last-click attribution</strong> → misleading results.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Implement proper conversion tracking, including enhanced conversions.</li>
              <li>Audit tags with Tag Assistant or GTM preview mode.</li>
              <li>Use data-driven attribution for Smart Bidding.</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Conversion tracking failures"
              className="section-image"
            />
          </section>

          {/* 7. Landing Page */}
          <section className="content-section">
            <h2 className="section-heading">7. Landing Page &amp; UX Mistakes</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Poor landing page experience</strong> → high bounce, low conversion.</li>
                <li><strong>Slow page load</strong> → reduced Quality Score.</li>
                <li><strong>Non-mobile optimized pages</strong> → losing mobile traffic.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Ensure fast, responsive, relevant landing pages.</li>
              <li>Match ad messaging with landing content.</li>
              <li>Test forms, CTAs, and flows regularly.</li>
            </ul>
          </section>

          {/* 8. Analytics */}
          <section className="content-section">
            <h2 className="section-heading">8. Ignoring Data &amp; Analytics</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Not reviewing</strong> Search Term Reports, Auction Insights, or Analytics.</li>
                <li><strong>Relying only on surface metrics</strong> (CTR, impressions).</li>
                <li><strong>Not segmenting</strong> by device, location, audience, or time.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Implement structured reporting: CTR, CPC, CPA, ROAS, conversion rates.</li>
              <li>Review segmentation reports regularly.</li>
              <li>Use insights to refine targeting, bids, and creatives.</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Data and analytics"
              className="section-image"
            />
          </section>

          {/* 9. Over-Reliance on Automation */}
          <section className="content-section">
            <h2 className="section-heading">9. Over-Reliance on Automation</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Letting Smart Bidding or PMax run without monitoring.</strong></li>
                <li><strong>Assuming automation replaces strategic oversight.</strong></li>
                <li><strong>Ignoring anomalies or sudden performance drops.</strong></li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Monitor automated campaigns weekly.</li>
              <li>Set alerts for abnormal spend or performance.</li>
              <li>Combine human strategy with automation.</li>
            </ul>
          </section>

          {/* 10. Strategic Errors */}
          <section className="content-section">
            <h2 className="section-heading">10. Common Strategic Errors</h2>

            <h3 className="subsection-heading">Errors</h3>
            <div className="warning-box">
              <ul className="content-list" style={{color: '#e0d0b0'}}>
                <li><strong>Campaigns trying to serve all objectives</strong> → confusion, poor performance.</li>
                <li><strong>Launching multiple campaigns without funnel mapping.</strong></li>
                <li><strong>Focusing only on short-term metrics</strong> → neglecting LTV.</li>
              </ul>
            </div>

            <h3 className="subsection-heading">Solutions</h3>
            <ul className="content-list">
              <li>Map campaigns to funnel stages: awareness, consideration, conversion.</li>
              <li>Track lifetime value and multi-touch conversions.</li>
              <li>Adjust strategy using short-term ROI + long-term customer acquisition.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="content-section">
            <h2 className="section-heading">Conclusion</h2>
            <p className="content-text">
              Avoiding errors in Google Ads is as critical as choosing the right keywords or bids. Senior PPC management emphasizes proactive prevention, structured campaigns, precise targeting, robust tracking, optimized budgets, and continuous analysis.
            </p>
            <div className="highlight-box rule-box">
              <h3 className="highlight-title">Rule of Thumb</h3>
              <p className="content-text">
                "Errors in Google Ads are usually structural. Fix the foundation — campaigns, targeting, tracking, and funnel logic — before tweaking individual ads." A clean, error-free account is the launchpad for advanced strategies like Smart Bidding, Performance Max, and cross-channel automation.
              </p>
            </div>
          </section>

          <div className="content-navigation">
            <Link to="/google-ads-optimization" className="nav-button nav-back">
              ← Previous: Strategies
            </Link>
            <Link to="/google-ads-hub" className="nav-button nav-next">
              Back to Google Ads Atlas →
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsErrors
