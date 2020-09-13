import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Banner from "./components/Banner/Banner";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Promo />
      <Banner />
      <SectionContainer />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
