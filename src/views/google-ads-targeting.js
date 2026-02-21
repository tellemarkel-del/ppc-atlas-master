import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const GoogleAdsTargeting = (props) => {
  return (
    <div className="foundations-container">
      <Helmet>
        <title>Google Ads – Targeting - PPC Atlas</title>
        <meta property="og:title" content="Google Ads – Targeting - PPC Atlas" />
      </Helmet>
      <Navigation />

      <div className="foundations-hero">
        <div className="foundations-breadcrumb">
          <Link to="/google-ads-hub" className="breadcrumb-link">Google Ads Atlas</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Targeting</span>
        </div>
        <h1 className="foundations-title">Google Ads – Targeting</h1>
        <p className="foundations-subtitle">
          Reaching the Right Users at the Right Time
        </p>
      </div>

      <div className="foundations-content">
        <div className="content-wrapper">

          {/* Intro */}
          <section className="content-section">
            <p className="content-text">
              Targeting is the heart of performance in Google Ads. Even with perfect creatives and smart bidding, showing ads to the wrong audience destroys ROI. Senior-level targeting in Google Ads is about combining intent signals, behavioral insights, demographics, and location data to reach users most likely to convert.
            </p>
            <div className="highlight-box">
              <p className="content-text">
                Targeting is multi-layered: campaigns, ad groups, and even ad assets can leverage different signals. Layering them correctly increases relevance, lowers CPC/CPA, improves Quality Score, and reduces wasted spend.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Google Ads Targeting"
              className="section-image"
            />
          </section>

          {/* 1. Keyword */}
          <section className="content-section">
            <h2 className="section-heading">1. Keyword Targeting (Search Campaigns)</h2>
            <p className="content-text">
              Keywords are the foundation of search campaigns, defining which queries trigger your ads.
            </p>

            <h3 className="subsection-heading">Key Components</h3>
            <ul className="content-list">
              <li><strong>Broad match:</strong> widest reach, less precision</li>
              <li><strong>Phrase match:</strong> ads appear for queries containing your keywords in order</li>
              <li><strong>Exact match:</strong> highly targeted, high-intent queries</li>
              <li><strong>Negative keywords:</strong> exclude irrelevant searches to save budget</li>
            </ul>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Tips</h3>
              <p className="content-text">Use long-tail keywords for lower CPC and higher conversion intent. Maintain negative keyword lists to prevent wasted spend. Group keywords by theme and funnel stage in ad groups to improve ad relevance and Quality Score.</p>
            </div>
          </section>

          {/* 2. Audience */}
          <section className="content-section">
            <h2 className="section-heading">2. Audience Targeting</h2>
            <p className="content-text">
              Google Ads allows behavioral and intent-based audience targeting beyond keywords.
            </p>

            <h3 className="subsection-heading">Types of Audiences</h3>
            <ul className="content-list">
              <li><strong>Affinity Audiences:</strong> long-term interests/lifestyle alignment (e.g., Fitness Enthusiasts)</li>
              <li><strong>In-Market Audiences:</strong> actively considering a purchase in a category</li>
              <li><strong>Custom Audiences:</strong> based on search terms, URLs visited, apps used</li>
              <li><strong>Similar / Lookalike Audiences:</strong> find users like your high-value audience</li>
              <li><strong>Remarketing Audiences:</strong> past website, app, or YouTube visitors</li>
              <li><strong>Customer Match:</strong> upload emails, phones, addresses to target known customers across networks</li>
            </ul>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Tips</h3>
              <p className="content-text">Layer affinity + in-market + remarketing for funnel-specific targeting. Use lookalikes to expand reach efficiently. Segment audiences by conversion value to prioritize high-LTV users.</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Audience targeting"
              className="section-image"
            />
          </section>

          {/* 3. Demographic */}
          <section className="content-section">
            <h2 className="section-heading">3. Demographic Targeting</h2>
            <p className="content-text">Refine your audience by:</p>
            <ul className="content-list">
              <li>Age, gender, parental status, household income (select countries)</li>
            </ul>

            <h3 className="subsection-heading">Strategies</h3>
            <ul className="content-list">
              <li>Increase bids for high-converting demographics</li>
              <li>Exclude low-performing segments</li>
              <li>Combine with audiences for precision targeting — e.g., women 25–34 interested in fitness</li>
            </ul>
          </section>

          {/* 4. Location */}
          <section className="content-section">
            <h2 className="section-heading">4. Location &amp; Geo-Targeting</h2>

            <h3 className="subsection-heading">Options</h3>
            <ul className="content-list">
              <li>Country, region, city, postal code</li>
              <li>Radius targeting — e.g., 5km around a store</li>
              <li>Exclude low-performing areas</li>
            </ul>

            <h3 className="subsection-heading">Advanced Strategies</h3>
            <ul className="content-list">
              <li>Bid adjustments for high-performing locations</li>
              <li>Combine with time/day targeting</li>
              <li>Essential for Local campaigns</li>
            </ul>
          </section>

          {/* 5. Device */}
          <section className="content-section">
            <h2 className="section-heading">5. Device Targeting</h2>
            <p className="content-text">Target users by device: Mobile, Desktop, Tablet.</p>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Insights</h3>
              <p className="content-text">Analyze conversion rates per device. Increase bids for high-performing devices. Optimize landing pages for device-specific experience.</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Device targeting"
              className="section-image"
            />
          </section>

          {/* 6. Placement */}
          <section className="content-section">
            <h2 className="section-heading">6. Placement Targeting (Display &amp; Video)</h2>
            <p className="content-text">
              Choose websites, apps, YouTube channels, or video content for your ads.
            </p>

            <h3 className="subsection-heading">Advanced Tips</h3>
            <ul className="content-list">
              <li>Use Managed Placements to control exact sites</li>
              <li>Combine with topics and audiences for layered targeting</li>
              <li>Exclude irrelevant or brand-unsafe placements</li>
            </ul>
          </section>

          {/* 7. Topic */}
          <section className="content-section">
            <h2 className="section-heading">7. Topic &amp; Content Targeting (Display)</h2>
            <p className="content-text">
              Target websites or content by category — e.g., Technology, Health &amp; Fitness.
            </p>

            <h3 className="subsection-heading">Best Practices</h3>
            <ul className="content-list">
              <li>Combine topics with audiences for precision</li>
              <li>Avoid overly broad topics generating irrelevant clicks</li>
              <li>Use topic exclusions to reduce wasted spend</li>
            </ul>
          </section>

          {/* 8. Retargeting */}
          <section className="content-section">
            <h2 className="section-heading">8. Advanced Retargeting Strategies</h2>

            <h3 className="subsection-heading">Types</h3>
            <ul className="content-list">
              <li><strong>Website visitors:</strong> product pages, abandoned carts</li>
              <li><strong>YouTube viewers:</strong> retarget video engagers</li>
              <li><strong>Engaged users:</strong> forms, ads, app installs</li>
            </ul>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Tips</h3>
              <p className="content-text">Sequential retargeting: awareness → conversion-focused ads. Segment by recency (7-day vs. 30-day). Adjust bids by audience value or LTV.</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              alt="Retargeting strategies"
              className="section-image"
            />
          </section>

          {/* 9. Layering */}
          <section className="content-section">
            <h2 className="section-heading">9. Layering &amp; Exclusions</h2>
            <ul className="content-list">
              <li>Combine keywords + audiences + demographics + locations</li>
              <li>Use negative audiences to prevent self-competition</li>
              <li>Avoid overlapping targeting in multiple ad sets</li>
            </ul>

            <h3 className="subsection-heading">Example: Layered Targeting</h3>
            <div className="highlight-box">
              <ul className="content-list">
                <li><strong>Keyword:</strong> "running shoes"</li>
                <li><strong>Audience:</strong> in-market sports apparel</li>
                <li><strong>Location:</strong> top-performing US cities</li>
                <li><strong>Exclusions:</strong> previous buyers / low-performing regions</li>
              </ul>
            </div>

            <div className="tip-box">
              <h3 className="highlight-title">Senior Principle</h3>
              <p className="content-text">Layering targeting maximizes efficiency and relevance.</p>
            </div>
          </section>

          {/* 10. Takeaways */}
          <section className="content-section">
            <h2 className="section-heading">10. Senior-Level Takeaways</h2>
            <p className="content-text">
              Targeting = strategy meets precision. High-level mastery requires:
            </p>
            <ul className="content-list">
              <li>Understanding intent vs. discovery vs. remarketing</li>
              <li>Layering keywords, audiences, demographics, location, devices</li>
              <li>Excluding inefficient or overlapping segments</li>
              <li>Continuously analyzing audience, device, location, and demographic performance</li>
            </ul>
            <div className="highlight-box rule-box">
              <h3 className="highlight-title">Rule of Thumb</h3>
              <p className="content-text">
                At a senior level, targeting is not just reach — it's reaching the right user, at the right moment, with the right message, maximizing conversions and ROI.
              </p>
            </div>
          </section>

          <div className="content-navigation">
            <Link to="/google-ads-bidding" className="nav-button nav-back">
              ← Previous: Bidding &amp; Budget
            </Link>
            <Link to="/google-ads-assets" className="nav-button nav-next">
              Next: Assets →
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsTargeting
