import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AddData from "./redux_portfolio/AddData";
import React from "react";
import DataList from "./redux_portfolio/DataList";
import EditData from "./redux_portfolio/EditData";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-data">
            <AddData />
          </Route>
          <Route path="/edit-data">
            <EditData />
          </Route>
          <Route path="/">
            <DataList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
