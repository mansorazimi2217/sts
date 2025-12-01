"use client";
import React, { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import Particles from "./Particles ";
import { motion, useInView } from "framer-motion";

export default function ContactUs2() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    errors: {},
    submitting: false,
    submitted: false,
  });

  // Refs for scroll animations
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialRef = useRef(null);
  const formContainerRef = useRef(null);

  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const contactInfoInView = useInView(contactInfoRef, {
    once: true,
    amount: 0.3,
  });
  const socialInView = useInView(socialRef, { once: true, amount: 0.3 });
  const formContainerInView = useInView(formContainerRef, {
    once: true,
    amount: 0.3,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    // Console log only
    console.log("Form submitted:", {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({
      ...state,
      submitting: false,
      submitted: true,
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-black py-30 ">
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
      <div className="relative z-10 container mx-auto flex justify-center items-center">
        <div className="w-full max-w-6xl">
          {/* Title Section */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="mt-4 mb-5 bg-gradient-to-br from-gray-300 via-blue-300 to-gray-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl transition-all duration-500 hover:scale-105">
              Let&apos;s Get in Touch
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-6 text-center text-gray-400 transition-all duration-500 hover:text-gray-300"
            >
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </motion.p>
          </motion.div>

          {/* Main Form Container */}
          <motion.div
            ref={formContainerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              formContainerInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-opacity-2 mx-auto grid w-full items-start gap-12 rounded-lg border border-gray-800 px-8 pt-12 pb-8 shadow-2xl shadow-slate-900 md:grid-cols-2 lg:px-16 backdrop-blur-md bg-black/30 transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-500/30 hover:bg-black/40 hover:scale-[1.02]"
          >
            {/* Form Section */}
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, x: -40 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8 text-slate-300"
              onSubmit={handleSubmit}
            >
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 text-lg group"
              >
                <label
                  htmlFor="name"
                  className="block text-white font-medium transition-all duration-300 group-hover:text-blue-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="bg-background flex h-12 w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm shadow-inner shadow-slate-800 outline-none hover:border-blue-500/50 hover:transition-all hover:outline-none focus:border-blue-500 focus:outline-none text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-blue-500/10"
                  placeholder="Enter your name"
                  name="name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 text-lg group"
              >
                <label
                  htmlFor="email"
                  className="block text-white font-medium transition-all duration-300 group-hover:text-blue-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="hover:transition-al bg-background placeholder:text-gray-400 flex h-12 w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm shadow-inner shadow-slate-800 outline-none file:text-sm file:font-medium hover:border-blue-500/50 hover:outline-none focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-blue-500/10"
                  name="email"
                  required
                />
                {state.errors && state.errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.email}
                  </p>
                )}
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 text-lg group"
              >
                <label
                  htmlFor="message"
                  className="block text-white font-medium transition-all duration-300 group-hover:text-blue-400"
                >
                  Message
                </label>
                <textarea
                  className="bg-background ring-offset-background placeholder:text-gray-400 mb-5 flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white shadow-inner shadow-slate-800 outline-none hover:border-blue-500/50 hover:transition-all hover:outline-none focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-blue-500/10"
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                />
                {state.errors && state.errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  formInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-blue-600 to-purple-600 py-2 text-center font-medium text-white shadow-lg transition-all duration-500 ease-in-out hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 hover:shadow-blue-500/30 transform"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send className="mx-2 inline h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </motion.button>
            </motion.form>

            {/* Contact Info Section */}
            <motion.div
              ref={contactInfoRef}
              initial={{ opacity: 0, x: 40 }}
              animate={
                contactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  contactInfoInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
                className="mb-10 text-2xl font-semibold text-white text-center transition-all duration-500 hover:text-blue-400 hover:scale-105"
              >
                Connect with Us
              </motion.h3>

              {/* Email Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  contactInfoInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12 flex gap-6 items-center group"
              >
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 shadow-inner shadow-gray-800 hover:shadow-lg hover:shadow-blue-500/50 hover:border-blue-500 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-500/20"
                  href="mailto:subha9.5roy350@gmail.com"
                >
                  <Mail className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110" />
                </a>
                <div className="text-md text-slate-300 transition-all duration-300 group-hover:translate-x-2">
                  <p className="text-white font-medium transition-all duration-300 group-hover:text-blue-400">
                    Email to us at
                  </p>
                  <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    subha9.5roy350@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  contactInfoInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 flex gap-6 items-center group"
              >
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 shadow-inner shadow-gray-800 hover:shadow-lg hover:shadow-green-500/50 hover:border-green-500 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 group-hover:bg-green-500/20"
                  href="tel:XXXXX-XXXXX"
                >
                  <Phone className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110" />
                </a>
                <div className="text-md text-slate-300 transition-all duration-300 group-hover:translate-x-2">
                  <p className="text-white font-medium transition-all duration-300 group-hover:text-green-400">
                    Call us at
                  </p>
                  <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    XXXXX XXXXX
                  </p>
                </div>
              </motion.div>

              {/* Location Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  contactInfoInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12 flex gap-6 items-center group"
              >
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 shadow-inner shadow-gray-800 hover:shadow-lg hover:shadow-red-500/50 hover:border-red-500 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 group-hover:bg-red-500/20"
                  href="https://maps.google.com/?q=Techno+Main+Salt+Lake,+Sector-V,+Kolkata-700091"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110" />
                </a>
                <div className="text-md text-slate-300 transition-all duration-300 group-hover:translate-x-2">
                  <p className="text-white font-medium transition-all duration-300 group-hover:text-red-400">
                    Location at
                  </p>
                  <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    Techno Main Salt Lake, Sector-V, Kolkata-700091
                  </p>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                ref={socialRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  socialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center space-x-8 py-7"
              >
                {[
                  { icon: Twitter, color: "blue-400", delay: 0 },
                  { icon: Facebook, color: "blue-600", delay: 0.1 },
                  { icon: Instagram, color: "pink-500", delay: 0.2 },
                  { icon: Github, color: "gray-500", delay: 0.3 },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={
                      socialInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: social.delay }}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 hover:shadow-lg hover:shadow-${social.color}/50 hover:border-${social.color} hover:transition-all hover:duration-500 hover:ease-in-out backdrop-blur-sm transition-all duration-300 hover:bg-${social.color}/20`}
                    href="#"
                  >
                    <social.icon className="h-6 w-6 text-white transition-all duration-300 hover:scale-110" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
