import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import NewsApiService from "./services/newsapi-service";
import { NewsApiServiceProvider } from "./components/newsapi-service-context";

import store from "./store";

import * as serviceWorker from "./serviceWorker";

const newsapiService = new NewsApiService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <NewsApiServiceProvider value={{ newsapiService }}>
          <Router>
            <App />
          </Router>
        </NewsApiServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
