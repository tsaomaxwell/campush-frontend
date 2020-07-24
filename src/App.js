import React from "react";
import logo from "./logo.svg";
import "./custom.css";
import "./campush.css";
import Header from "./components/header";
import CategoryBanner from "./components/category-banner";
import LandingBanner from "./components/landing-banner";
import Result from "./components/result";
import Category from "./components/category";
import Footer from "./components/maxwell-components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route
          path="/"
          exact
          render={(props) => (
            <div>
              <LandingBanner />
              <Category />
            </div>
          )}
        />
        <Route
          path="/results"
          render={(props) => (
            <div>
              <CategoryBanner />
              <Result />
            </div>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
