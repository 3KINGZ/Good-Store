import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import HomePage from "./routes/HomePage/HomePage";
import MenClothes from "./routes/MenClothes/MenClothes";
import WomenClothes from "./routes/WomenClothes/WomenClothes";
import MenShoes from "./routes/MenShoes/MenShoes";
import WomenShoes from "./routes/WomenShoes/WomenShoes";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Promo />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/men-shoes" exact component={MenShoes} />
        <Route path="/women-shoes" exact component={WomenShoes} />
        <Route path="/men-clothes" exact component={MenClothes} />
        <Route path="/women-clothes" exact component={WomenClothes} />
      </Switch>
    </Router>
  );
}

export default App;
