import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import HomePage from "./routes/HomePage/HomePage";
import MenClothes from "./routes/MenClothes/MenClothes";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Promo />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/men-clothes" component={MenClothes} />
      </Switch>
    </Router>
  );
}

export default App;
