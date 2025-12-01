import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactUs1 from "./components/ContactUs";
import WaitlistPage from "./components/WaitlistPage";
import Footer4Col from "./components/Footer";
import Logos from "./components/LogosPage";
import AllCourses from "./components/Courses";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WaitlistPage />
      <ContactUs1 />
      <Logos />
    </div>
  );
};

export default Home;
