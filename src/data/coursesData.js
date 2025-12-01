export const categories = [
  {
    id: "all",
    name: "All Courses",
    icon: "📚",
    description: "Browse all available courses",
    color: "from-gray-500 to-gray-700",
  },
  {
    id: "programming",
    name: "Programming",
    icon: "💻",
    description: "Web & Software Development",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: "🤖",
    description: "Artificial Intelligence & ML",
    color: "from-green-500 to-blue-600",
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: "🎨",
    description: "Design & User Experience",
    color: "from-pink-500 to-red-600",
  },
  {
    id: "security",
    name: "Cyber Security",
    icon: "🛡️",
    description: "Security & Protection",
    color: "from-orange-500 to-yellow-600",
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: "📊",
    description: "Data Analysis & Visualization",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: "📱",
    description: "iOS & Android Development",
    color: "from-teal-500 to-green-600",
  },
];

export const courses = [
  {
    id: 1,
    title: "Advanced Web Development",
    instructor: "Dr. Ahmad Mohammadi",
    instructorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    duration: "12 weeks",
    students: 245,
    price: "15,000 AFN",
    originalPrice: "19,200 AFN",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&q=80",
    category: "programming",
    level: "Intermediate",
    language: "English",
    rating: 4.8,
    reviews: 128,
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and deploy your applications.",
    features: [
      "60+ hours of video content",
      "10 real-world projects",
      "Lifetime access",
      "Certificate of completion",
      "Q&A support",
    ],
    syllabus: [
      "HTML5 & CSS3 Advanced",
      "JavaScript ES6+",
      "React & Redux",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "RESTful APIs",
      "Deployment & DevOps",
    ],
    startDate: "2024-02-15",
    enrollmentEndDate: "2024-02-10",
    tags: ["React", "Node.js", "MongoDB", "Fullstack"],
    isFeatured: true,
    discount: 22,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    instructor: "Prof. Karimi Nasab",
    instructorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    duration: "16 weeks",
    students: 189,
    price: "19,200 AFN",
    originalPrice: "24,000 AFN",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop&q=80",
    category: "ai",
    level: "Beginner",
    language: "Persian",
    rating: 4.9,
    reviews: 95,
    description:
      "Learn the fundamentals of machine learning with Python. From basic algorithms to neural networks.",
    features: [
      "80+ hours of video content",
      "15 practical exercises",
      "Kaggle competitions",
      "Mentor support",
      "Research papers discussion",
    ],
    syllabus: [
      "Python for Data Science",
      "Linear Regression",
      "Classification Algorithms",
      "Neural Networks",
      "TensorFlow & Keras",
      "Model Deployment",
    ],
    startDate: "2024-03-01",
    enrollmentEndDate: "2024-02-25",
    tags: ["Python", "TensorFlow", "Deep Learning", "AI"],
    isFeatured: true,
    discount: 20,
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Sara Mohammadi",
    instructorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    duration: "8 weeks",
    students: 312,
    price: "11,400 AFN",
    originalPrice: "14,400 AFN",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop&q=80",
    category: "design",
    level: "All Levels",
    language: "Persian",
    rating: 4.7,
    reviews: 156,
    description:
      "Learn user-centered design principles and create stunning interfaces with Figma and Adobe XD.",
    features: [
      "40+ hours of video content",
      "Design system creation",
      "Portfolio projects",
      "1-on-1 feedback",
      "Industry best practices",
    ],
    syllabus: [
      "Design Thinking",
      "Wireframing & Prototyping",
      "Figma Mastery",
      "User Research",
      "Design Systems",
      "Portfolio Building",
    ],
    startDate: "2024-02-20",
    enrollmentEndDate: "2024-02-15",
    tags: ["Figma", "Design", "UX Research", "Prototyping"],
    isFeatured: false,
    discount: 21,
  },
  {
    id: 4,
    title: "Cyber Security Essentials",
    instructor: "Mehdi Rezaei",
    instructorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    duration: "10 weeks",
    students: 167,
    price: "16,800 AFN",
    originalPrice: "21,000 AFN",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&q=80",
    category: "security",
    level: "Intermediate",
    language: "English",
    rating: 4.8,
    reviews: 89,
    description:
      "Protect systems and networks from cyber threats. Learn ethical hacking and security best practices.",
    features: [
      "50+ hours of video content",
      "Hands-on labs",
      "Security tools training",
      "CTF challenges",
      "Career guidance",
    ],
    syllabus: [
      "Network Security",
      "Cryptography",
      "Ethical Hacking",
      "Penetration Testing",
      "Security Auditing",
      "Incident Response",
    ],
    startDate: "2024-03-10",
    enrollmentEndDate: "2024-03-05",
    tags: ["Security", "Ethical Hacking", "Networking", "Penetration"],
    isFeatured: true,
    discount: 20,
  },
  {
    id: 5,
    title: "Data Science with Python",
    instructor: "Dr. Fatemi",
    instructorImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    duration: "14 weeks",
    students: 201,
    price: "17,400 AFN",
    originalPrice: "21,600 AFN",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80",
    category: "data-science",
    level: "Intermediate",
    language: "English",
    rating: 4.6,
    reviews: 112,
    description:
      "Become a data scientist with Python. Learn data analysis, visualization, and machine learning.",
    features: [
      "70+ hours of video content",
      "Real datasets practice",
      "Statistical analysis",
      "Data visualization",
      "Project portfolio",
    ],
    syllabus: [
      "Pandas & NumPy",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning",
      "SQL for Data Science",
      "Big Data Basics",
    ],
    startDate: "2024-02-25",
    enrollmentEndDate: "2024-02-20",
    tags: ["Python", "Pandas", "Statistics", "Visualization"],
    isFeatured: false,
    discount: 19,
  },
  {
    id: 6,
    title: "React Native Mobile Development",
    instructor: "Ali Hassanpour",
    instructorImage:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    duration: "10 weeks",
    students: 278,
    price: "15,600 AFN",
    originalPrice: "19,200 AFN",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&q=80",
    category: "mobile",
    level: "Intermediate",
    language: "Persian",
    rating: 4.7,
    reviews: 134,
    description:
      "Build cross-platform mobile apps with React Native. Learn once, write anywhere.",
    features: [
      "55+ hours of video content",
      "4 complete mobile apps",
      "App Store deployment",
      "State management",
      "Native modules",
    ],
    syllabus: [
      "React Native Fundamentals",
      "Navigation",
      "State Management",
      "API Integration",
      "Native Features",
      "App Publishing",
    ],
    startDate: "2024-03-05",
    enrollmentEndDate: "2024-02-28",
    tags: ["React Native", "Mobile", "JavaScript", "Cross-platform"],
    isFeatured: true,
    discount: 19,
  },
  {
    id: 7,
    title: "JavaScript Fundamentals",
    instructor: "Mohammad Ahmadi",
    instructorImage:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop",
    duration: "6 weeks",
    students: 420,
    price: "8,400 AFN",
    originalPrice: "10,800 AFN",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&q=80",
    category: "programming",
    level: "Beginner",
    language: "Persian",
    rating: 4.5,
    reviews: 210,
    description:
      "Learn JavaScript from scratch. Master the fundamentals of modern web development.",
    features: [
      "30+ hours of video content",
      "5 practical projects",
      "Interactive exercises",
      "Code reviews",
      "Beginner friendly",
    ],
    syllabus: [
      "JavaScript Basics",
      "DOM Manipulation",
      "Events",
      "ES6+ Features",
      "Async Programming",
      "API Integration",
    ],
    startDate: "2024-02-18",
    enrollmentEndDate: "2024-02-12",
    tags: ["JavaScript", "Web", "Frontend", "ES6"],
    isFeatured: false,
    discount: 22,
  },
  {
    id: 8,
    title: "Python for Beginners",
    instructor: "Dr. Farhad Zaman",
    instructorImage:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
    duration: "8 weeks",
    students: 385,
    price: "9,600 AFN",
    originalPrice: "12,000 AFN",
    image:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec6?w=800&h=400&fit=crop&q=80",
    category: "programming",
    level: "Beginner",
    language: "English",
    rating: 4.8,
    reviews: 178,
    description:
      "Start your programming journey with Python. Learn coding fundamentals and build your first applications.",
    features: [
      "35+ hours of video content",
      "10 coding exercises",
      "Mini-projects",
      "Certificate included",
      "Community support",
    ],
    syllabus: [
      "Python Basics",
      "Data Structures",
      "Functions & Modules",
      "File Handling",
      "OOP in Python",
      "Basic Projects",
    ],
    startDate: "2024-03-01",
    enrollmentEndDate: "2024-02-25",
    tags: ["Python", "Programming", "Beginner", "Coding"],
    isFeatured: true,
    discount: 20,
  },
  {
    id: 9,
    title: "Digital Marketing Fundamentals",
    instructor: "Sahar Rahimi",
    instructorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    duration: "6 weeks",
    students: 256,
    price: "9,000 AFN",
    originalPrice: "12,000 AFN",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80",
    category: "marketing",
    level: "All Levels",
    language: "Persian",
    rating: 4.6,
    reviews: 134,
    description:
      "Learn digital marketing strategies including SEO, social media, content marketing, and analytics.",
    features: [
      "25+ hours of video content",
      "Case studies",
      "Practical assignments",
      "Certification",
      "Career guidance",
    ],
    syllabus: [
      "SEO Fundamentals",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Google Analytics",
      "Campaign Planning",
    ],
    startDate: "2024-02-22",
    enrollmentEndDate: "2024-02-16",
    tags: ["Marketing", "SEO", "Social Media", "Analytics"],
    isFeatured: false,
    discount: 25,
  },
  {
    id: 10,
    title: "Network Administration",
    instructor: "Hamed Karimi",
    instructorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    duration: "10 weeks",
    students: 156,
    price: "14,400 AFN",
    originalPrice: "18,000 AFN",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&h=400&fit=crop&q=80",
    category: "security",
    level: "Intermediate",
    language: "English",
    rating: 4.7,
    reviews: 89,
    description:
      "Learn network administration, configuration, troubleshooting, and security best practices.",
    features: [
      "45+ hours of video content",
      "Lab simulations",
      "Router/switch configuration",
      "Troubleshooting exercises",
      "Industry certification prep",
    ],
    syllabus: [
      "Networking Basics",
      "TCP/IP Protocols",
      "Router Configuration",
      "Network Security",
      "Troubleshooting",
      "Wireless Networking",
    ],
    startDate: "2024-03-08",
    enrollmentEndDate: "2024-03-01",
    tags: ["Networking", "Security", "Administration", "Cisco"],
    isFeatured: false,
    discount: 20,
  },
  {
    id: 11,
    title: "Cloud Computing with AWS",
    instructor: "Nasir Ahmed",
    instructorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    duration: "10 weeks",
    students: 198,
    price: "18,000 AFN",
    originalPrice: "24,000 AFN",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80",
    category: "programming",
    level: "Intermediate",
    language: "English",
    rating: 4.7,
    reviews: 112,
    description:
      "Learn cloud computing fundamentals with AWS. Deploy, manage, and scale applications in the cloud.",
    features: [
      "50+ hours of video content",
      "Hands-on AWS labs",
      "Real projects",
      "AWS certification prep",
      "Industry best practices",
    ],
    syllabus: [
      "Cloud Fundamentals",
      "AWS Core Services",
      "EC2 & S3",
      "Lambda Functions",
      "Cloud Security",
      "DevOps in Cloud",
    ],
    startDate: "2024-03-15",
    enrollmentEndDate: "2024-03-10",
    tags: ["AWS", "Cloud", "DevOps", "Infrastructure"],
    isFeatured: true,
    discount: 25,
  },
  {
    id: 12,
    title: "Game Development with Unity",
    instructor: "Zahra Karimi",
    instructorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    duration: "14 weeks",
    students: 145,
    price: "16,500 AFN",
    originalPrice: "22,000 AFN",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop&q=80",
    category: "programming",
    level: "Intermediate",
    language: "Persian",
    rating: 4.6,
    reviews: 89,
    description:
      "Create stunning 2D and 3D games with Unity. Learn game design, programming, and publishing.",
    features: [
      "60+ hours of video content",
      "3 complete games",
      "Asset creation",
      "Physics programming",
      "App store publishing",
    ],
    syllabus: [
      "Unity Interface",
      "C# Programming",
      "Game Physics",
      "AI in Games",
      "Multiplayer Setup",
      "Game Publishing",
    ],
    startDate: "2024-03-12",
    enrollmentEndDate: "2024-03-07",
    tags: ["Unity", "Game Development", "C#", "3D"],
    isFeatured: false,
    discount: 25,
  },
];

