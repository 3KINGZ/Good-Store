import React from "react";
import Banner from "../../components/Banner/Banner";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Banner />
      <SectionContainer />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HomePage;
