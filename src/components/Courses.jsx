import React, { useState, useMemo } from "react";
import { courses, categories, getCoursesByCategory } from "../data/coursesData";

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const coursesPerPage = 12;

  // فیلتر و مرتب‌سازی دوره‌ها
  const filteredCourses = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? [...courses]
        : [...getCoursesByCategory(selectedCategory)];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(term) ||
          course.description.toLowerCase().includes(term)
      );
    }

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, "")) || 0;
          const priceB = parseInt(b.price.replace(/\D/g, "")) || 0;
          return priceA - priceB;
        });
      case "price-high":
        return filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, "")) || 0;
          const priceB = parseInt(b.price.replace(/\D/g, "")) || 0;
          return priceB - priceA;
        });
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "duration":
        return filtered.sort((a, b) => {
          const durationA = parseInt(a.duration.replace(/\D/g, "")) || 0;
          const durationB = parseInt(b.duration.replace(/\D/g, "")) || 0;
          return durationA - durationB;
        });
      case "newest":
        return filtered.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          return 0;
        });
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, searchTerm]);

  // محاسبات صفحه‌بندی
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // آمار
  const stats = useMemo(
    () => ({
      totalCourses: courses.length,
      totalCategories: categories.length,
      highestRating: Math.max(...courses.map((c) => c.rating)),
      expertInstructors: new Set(courses.map((c) => c.instructor)).size,
    }),
    []
  );

  // تابع برای دریافت تصویر دوره
  const getCourseImage = (course) => {
    return course.image;
  };

  // تابع برای نمایش جزئیات دوره در حالت توسعه یافته
  const CourseDetailsModal = ({ course, onClose }) => {
    if (!course) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black backdrop-blur-lg ">
        <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl border border-gray-800 overflow-hidden max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {course.level}
                </div>
                <div className="text-sm text-gray-400">Level</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {course.students?.toLocaleString() || "0"}
                </div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">
                  {course.language}
                </div>
                <div className="text-sm text-gray-400">Language</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
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
                      className="flex items-center gap-3 p-3 bg-black/30 rounded-lg"
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

            {/* دکمه بستن */}
            <div className="pt-6 border-t border-gray-800">
              <button
                onClick={onClose}
                className="w-full py-3 bg-black hover:bg-gray-900 text-white rounded-lg font-medium transition-colors"
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
    <div className="min-h-screen bg-black pt-50 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* هدر */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover our collection of professional courses
          </p>
        </div>

        {/* کنترل‌های فیلتر */}
        <div className="bg-black/50 rounded-xl p-4 mb-6 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* جستجو */}
            <div className="w-full md:flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute right-3 top-3 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* دکمه فیلتر برای موبایل */}
            <div className="w-full md:hidden">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black border border-gray-800 rounded-lg text-gray-300 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filters
              </button>
            </div>

            {/* فیلترها برای دسکتاپ */}
            <div className="hidden md:flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="default">Sort by</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* فیلترهای موبایل */}
          {showMobileFilters && (
            <div className="md:hidden mt-4 space-y-4">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white"
              >
                <option value="default">Sort by</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          )}
        </div>

        {/* آمار */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
            <div className="text-lg font-bold text-white mb-1">
              {stats.totalCourses}
            </div>
            <div className="text-sm text-gray-400">Courses</div>
          </div>
          <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
            <div className="text-lg font-bold text-white mb-1">
              {stats.totalCategories}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
            <div className="text-lg font-bold text-white mb-1">
              {stats.highestRating}
            </div>
            <div className="text-sm text-gray-400">Top Rating</div>
          </div>
          <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
            <div className="text-lg font-bold text-white mb-1">
              {stats.expertInstructors}
            </div>
            <div className="text-sm text-gray-400">Instructors</div>
          </div>
        </div>

        {/* نتایج */}
        <div className="text-white mb-4">
          <span className="font-bold">{filteredCourses.length}</span> courses
          found
          {selectedCategory !== "all" &&
            ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
        </div>

        {/* کارت‌های دوره - ساده و کوچک */}
        {currentCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="bg-black/30 rounded-lg overflow-hidden hover:bg-black/50 transition-colors cursor-pointer border border-gray-800"
                onClick={() => setExpandedCourseId(course.id)}
              >
                {/* تصویر دوره */}
                <div className="relative h-32">
                  <img
                    src={getCourseImage(course)}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {/* بج وضعیت */}
                  {course.isFeatured && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-2 right-2 bg-black/90 text-white text-xs px-2 py-1 rounded">
                    {course.price}
                  </span>
                </div>

                {/* اطلاعات بسیار مختصر */}
                <div className="p-3">
                  <h3 className="font-medium text-white line-clamp-2 text-sm mb-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {course.rating}
                    </span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {categories.find((c) => c.id === course.category)?.name}
                  </div>

                  {/* دکمه Details */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCourseId(course.id);
                    }}
                    className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center border border-gray-800">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              No courses found
            </h3>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
                setSortBy("default");
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* صفحه‌بندی */}
        {filteredCourses.length > 0 && totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-black border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-900 disabled:opacity-30"
              >
                ←
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-3 py-2 rounded-lg ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "bg-black text-gray-300 hover:bg-gray-900 border border-gray-800"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-black border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-900 disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* مودال جزئیات دوره */}
      {expandedCourseId && (
        <CourseDetailsModal
          course={courses.find((c) => c.id === expandedCourseId)}
          onClose={() => setExpandedCourseId(null)}
        />
      )}
    </div>
  );
};

export default AllCourses;
