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
      <Logos />
      <WaitlistPage />
      <ContactUs1 />
    </div>
  );
};

export default Home;
