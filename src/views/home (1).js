import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const metaLogoSrc = 'data:image/png;base64,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'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PPC Atlas - Master Google Ads & Meta Ads</title>
        <meta
          property="og:title"
          content="PPC Atlas - Master Google Ads & Meta Ads"
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
                  <svg viewBox="0 0 533.5 544.3" width="20" height="20" fill="white">
                    <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"/>
                    <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"/>
                    <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"/>
                    <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"/>
                  </svg>
                </span>
                Google Ads Atlas
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <img
                    src={metaLogoSrc}
                    alt="Meta"
                    style={{ width: '22px', height: '22px', objectFit: 'contain' }}
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
