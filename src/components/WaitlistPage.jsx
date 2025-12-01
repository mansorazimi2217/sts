import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Code, Star, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-01.png";
import Particles from "./Particles ";

// Sample users for the waitlist display
const users = [
  { imgUrl: "https://avatars.githubusercontent.com/u/111780029" },
  { imgUrl: "https://avatars.githubusercontent.com/u/123104247" },
  { imgUrl: "https://avatars.githubusercontent.com/u/115650165" },
  { imgUrl: "https://avatars.githubusercontent.com/u/71373838" },
];

// Utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [resolvedTheme, setResolvedTheme] = useState("dark");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // You can replace this with your actual theme detection logic
    const detectTheme = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setResolvedTheme("dark");
      } else {
        setResolvedTheme("light");
      }
    };

    detectTheme();
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#1e3a8a");
  }, [resolvedTheme]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Your form submission logic here
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple Spotlight component replacement
  const Spotlight = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-900/20 to-blue-700/20 blur-3xl"
        style={{
          animation: "pulse 4s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        style={{
          animation: "pulse 4s ease-in-out infinite alternate-reverse",
        }}
      />
    </div>
  );

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black xl:h-screen">
      <Spotlight />
      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        color={color}
      /> */}

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

      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gradient-to-r from-blue-900/15 to-blue-900/5 px-4 py-2 backdrop-blur-sm"
        >
          <img
            src={logo}
            alt="logo"
            className="h-6 w-6 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <span className="text-sm font-medium text-white">STS</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="h-4 w-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "mb-4 cursor-crosshair bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl"
          )}
        >
          Join the{" "}
          <span className="bg-gradient-to-b from-white to-blue-900 bg-clip-text text-transparent">
            Waitlist
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 mt-2 text-gray-400 sm:text-lg"
        >
          Be the first to access our new courses
          <br className="hidden sm:block" /> Learn new Technology with us
          before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-3"
        >
          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-white/5 p-4 backdrop-blur-md"
            )}
          >
            <Code className="mb-2 h-5 w-5 text-blue-900" />
            <span className="text-xl font-bold text-white">500+</span>
            <span className="text-xs text-gray-400">Students</span>
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-white/5 p-4 backdrop-blur-md"
            )}
          >
            <ExternalLink className="mb-2 h-5 w-5 text-blue-900" />
            <span className="text-xl font-bold text-white">Certified</span>
            <span className="text-xs text-gray-400">Teachers</span>
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-white/5 p-4 backdrop-blur-md"
            )}
          >
            <Star className="mb-2 h-5 w-5 text-blue-900" />
            <span className="text-xl font-bold text-white">Top</span>
            <span className="text-xs text-gray-400">Courses</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col gap-4 sm:flex-row"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <>
                <div className="relative flex-1">
                  <motion.input
                    key="email-input"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-600 bg-white/5 px-6 py-4 text-white backdrop-blur-md transition-all placeholder:text-gray-400 focus:border-blue-900/50 focus:ring-2 focus:ring-blue-900/30 focus:outline-none"
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-1 text-sm text-red-400 sm:absolute"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-900 to-blue-800 px-8 py-4 font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] focus:ring-2 focus:ring-blue-900/50 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                    <Sparkles className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </button>
              </>
            ) : (
              <motion.div
                key="thank-you-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "flex-1 cursor-pointer rounded-xl border border-blue-900/20 bg-gradient-to-r from-blue-900/10 to-blue-900/10 px-6 py-4 font-medium text-blue-900 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] active:brightness-125"
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Thanks for joining!{" "}
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-1"
        >
          <div className="flex -space-x-3">
            {users.map((user, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="size-10 rounded-full border-2 border-black bg-gradient-to-r from-blue-900 to-blue-800 p-[2px]"
              >
                <div className="overflow-hidden rounded-full">
                  <img
                    src={user.imgUrl}
                    alt="Avatar"
                    className="rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6"
                    width={40}
                    height={40}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="ml-2 text-gray-400"
          >
            <span className="font-semibold text-blue-900">100+</span> already
            joined ✨
          </motion.span>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
