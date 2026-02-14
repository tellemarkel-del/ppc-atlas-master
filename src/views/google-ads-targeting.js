import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-targeting.css'

const GoogleAdsTargeting = (props) => {
  return (
    <div className="google-ads-targeting-container">
      <Helmet>
        <title>Targeting - Google Ads - PPC Atlas</title>
        <meta property="og:title" content="Targeting - Google Ads - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="google-ads-targeting-hero">
        <div className="google-ads-targeting-breadcrumb">
          <span>Google Ads</span>
          <span className="google-ads-targeting-separator">/</span>
          <span>Targeting</span>
        </div>
        <h1 className="google-ads-targeting-title">Targeting</h1>
        <p className="google-ads-targeting-subtitle">
          Reach the right audience at the right time with precision targeting strategies
        </p>
      </div>
      <div className="google-ads-targeting-content">
        <div className="google-ads-targeting-wrapper">
          <section className="google-ads-targeting-section">
            <h2 className="google-ads-targeting-heading">Audience Targeting Fundamentals</h2>
            <p className="google-ads-targeting-text">
              Audience targeting allows you to reach specific groups of people based on their interests, behaviors, demographics, and interactions with your business. Google Ads offers multiple audience types including affinity audiences, in-market audiences, custom audiences, and remarketing lists. Understanding how to layer and combine these audiences is essential for campaign success.
            </p>
            <div className="google-ads-targeting-image-container">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
                alt="Team analyzing audience data"
                className="google-ads-targeting-image"
              />
            </div>
          </section>

          <section className="google-ads-targeting-section">
            <h2 className="google-ads-targeting-heading">Keyword Targeting Strategies</h2>
            <p className="google-ads-targeting-text">
              Keywords are the foundation of Search campaigns. Match types control how closely a user's search query must match your keyword for your ad to enter the auction. Broad match offers maximum reach, phrase match provides moderate control, and exact match delivers precision targeting. Negative keywords are equally important, preventing your ads from showing on irrelevant searches and protecting your budget.
            </p>
            <div className="google-ads-targeting-highlight">
              <h3 className="google-ads-targeting-highlight-title">Match Type Best Practices</h3>
              <p className="google-ads-targeting-text">
                Use a combination of match types to balance reach and relevance. Start with phrase and exact match for control, then gradually add broad match with smart bidding once you have conversion data. Always maintain a robust negative keyword list.
              </p>
            </div>
          </section>

          <section className="google-ads-targeting-section">
            <h2 className="google-ads-targeting-heading">Demographic Targeting</h2>
            <p className="google-ads-targeting-text">
              Demographic targeting lets you refine your audience based on age, gender, parental status, and household income. This ensures your ads reach users who are most likely to be interested in your products or services. Use demographic data to identify high-performing segments and adjust bids or exclude underperforming demographics to improve efficiency.
            </p>
            <div className="google-ads-targeting-image-container">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop" 
                alt="Demographic analysis dashboard"
                className="google-ads-targeting-image"
              />
            </div>
          </section>

          <section className="google-ads-targeting-section">
            <h2 className="google-ads-targeting-heading">Geographic Targeting</h2>
            <p className="google-ads-targeting-text">
              Location targeting enables you to show ads to users in specific geographic areas, from entire countries down to individual postal codes. You can target users physically located in your selected areas, users searching for your locations, or both. Geographic targeting is crucial for local businesses and for adjusting bids based on regional performance.
            </p>
            <div className="google-ads-targeting-highlight">
              <h3 className="google-ads-targeting-highlight-title">Location Targeting Tips</h3>
              <p className="google-ads-targeting-text">
                Review location reports regularly to identify high-performing areas. Use radius targeting around your business locations and consider excluding areas that don't convert well. For service area businesses, target where your customers are, not just where your office is located.
              </p>
            </div>
          </section>

          <section className="google-ads-targeting-section">
            <h2 className="google-ads-targeting-heading">Placement Targeting</h2>
            <p className="google-ads-targeting-text">
              In Display and Video campaigns, placement targeting allows you to choose specific websites, apps, videos, or pages where you want your ads to appear. You can select managed placements manually or use automatic placements and then refine based on performance data. Regular review of placement reports helps identify top performers and exclude poor-performing or irrelevant placements.
            </p>
            <div className="google-ads-targeting-image-container">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=600&fit=crop" 
                alt="Digital advertising placements"
                className="google-ads-targeting-image"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GoogleAdsTargeting
