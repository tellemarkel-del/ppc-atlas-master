import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './meta-ads-targeting.css'

const MetaAdsTargeting = (props) => {
  return (
    <div className="meta-ads-targeting-container">
      <Helmet>
        <title>Targeting - Meta Ads - PPC Atlas</title>
        <meta property="og:title" content="Targeting - Meta Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="meta-ads-targeting-hero">
        <div className="meta-ads-targeting-breadcrumb">
          <span>Meta Ads</span>
          <span className="meta-ads-targeting-separator">/</span>
          <span>Targeting</span>
        </div>
        <h1 className="meta-ads-targeting-title">Targeting</h1>
        <p className="meta-ads-targeting-subtitle">
          Master targeting strategies for Meta advertising
        </p>
      </div>
      <div className="meta-ads-targeting-content">
        <div className="meta-ads-targeting-wrapper">
          <section className="meta-ads-targeting-section">
            <h2 className="meta-ads-targeting-heading">Understanding Meta Targeting</h2>
            <p className="meta-ads-targeting-text">
              Meta Ads provides powerful capabilities for targeting. The platform's advanced features enable advertisers to reach their target audience effectively across Facebook, Instagram, Messenger, and Audience Network. Understanding how to leverage these tools is essential for campaign success and achieving your marketing objectives.
            </p>
            <div className="meta-ads-targeting-image-container">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop" 
                alt="Meta targeting overview"
                className="meta-ads-targeting-image"
              />
            </div>
          </section>

          <section className="meta-ads-targeting-section">
            <h2 className="meta-ads-targeting-heading">Advanced Strategies</h2>
            <p className="meta-ads-targeting-text">
              Implementing advanced strategies for targeting requires a deep understanding of Meta's algorithm and best practices. Focus on creating compelling campaigns that resonate with your audience while maintaining efficiency. Test different approaches systematically to identify what works best for your specific business goals and target market.
            </p>
            <div className="meta-ads-targeting-highlight">
              <h3 className="meta-ads-targeting-highlight-title">Key Best Practices</h3>
              <p className="meta-ads-targeting-text">
                Leverage Meta's machine learning capabilities. Monitor performance metrics closely. Test multiple variations to find winning combinations. Scale successful campaigns gradually while maintaining quality and efficiency.
              </p>
            </div>
          </section>

          <section className="meta-ads-targeting-section">
            <h2 className="meta-ads-targeting-heading">Implementation Guide</h2>
            <p className="meta-ads-targeting-text">
              Proper implementation ensures your campaigns achieve optimal results. Follow Meta's guidelines and recommendations while adapting strategies to your specific business context. Regular monitoring and optimization are crucial for maintaining strong performance over time. Use Meta's reporting tools to gain insights and make data-driven decisions.
            </p>
            <div className="meta-ads-targeting-image-container">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="Implementation dashboard"
                className="meta-ads-targeting-image"
              />
            </div>
          </section>

          <section className="meta-ads-targeting-section">
            <h2 className="meta-ads-targeting-heading">Optimization Techniques</h2>
            <p className="meta-ads-targeting-text">
              Continuous optimization is key to long-term success with Meta Ads. Analyze performance data regularly to identify opportunities for improvement. Adjust your strategies based on results and market conditions. Stay updated with platform changes and new features that can enhance your campaigns' effectiveness.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MetaAdsTargeting
