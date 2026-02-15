import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './meta-ads-creatives.css'

const MetaAdsCreatives = (props) => {
  return (
    <div className="meta-ads-creatives-container">
      <Helmet>
        <title>Creatives - Meta Ads - PPC Atlas</title>
        <meta property="og:title" content="Creatives - Meta Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="meta-ads-creatives-hero">
        <div className="meta-ads-creatives-breadcrumb">
          <span>Meta Ads</span>
          <span className="meta-ads-creatives-separator">/</span>
          <span>Creatives</span>
        </div>
        <h1 className="meta-ads-creatives-title">Creatives</h1>
        <p className="meta-ads-creatives-subtitle">
          Master creatives strategies for Meta advertising
        </p>
      </div>
      <div className="meta-ads-creatives-content">
        <div className="meta-ads-creatives-wrapper">
          <section className="meta-ads-creatives-section">
            <h2 className="meta-ads-creatives-heading">Understanding Meta Creatives</h2>
            <p className="meta-ads-creatives-text">
              Meta Ads provides powerful capabilities for creatives. The platform's advanced features enable advertisers to reach their target audience effectively across Facebook, Instagram, Messenger, and Audience Network. Understanding how to leverage these tools is essential for campaign success and achieving your marketing objectives.
            </p>
            <div className="meta-ads-creatives-image-container">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop" 
                alt="Meta creatives overview"
                className="meta-ads-creatives-image"
              />
            </div>
          </section>

          <section className="meta-ads-creatives-section">
            <h2 className="meta-ads-creatives-heading">Advanced Strategies</h2>
            <p className="meta-ads-creatives-text">
              Implementing advanced strategies for creatives requires a deep understanding of Meta's algorithm and best practices. Focus on creating compelling campaigns that resonate with your audience while maintaining efficiency. Test different approaches systematically to identify what works best for your specific business goals and target market.
            </p>
            <div className="meta-ads-creatives-highlight">
              <h3 className="meta-ads-creatives-highlight-title">Key Best Practices</h3>
              <p className="meta-ads-creatives-text">
                Leverage Meta's machine learning capabilities. Monitor performance metrics closely. Test multiple variations to find winning combinations. Scale successful campaigns gradually while maintaining quality and efficiency.
              </p>
            </div>
          </section>

          <section className="meta-ads-creatives-section">
            <h2 className="meta-ads-creatives-heading">Implementation Guide</h2>
            <p className="meta-ads-creatives-text">
              Proper implementation ensures your campaigns achieve optimal results. Follow Meta's guidelines and recommendations while adapting strategies to your specific business context. Regular monitoring and optimization are crucial for maintaining strong performance over time. Use Meta's reporting tools to gain insights and make data-driven decisions.
            </p>
            <div className="meta-ads-creatives-image-container">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="Implementation dashboard"
                className="meta-ads-creatives-image"
              />
            </div>
          </section>

          <section className="meta-ads-creatives-section">
            <h2 className="meta-ads-creatives-heading">Optimization Techniques</h2>
            <p className="meta-ads-creatives-text">
              Continuous optimization is key to long-term success with Meta Ads. Analyze performance data regularly to identify opportunities for improvement. Adjust your strategies based on results and market conditions. Stay updated with platform changes and new features that can enhance your campaigns' effectiveness.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MetaAdsCreatives
