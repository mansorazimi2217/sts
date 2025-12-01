import React, { useState, useEffect } from "react";
import Particles from "./Particles ";

// Counter Component for animated numbers
const Counter = ({ end, duration = 3000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let startTime;
      let startValue = 0;
      const endValue = end;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + easeOutQuart * (endValue - startValue)
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      // Start animation after a short delay
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 500);
    }
  }, [end, duration, hasAnimated]);

  return (
    <div>
      {count}
      {suffix}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black relative flex justify-center items-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#3B82F6", "#60A5FA"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8 text-center max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-0">
        {/* Main Heading - Smaller on mobile */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Smart Technology
          </span>
          <br />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            IT Services
          </span>
        </h1>

        {/* Description - Simplified on mobile */}
        <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed text-gray-200 font-light mb-6 sm:mb-8 md:mb-10">
          Transform your career with industry-focused IT training.
          {/* Remove the second line on mobile */}
          <span className="hidden sm:block mt-2 text-blue-200 font-medium text-sm sm:text-base md:text-lg">
            Hands-on projects, expert mentors, real-world experience.
          </span>
        </p>

        {/* CTA Buttons - Only primary button on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center">
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 font-bold text-white rounded-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 text-sm sm:text-base">
            <span className="relative z-10 flex items-center gap-2">
              Start Learning
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>

          {/* Remove secondary button on mobile */}
          <button className="hidden sm:flex group border-2 border-white/20 hover:border-white/40 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 font-semibold text-white rounded-lg hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              View Courses
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats - Now visible on mobile with slower animation */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-sm md:max-w-2xl">
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
              <Counter end={500} suffix="+" duration={3500} />
            </div>
            <div className="text-xs sm:text-sm text-gray-300">
              Students Trained
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
              <Counter end={50} suffix="+" duration={3000} />
            </div>
            <div className="text-xs sm:text-sm text-gray-300">
              Industry Experts
            </div>
          </div>
          <div className="text-center col-span-2 md:col-span-1 mt-4 md:mt-0">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
              <Counter end={95} suffix="%" duration={4000} />
            </div>
            <div className="text-xs sm:text-sm text-gray-300">
              Career Success
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Keep on all devices */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
