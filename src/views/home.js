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
                Google Ads Atlas
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <svg viewBox="0 0 512 320" width="26" height="16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.7 211.6c0 31.6 6.4 55.1 15.9 71.7 10.4 18.1 25.3 27.1 41.2 27.1 18.3 0 35.2-5.8 60.5-48 21.2-35.4 47.8-83.2 68.6-112.7l61.4-75.2c25.1-39.6 46.7-72 75.3-72 33.3 0 63.7 19.1 86 55.1 0 0 0 0 0 0.1-34.8 38.1-63.2 68.1-90.5 93.8-27.3 25.7-51.7 41.1-51.7 41.1 0 0-1.2-6.6-2.1-13.6-2.8-13.4-7.7-26.7-16.6-38-9.8-15.8-24.9-23.8-40.2-23.8-21.7 0-39.6 15.3-61.2 53.1-13.6 23.7-27.7 54.4-40.5 78.1-12.9 23.7-26.4 44.3-42.3 60.3-17.9 18-38.4 7.8-52.1 7.8-52.4 0-92.7-46.8-92.7-137.7 0-42.1 9.3-79 27.9-107.9 0 0 0-0.1 0.1-0.1 18.7 137.3 0 0 0 0zm153-158.8c25.4-34 53.8-52.8 81.8-52.8 22.4 0 43.7 6.6 62.2 18.5 20.3 15.2 40.7 39.7 61.1 82.4l5.9 11.2c17.7 34.1 28.6 56.6 39.6 69 12.7 21.9 24.2 31.7 35.9 31.7 19.6 0 31.2-16.6 31.2-40.7 0-23.8-6.4-46-17.7-63.6L512 55.1c0 0 0 0 0-0.1 22.7 32.7 35 78.7 35 127 0 63.5-27.4 110.8-67.8 134.4-12.1 8.1-25.1 12.1-38.5 12.1-24 0-44.8-8.2-60.8-23.7-17.1-14.9-30.4-34.8-46.3-62.4l-22.9-41.4c-15.7-29.1-31.6-53.1-42.1-68.3-10.3-14.8-22.1-27.1-34.2-27.1-20 0-37.7 14.5-55.5 42.2-7.7 15.5-11.9 33.5-11.9 50.9 0 19.2 4.1 37.1 11.6 51.8l-23.1 47.5c-11.4-25.8-17.4-56.1-17.4-88.1 0-52.4 12.5-104.2 37.2-138.4z"/>
                  </svg>
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
