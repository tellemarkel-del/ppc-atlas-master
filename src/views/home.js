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
        <meta property="og:title" content="PPC Atlas - Master Google Ads &amp; Meta Ads" />
      </Helmet>
      <Navigation />
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-text-section">
            <h1 className="home-heading">Master PPC Advertising</h1>
            <p className="home-description">
              Your comprehensive knowledge base for Google Ads and Meta Ads. Learn strategies, best practices, and advanced techniques to elevate your digital advertising campaigns.
            </p>
            <div className="home-cta-buttons">
              <Link to="/google-ads-hub" className="home-button home-button-google">
                <span className="home-button-icon">
                  <img src={googleAdsLogoSrc} alt="Google Ads" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
                </span>
                Google Ads Atlas
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <img src={metaLogoSrc} alt="Meta" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
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
            <p className="home-feature-description">In-depth articles covering every aspect of PPC advertising from foundations to advanced optimization.</p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🎯</div>
            <h3 className="home-feature-title">Best Practices</h3>
            <p className="home-feature-description">Learn proven strategies and techniques used by top PPC professionals worldwide.</p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🚀</div>
            <h3 className="home-feature-title">Actionable Insights</h3>
            <p className="home-feature-description">Practical tips and tactics you can implement immediately to improve your campaigns.</p>
          </div>
        </div>
      </div>
      <div className="home-help-section">
        <div className="home-help-content">
          <h2 className="home-help-title">Need Help?</h2>
          <p className="home-help-description">Get in touch with us for personalized guidance and support with your PPC campaigns.</p>
          <form className="home-help-form" id="contact">
            <div className="home-form-group">
              <input type="text" placeholder="Your Name" className="home-form-input" required />
            </div>
            <div className="home-form-group">
              <input type="email" placeholder="Your Email" className="home-form-input" required />
            </div>
            <div className="home-form-group">
              <textarea placeholder="How can we help you?" className="home-form-textarea" rows="4" required></textarea>
            </div>
            <button type="submit" className="home-form-submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
