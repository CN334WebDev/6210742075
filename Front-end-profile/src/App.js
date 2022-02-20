import React from "react";
import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";

import { Provider } from 'react-redux';
import Store from "../src/redux/store"

function App(props) {
  return (
    <Provider store={Store}>
      <div className="App">
        <PortfolioContainer />
      </div>
    </Provider>
  );
}

export default App;
