import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Movies from "./views/Movies";
import NavBar from "./components/NavBar";
import Toto from "./components/Toto";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-movies" component={Movies} />
        <Route path="/toto" component={Toto} />
      </Switch>
    </div>
  );
}

export default App;
