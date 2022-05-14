import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import './index.css';
import { Provider, provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
