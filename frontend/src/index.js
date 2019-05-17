import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./history";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/store.js";
import { LastLocationProvider } from "react-router-last-location";

let myComponent = document.getElementById("app");
if (myComponent !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <LastLocationProvider>
          <App />
        </LastLocationProvider>
      </Router>
    </Provider>,
    myComponent
  );
}