// اضافه کردن دسته‌بندی جدید برای مارکتینگ
categories.push({
  id: "marketing",
  name: "Digital Marketing",
  icon: "📈",
  description: "Marketing & Business Growth",
  color: "from-purple-500 to-pink-600",
});

// Helper functions
export const getCoursesByCategory = (categoryId) => {
  if (categoryId === "all") return courses;
  return courses.filter((course) => course.category === categoryId);
};

export const getFeaturedCourses = () => {
  return courses.filter((course) => course.isFeatured);
};

export const getCourseById = (id) => {
  return courses.find((course) => course.id === id);
};

export const getCoursesByInstructor = (instructorName) => {
  return courses.filter((course) => course.instructor === instructorName);
};

export const searchCourses = (query) => {
  const lowerQuery = query.toLowerCase();
  return courses.filter(
    (course) =>
      course.title.toLowerCase().includes(lowerQuery) ||
      course.instructor.toLowerCase().includes(lowerQuery) ||
      (course.tags &&
        course.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))) ||
      course.description.toLowerCase().includes(lowerQuery)
  );
};

export const getCategoriesWithCounts = () => {
  return categories.map((category) => ({
    ...category,
    courseCount:
      category.id === "all"
        ? courses.length
        : courses.filter((course) => course.category === category.id).length,
  }));
};

// تابع کمکی برای تبدیل تومان به افغانی
export const convertToAfghani = (tomanAmount) => {
  const numericAmount = parseInt(tomanAmount.replace(/[^\d]/g, ""));
  const afghaniAmount = Math.round(numericAmount * 0.006);
  return afghaniAmount.toLocaleString("en-US") + " AFN";
};

// تابع کمکی برای فرمت کردن قیمت به افغانی
export const formatAfghaniPrice = (amount) => {
  return amount.toLocaleString("en-US") + " AFN";
};
