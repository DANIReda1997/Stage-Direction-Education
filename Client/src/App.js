import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import AddGreve from "./components/PagesDirecteur/AddGreve";
import PageGardeDirecteur from "./components/PagesDirecteur/PageGardeDirecteur";
import { Provider } from "react-redux";
import store from "./store";
import PageGardeAdmin from "./components/PagesAdmin/PageGardeAdmin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Gestion Greves" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/AddGreve" component={AddGreve} />
                <Route
                  exact
                  path="/PageGardeDirecteur"
                  component={PageGardeDirecteur}
                />
                <Route
                  exact
                  path="/PageGardeAdmin"
                  component={PageGardeAdmin}
                />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
