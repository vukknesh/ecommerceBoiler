import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

let myComponent = document.getElementById("app");
if (myComponent !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    myComponent
  );
}
