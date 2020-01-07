import React from "react";
import { Route, Switch } from "react-router-dom";

import { Layout } from "./Components";
import { Main } from "./Pages";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Layout>
  );
};

export default Routes;
