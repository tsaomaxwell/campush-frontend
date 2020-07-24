import React from "react";
import logo from "./logo.svg";
import "./custom.css";
import "./campush.css";
import Header from "./components/header";
import CategoryBanner from "./components/category-banner";
import Result from "./components/result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route
          path="/search"
          render={(props) => (
            <div>
              <CategoryBanner />
              <Result />
            </div>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
