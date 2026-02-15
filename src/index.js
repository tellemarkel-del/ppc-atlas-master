import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'

// Google Ads Pages
import GoogleAdsHub from './views/google-ads-hub'
import GoogleAdsFoundations from './views/google-ads-foundations'
import CampaignTypes from './views/campaign-types'
import GoogleAdsBidding from './views/google-ads-bidding'
import GoogleAdsTargeting from './views/google-ads-targeting'
import GoogleAdsAssets from './views/google-ads-assets'
import GoogleAdsCreatives from './views/google-ads-creatives'
import GoogleAdsTracking from './views/google-ads-tracking'
import GoogleAdsOptimization from './views/google-ads-optimization'

// Meta Ads Pages
import MetaAdsHub from './views/meta-ads-hub'
import MetaAdsFoundations from './views/meta-ads-foundations'
import MetaAdsCampaignTypes from './views/meta-ads-campaign-types'
import MetaAdsBidding from './views/meta-ads-bidding'
import MetaAdsTargeting from './views/meta-ads-targeting'
import MetaAdsAssets from './views/meta-ads-assets'
import MetaAdsCreatives from './views/meta-ads-creatives'
import MetaAdsTracking from './views/meta-ads-tracking'
import MetaAdsOptimization from './views/meta-ads-optimization'

import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route component={Home} exact path="/" />
        
        {/* Google Ads Routes */}
        <Route component={GoogleAdsHub} exact path="/google-ads-hub" />
        <Route component={GoogleAdsFoundations} exact path="/google-ads-foundations" />
        <Route component={CampaignTypes} exact path="/google-ads-campaign-types" />
        <Route component={GoogleAdsBidding} exact path="/google-ads-bidding" />
        <Route component={GoogleAdsTargeting} exact path="/google-ads-targeting" />
        <Route component={GoogleAdsAssets} exact path="/google-ads-assets" />
        <Route component={GoogleAdsCreatives} exact path="/google-ads-creatives" />
        <Route component={GoogleAdsTracking} exact path="/google-ads-tracking" />
        <Route component={GoogleAdsOptimization} exact path="/google-ads-optimization" />
        
        {/* Meta Ads Routes */}
        <Route component={MetaAdsHub} exact path="/meta-ads-hub" />
        <Route component={MetaAdsFoundations} exact path="/meta-ads-foundations" />
        <Route component={MetaAdsCampaignTypes} exact path="/meta-ads-campaign-types" />
        <Route component={MetaAdsBidding} exact path="/meta-ads-bidding" />
        <Route component={MetaAdsTargeting} exact path="/meta-ads-targeting" />
        <Route component={MetaAdsAssets} exact path="/meta-ads-assets" />
        <Route component={MetaAdsCreatives} exact path="/meta-ads-creatives" />
        <Route component={MetaAdsTracking} exact path="/meta-ads-tracking" />
        <Route component={MetaAdsOptimization} exact path="/meta-ads-optimization" />
        
        {/* 404 */}
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
