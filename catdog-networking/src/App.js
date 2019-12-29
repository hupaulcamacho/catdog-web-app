import React from "react";
import { Link, Route, Switch } from "react-router-dom"

import "./App.css";
import Home from "./Components/Home"
import DogSearch from "./Components/DogSearch"
import CatSearch from "./Components/CatSearch"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/dogsearch">DogSearch</Link>{" "}
        <Link to="/catsearch">CatSearch</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dogsearch" component={DogSearch} />
        <Route path="/catsearch" component={CatSearch} />
      </Switch>
    </div>
  );
}

export default App;
