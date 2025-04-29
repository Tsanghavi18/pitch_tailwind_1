import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./view/Header";
import Herosection from "./view/Herosection";
import TemplateGallery from "./view/ScrollSlider";
import Slider from "./view/Slider";
import Builtwithpitch from "./view/Slider2";
import Footer from "./view/Footer";
import Abovefooter from "./view/Last";
import Clock from "./view/Main";
import Cards from "./view/Cards";
import Howpitchworks from "./view/Howpitchworks";
import ScrollSlider from "./view/ScrollSlider";

// hello

export default function App() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden ">
        <Herosection />
        <ScrollSlider />
        <Howpitchworks />
        <Slider />
        <Builtwithpitch />
        <Clock />
        <Cards />
        <Abovefooter />
        <Footer />
      </div>
    </>
  );
}
