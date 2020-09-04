import React from "react";
import "./app.css";
import Header from "../header";
import Footer from "../footer";
import { Route, Switch } from "react-router-dom";
import { HomePage, CategoryPage } from "../pages";
import DetailsPage from "../pages/details-page";
import ErrorBoundry from "../error-boundry";

const App = () => {
  return (
    <>
      <Header></Header>
      <div className="content">
        <ErrorBoundry>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route
              path="/news/:category"
              render={({ match }) => {
                const { category } = match.params;
                return <CategoryPage category={category}></CategoryPage>;
              }}
              exact
            />
            <Route
              path="/news/:category/:id"
              render={({ match }) => {
                const { category, id } = match.params;
                return <DetailsPage category={category} id={id}></DetailsPage>;
              }}
              exact
            />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </ErrorBoundry>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
