import React from "react";
import { Switch, Route} from "react-router-dom";
// import HomePage from "../pages/homepage/homePage";
import QuoteDetailFirst from "../pages/quotedetailfirst/quotedetailfirst";
import QuoteDetailSecond from "../pages/quotedetailsecond/quotedetailsecond";
import QuoteDetailThird from "../pages/quotedetailthird/quotedetailthird";
import QuoteDetailFourth from "../pages/quotedetailfourth/quotedetailfourth";
import QuoteDetailFive from "../pages/quotedetailfive/quotedetailfive";
import QuoteDetailSix from "../pages/quotedetailsix/quotedetailsix";
import QuoteDetailSeven from "../pages/quotedetailseven/quotedetailseven";
 
function Routes() {
  return (
      <Switch>
        <Route
          exact
          path={`/`}
          component={QuoteDetailFirst} 
          />
        <Route
          exact
          path={`/Device/:devicetypename`}
          component={QuoteDetailSecond}
        />
        <Route
          exact
          path={`/Device/:devicetypename/Classification/:classificationname`}
          component={QuoteDetailThird}
        />
        <Route
          exact
          path={`/Device/:devicetypename/Classification/:classificationname/model/:modelname`}
          component={QuoteDetailFourth}
        />
        <Route
          exact
          path={`/Device/:devicetypename/Classification/:classificationname/model/:modelname/color/:colorname`}
          component={QuoteDetailFive}
        /> 
        <Route
          exact
          path={`/details`}
          component={QuoteDetailSix}
        /> 
        <Route
          exact
          path={`/thankyou`}
          component={QuoteDetailSeven}
        /> 
        {/* <Redirect from="/" to='quotedetailfirst' /> */}
      </Switch>
  );
}

export default Routes;