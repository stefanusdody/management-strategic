import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Appbar from "./core/appbar";
import Home from "./core/home";
import ManagementStrategy from "./core/productone";
import Profile from "./core/profile";
import ExternalFactors from "./core/externalfactor";
import InternalFactors from "./core/internalfactor";
import Strategy from "./core/strategy";
import CorporateStrategy from './core/corporatestrategy';
import BusinessUnitStrategy from './core/businessunitstrategy';
import CompetitiveStrategy from './core/competitivestrategy';
import MarketLeadersStrategy from './core/marketleadersstrategy';
import MarketChallengersStrategy from './core/marketchallengersstrategy';
import MarketFollowersStrategy from './core/marketfollowersstrategy';
import MarketingMixStrategy from './core/marketingmixstrategy'


const Routes = () => {
  return(
    <BrowserRouter>
       <Appbar/>
         <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/management-strategy" exact component={ManagementStrategy}/>
          <Route path="/external-factors" exact component={ExternalFactors}/>
          <Route path="/internal-factors" exact component={InternalFactors}/>
          <Route path="/strategy" exact component={Strategy}/>
          <Route path="/corporatestrategy" exact component={CorporateStrategy}/>
          <Route path="/businessunitstrategy" exact component={BusinessUnitStrategy}/>
          <Route path="/competitivestrategy" exact component={CompetitiveStrategy}/>
          <Route path="/marketleadersstrategy" exact component={MarketLeadersStrategy}/>
          <Route path="/marketchallengersstrategy" exact component={MarketChallengersStrategy}/>
          <Route path="/marketfollowersstrategy" exact component={MarketFollowersStrategy}/>
          <Route path="/marketingmixstrategy" exact component={MarketingMixStrategy}/>
         </Switch>
    </BrowserRouter>

  )
};

export default Routes;
