import React from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "./home.css"

const metaLogoSrc = "data:image/png;base64,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"
const googleAdsLogoSrc = "data:image/png;base64,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"

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PPC Atlas - Master Google Ads &amp; Meta Ads</title>
        <meta
          property="og:title"
          content="PPC Atlas - Master Google Ads &amp; Meta Ads"
        />
      </Helmet>
      <Navigation />
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-text-section">
            <h1 className="home-heading">
              Master PPC Advertising
            </h1>
            <p className="home-description">
              Your comprehensive knowledge base for Google Ads and Meta Ads. Learn strategies, best practices, and advanced techniques to elevate your digital advertising campaigns.
            </p>
            <div className="home-cta-buttons">
              <Link to="/google-ads-hub" className="home-button home-button-google">
                <span className="home-button-icon">
                  <img
                    src={googleAdsLogoSrc}
                    alt="Google Ads"
                    style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  />
                </span>
                Google Ads Atlas
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <img
                    src={metaLogoSrc}
                    alt="Meta"
                    style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  />
                </span>
                Meta Ads Atlas
              </Link>
            </div>
          </div>
          <div className="home-animation-section">
            <div className="home-animation-placeholder">
              <div className="home-compass-container">
                <div className="home-compass-inner">
                  <div className="home-compass-n">N</div>
                  <div className="home-compass-needle">
                    <div className="home-compass-needle-north"></div>
                    <div className="home-compass-needle-south"></div>
                  </div>
                  <div className="home-compass-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-features">
        <div className="home-features-grid">
          <div className="home-feature-card">
            <div className="home-feature-icon">📊</div>
            <h3 className="home-feature-title">Comprehensive Guides</h3>
            <p className="home-feature-description">
              In-depth articles covering every aspect of PPC advertising from foundations to advanced optimization.
            </p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🎯</div>
            <h3 className="home-feature-title">Best Practices</h3>
            <p className="home-feature-description">
              Learn proven strategies and techniques used by top PPC professionals worldwide.
            </p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🚀</div>
            <h3 className="home-feature-title">Actionable Insights</h3>
            <p className="home-feature-description">
              Practical tips and tactics you can implement immediately to improve your campaigns.
            </p>
          </div>
        </div>
      </div>

      <div className="home-help-section">
        <div className="home-help-content">
          <h2 className="home-help-title">Need Help?</h2>
          <p className="home-help-description">
            Get in touch with us for personalized guidance and support with your PPC campaigns.
          </p>
          <form className="home-help-form" id="contact">
            <div className="home-form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="home-form-input"
                required
              />
            </div>
            <div className="home-form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="home-form-input"
                required
              />
            </div>
            <div className="home-form-group">
              <textarea
                placeholder="How can we help you?"
                className="home-form-textarea"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="home-form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
