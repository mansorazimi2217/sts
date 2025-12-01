import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllCourses from "./components/Courses";
import Home from "./MainPage";
import AboutUs1 from "./components/About";
import ContactUs2 from "./components/ContactUs";
import Footer4Col from "./components/Footer";
import WaitlistPage from "./components/WaitlistPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/categories" element={<AllCourses />} />
            <Route path="/about" element={<AboutUs1 />} />
            <Route path="/contact" element={<ContactUs2 />} />
            <Route path="/wishlist" element={<WaitlistPage />} />
          </Routes>
        </main>
        <Footer4Col />
      </div>
    </Router>
  );
};

export default App;
