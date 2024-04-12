import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = ({theme, setTheme, user}) => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} user={user} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;