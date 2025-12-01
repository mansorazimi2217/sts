import Navbar from "./components/Navbar";
import AllCourses from "./components/Courses";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MainPage";
import AboutUs1 from "./components/About";
import ContactUs2 from "./components/ContactUs";
import Footer4Col from "./components/Footer";
import WaitlistPage from "./components/WaitlistPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/categories" element={<AllCourses />} />
            <Route path="/about" element={<AboutUs1 />} />
            <Route path="/contact" element={<ContactUs2 />} />
            <Route path="/wishlist" element={<WaitlistPage />} />
          </Routes>
        </div>
      </Router>
      <Footer4Col />
    </div>
  );
};

export default App;
