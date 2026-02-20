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
                  <img src={googleAdsLogoSrc} alt="Google Ads" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
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
