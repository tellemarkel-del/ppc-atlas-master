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
import GoogleAdsHub from './views/google-ads-hub'
import GoogleAdsFoundations from './views/google-ads-foundations'
import CampaignTypes from './views/campaign-types'
import GoogleAdsBidding from './views/google-ads-bidding'
import GoogleAdsTargeting from './views/google-ads-targeting'
import GoogleAdsAssets from './views/google-ads-assets'
import GoogleAdsCreatives from './views/google-ads-creatives'
import GoogleAdsTracking from './views/google-ads-tracking'
import GoogleAdsOptimization from './views/google-ads-optimization'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={GoogleAdsHub} exact path="/google-ads-hub" />
        <Route component={GoogleAdsFoundations} exact path="/google-ads-foundations" />
        <Route component={CampaignTypes} exact path="/google-ads-campaign-types" />
        <Route component={GoogleAdsBidding} exact path="/google-ads-bidding" />
        <Route component={GoogleAdsTargeting} exact path="/google-ads-targeting" />
        <Route component={GoogleAdsAssets} exact path="/google-ads-assets" />
        <Route component={GoogleAdsCreatives} exact path="/google-ads-creatives" />
        <Route component={GoogleAdsTracking} exact path="/google-ads-tracking" />
        <Route component={GoogleAdsOptimization} exact path="/google-ads-optimization" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
