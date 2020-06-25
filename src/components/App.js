import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
