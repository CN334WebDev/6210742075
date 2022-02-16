import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AddData from "./redux_portfolio/AddData";
import React from "react";
import DataList from "./redux_portfolio/DataList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-data">
            <AddData />
          </Route>

          <Route path="/">
            <DataList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
