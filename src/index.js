import React from "react";
import ReactDOM from "react-dom";
import configureState from "./store";
import { Provider } from "react-redux";
import "./index.scss";
import RouterMap from "./router";
import registerServiceWorker from "./registerServiceWorker";

const store = configureState();
ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
