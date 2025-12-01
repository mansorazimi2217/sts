import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo-01.png";
import {
  categories,
  getCoursesByCategory,
  getCategoriesWithCounts,
} from "../data/coursesData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesRef = useRef(null);
  const timeoutRef = useRef(null);

  const categoriesWithCounts = getCategoriesWithCounts();

  // آیکن‌های حرفه‌ای‌تر برای دسته‌بندی‌ها
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "web-development":
        return "🌐";
      case "mobile-development":
        return "📱";
      case "data-science":
        return "📊";
      case "cybersecurity":
        return "🔒";
      case "cloud-computing":
        return "☁️";
      case "ai-ml":
        return "🤖";
      case "programming":
        return "💻";
      case "database":
        return "🗄️";
      case "devops":
        return "⚙️";
      case "design":
        return "🎨";
      default:
        return "📚";
    }
  };

  // تابع برای دریافت تصویر دوره
  const getCourseImage = (course) => {
    return course.image;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesHovered(false);
        setActiveCategory("all");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsCoursesHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCoursesHovered(false);
      setActiveCategory("all");
    }, 300);
  };

  const currentCourses = getCoursesByCategory(activeCategory);

  // تابع برای نمایش جزئیات دوره در حالت توسعه یافته
  const CourseDetailsModal = ({ course, onClose }) => {
    if (!course) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black backdrop-blur-lg">
        <div className="relative w-full max-w-4xl bg-black rounded-xl border border-gray-800 overflow-hidden max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* هدر مودال */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <img
              src={getCourseImage(course)}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/90 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="px-3 py-1 bg-black/90 backdrop-blur-sm text-white text-sm rounded-lg">
                {categories.find((c) => c.id === course.category)?.name}
              </span>
            </div>
          </div>

          {/* محتوای مودال */}
          <div className="p-6">
            {/* عنوان و قیمت */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {course.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>
                      {course.rating} ({course.reviews} reviews)
                    </span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {course.price}
                </div>
                {course.originalPrice && (
                  <div className="text-sm text-gray-400 line-through">
                    {course.originalPrice}
                  </div>
                )}
              </div>
            </div>

            {/* اطلاعات دوره */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-black/50 rounded-lg p-4 text-center border border-gray-800">
                <div className="text-lg font-bold text-white">
                  {course.level}
                </div>
                <div className="text-sm text-gray-400">Level</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center border border-gray-800">
                <div className="text-lg font-bold text-white">
                  {course.students?.toLocaleString() || "0"}
                </div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center border border-gray-800">
                <div className="text-lg font-bold text-white">
                  {course.language}
                </div>
                <div className="text-sm text-gray-400">Language</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center border border-gray-800">
                <div className="text-lg font-bold text-white">
                  {course.instructor.split(" ")[0]}
                </div>
                <div className="text-sm text-gray-400">Instructor</div>
              </div>
            </div>

            {/* توضیحات */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-3">
                About This Course
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* مهارت‌های کسب شده */}
            {course.features && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  What You'll Get
                </h3>
                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* سرفصل‌ها */}
            {course.syllabus && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Course Content
                </h3>
                <div className="space-y-2">
                  {course.syllabus.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-gray-800"
                    >
                      <span className="text-gray-400 text-sm">{index + 1}</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                  {course.syllabus.length > 5 && (
                    <div className="text-center text-gray-400 text-sm py-2">
                      + {course.syllabus.length - 5} more topics
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* دکمه‌های اقدام */}
            <div className="pt-6 border-t border-gray-800 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors border border-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-black/30 py-2"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? "py-1" : "py-0"
            }`}
          >
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="transition-all duration-300">
                  <img
                    src={logo}
                    alt="Smart Technology IT Services"
                    className={`object-contain transition-all duration-300 ${
                      isScrolled
                        ? "h-8 w-8 sm:h-10 sm:w-10 brightness-0 invert"
                        : "h-10 w-10 sm:h-12 sm:w-12 brightness-0 invert"
                    }`}
                  />
                </div>
                <div className="text-white transition-all duration-300">
                  <h1
                    className={`font-bold leading-tight transition-all duration-300 ${
                      isScrolled ? "text-sm sm:text-lg" : "text-lg sm:text-xl"
                    }`}
                  >
                    Smart Technology
                  </h1>
                  <p
                    className={`transition-all duration-300 ${
                      isScrolled ? "text-xs opacity-80" : "text-sm"
                    }`}
                  >
                    IT Services
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                to="/"
                className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm xl:text-base hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div
                ref={coursesRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center text-white/90 hover:text-white transition-all duration-300 font-medium text-sm xl:text-base hover:scale-105 ${
                    isCoursesHovered ? "text-white" : ""
                  }`}
                >
                  Courses
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isCoursesHovered ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isCoursesHovered && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[95vw] max-w-6xl bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                    style={{
                      animation: "fadeInUp 0.3s ease-out",
                    }}
                  >
                    <div className="flex h-[500px]">
                      {/* Categories Column */}
                      <div className="w-1/3 border-r border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="p-6 border-b border-white/10">
                          <h3 className="text-white font-bold text-lg mb-2">
                            Browse Categories
                          </h3>
                          <p className="text-white/60 text-sm">
                            Choose a category to explore courses
                          </p>
                        </div>
                        {/* افزودن استایل مخفی‌سازی اسکرول بار برای بخش دسته‌بندی‌ها */}
                        <div className="overflow-y-auto h-[420px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                          {categoriesWithCounts.map((category) => (
                            <div
                              key={category.id}
                              className={`px-6 py-4 cursor-pointer transition-all duration-300 border-l-4 ${
                                activeCategory === category.id
                                  ? `bg-gradient-to-r ${category.color} border-white text-white shadow-lg`
                                  : "border-transparent text-white/70 hover:text-white hover:bg-white/5"
                              }`}
                              onMouseEnter={() =>
                                setActiveCategory(category.id)
                              }
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="text-xl">
                                    {getCategoryIcon(category.id)}
                                  </span>
                                  <div>
                                    <div className="font-semibold text-sm">
                                      {category.name}
                                    </div>
                                    <div className="text-xs opacity-70 mt-1">
                                      {category.description}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                                    {category.courseCount} courses
                                  </span>
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                      activeCategory === category.id
                                        ? "rotate-90 scale-110"
                                        : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7-7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Courses Column */}
                      <div className="w-2/3">
                        <div className="p-6 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-white font-bold text-lg">
                                {activeCategory === "all"
                                  ? "All Courses"
                                  : categories.find(
                                      (c) => c.id === activeCategory
                                    )?.name}
                              </h3>
                              <p className="text-white/60 text-sm mt-1">
                                {activeCategory === "all"
                                  ? "Browse all available courses"
                                  : categories.find(
                                      (c) => c.id === activeCategory
                                    )?.description}
                              </p>
                            </div>
                            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                              {currentCourses.length} courses
                            </span>
                          </div>
                        </div>
                        {/* افزودن استایل مخفی‌سازی اسکرول بار برای بخش دوره‌ها */}
                        <div className="overflow-y-auto h-[420px] p-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                          {currentCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {currentCourses.slice(0, 6).map((course) => (
                                <div
                                  key={course.id}
                                  className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsCoursesHovered(false);
                                    setSelectedCourse(course);
                                  }}
                                >
                                  <div className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                      {/* حذف آیکن دوره و استفاده از تصویر کوچک */}
                                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                                        <img
                                          src={getCourseImage(course)}
                                          alt={course.title}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-white font-semibold text-sm group-hover:text-white/90 line-clamp-2 mb-1">
                                        {course.title}
                                      </h4>
                                      <p className="text-white/60 text-xs mb-2 line-clamp-2">
                                        {course.description}
                                      </p>
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                          <div className="flex items-center space-x-1">
                                            <svg
                                              className="w-3 h-3 text-yellow-400"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                            >
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-white/80 text-xs">
                                              {course.rating}
                                            </span>
                                          </div>
                                          <span className="text-white/40 text-xs">
                                            •
                                          </span>
                                          <span className="text-white/60 text-xs">
                                            {course.duration}
                                          </span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                          <span className="text-green-400 font-semibold text-sm">
                                            {course.price}
                                          </span>
                                          {course.originalPrice && (
                                            <span className="text-white/40 text-xs line-through">
                                              {course.originalPrice}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      {course.isFeatured && (
                                        <div className="mt-2">
                                          <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                                            Featured
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {/* دکمه جزئیات */}
                                  <div className="mt-3 flex justify-end">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsCoursesHovered(false);
                                        setSelectedCourse(course);
                                      }}
                                      className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all duration-300"
                                    >
                                      View Details
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-center">
                              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                                <svg
                                  className="w-8 h-8 text-white/40"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  />
                                </svg>
                              </div>
                              <h3 className="text-white font-semibold text-lg mb-2">
                                No Courses Available
                              </h3>
                              <p className="text-white/60 text-sm">
                                We're working on adding new courses to this
                                category.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold text-sm">
                            Ready to start learning?
                          </h4>
                          <p className="text-white/60 text-xs mt-1">
                            Join thousands of students advancing their careers
                          </p>
                        </div>
                        <div className="flex space-x-3">
                          <Link
                            to="/courses"
                            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 font-medium text-sm hover:scale-105 border border-white/20"
                            onClick={() => setIsCoursesHovered(false)}
                          >
                            View All Courses
                          </Link>
                          <Link
                            to="/categories"
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-medium text-sm hover:scale-105 shadow-lg"
                            onClick={() => setIsCoursesHovered(false)}
                          >
                            Browse Categories
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm xl:text-base hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm xl:text-base hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/wishlist"
                className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-all duration-300 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/20 shadow-2xl"
              style={{
                animation: "slideDown 0.3s ease-out",
              }}
            >
              <div className="flex flex-col p-0 space-y-0">
                <Link
                  to="/"
                  className="py-4 px-6 transition-all duration-200 font-medium text-base border-b border-white/10 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Courses Accordion */}
                <div className="border-b border-white/10">
                  <button
                    className="flex justify-between items-center w-full py-4 px-6 text-left transition-all duration-200 font-medium text-base text-white hover:bg-white/10"
                    onClick={() => {
                      const coursesContent = document.getElementById(
                        "mobile-courses-content"
                      );
                      if (coursesContent) {
                        coursesContent.classList.toggle("hidden");
                        const icon =
                          coursesContent.previousElementSibling.querySelector(
                            "svg"
                          );
                        if (icon) {
                          icon.classList.toggle("rotate-180");
                        }
                      }
                    }}
                  >
                    Courses
                    <svg
                      className="w-4 h-4 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    id="mobile-courses-content"
                    className="hidden bg-black/50"
                  >
                    {categoriesWithCounts.map((category) => (
                      <div
                        key={category.id}
                        className="border-t border-white/10"
                      >
                        <button
                          className="flex justify-between items-center w-full py-3 px-8 text-left transition-all duration-200 font-medium text-sm text-white/90 hover:bg-white/10 hover:text-white"
                          onClick={() => {
                            const categoryContent = document.getElementById(
                              `mobile-category-${category.id}`
                            );
                            if (categoryContent) {
                              categoryContent.classList.toggle("hidden");
                              const icon =
                                categoryContent.previousElementSibling.querySelector(
                                  "svg"
                                );
                              if (icon) {
                                icon.classList.toggle("rotate-90");
                              }
                            }
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <span>{category.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                              {category.courseCount}
                            </span>
                            <svg
                              className="w-4 h-4 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>
                        <div
                          id={`mobile-category-${category.id}`}
                          className="hidden bg-black/30"
                        >
                          {getCoursesByCategory(category.id).map((course) => (
                            <div
                              key={course.id}
                              className="block py-3 px-12 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 border-b border-white/5 cursor-pointer"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setSelectedCourse(course);
                              }}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex items-start space-x-3">
                                  <div className="w-10 h-10 rounded overflow-hidden border border-white/10">
                                    <img
                                      src={getCourseImage(course)}
                                      alt={course.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <div className="font-medium">
                                      {course.title}
                                    </div>
                                    <div className="text-xs text-white/50 mt-1 flex items-center space-x-2">
                                      <span>{course.duration}</span>
                                      <span>•</span>
                                      <span className="text-yellow-400">
                                        ⭐ {course.rating}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-green-400 text-xs font-semibold bg-white/10 px-2 py-1 rounded">
                                  {course.price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      to="/courses"
                      className="block py-4 px-8 text-center font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Courses
                    </Link>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="py-4 px-6 transition-all duration-200 font-medium text-base border-b border-white/10 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="py-4 px-6 transition-all duration-200 font-medium text-base border-b border-white/10 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="p-4">
                  <Link
                    to="/wishlist"
                    className="w-full py-3 rounded-lg transition-all duration-300 font-medium text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105 backdrop-blur-sm block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </nav>

      {/* مودال جزئیات دوره */}
      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
};

export default Navbar;
