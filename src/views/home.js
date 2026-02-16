import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

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
                Google Ads Hub
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <svg viewBox="0 0 512 512" width="20" height="20" fill="white">
                    <path d="M480 256c0-123.7-100.3-224-224-224S32 132.3 32 256c0 111.8 82 204.5 189.2 221.4V322.2h-57v-66.2h57v-50.5c0-56.3 33.5-87.4 84.9-87.4 24.6 0 50.3 4.4 50.3 4.4v55.2h-28.3c-27.9 0-36.6 17.3-36.6 35.1v42.1h62.3l-10 66.2h-52.3v155.2C398 460.5 480 367.8 480 256z"/>
                  </svg>
                </span>
                Meta Ads Hub
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
