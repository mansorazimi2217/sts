"use client";
import React from "react";
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

export default function ContactUs2() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    errors: {},
    submitting: false,
    submitted: false,
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
          <h2 className="mt-4 mb-5 bg-gradient-to-br from-gray-300 via-blue-300 to-gray-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl transition-all duration-500 hover:scale-105">
            Let&apos;s Get in Touch
          </h2>
          <p className="text-muted-foreground mb-6 text-center text-gray-400 transition-all duration-500 hover:text-gray-300">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
          <div className="bg-opacity-2 mx-auto grid w-full items-start gap-12 rounded-lg border border-gray-800 px-8 pt-12 pb-8 shadow-2xl shadow-slate-900 md:grid-cols-2 lg:px-16 backdrop-blur-md bg-black/30 transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-500/30 hover:bg-black/40 hover:scale-[1.02]">
            <form className="space-y-8 text-slate-300" onSubmit={handleSubmit}>
              <div className="space-y-4 text-lg group">
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
              </div>

              <div className="space-y-4 text-lg group">
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
              </div>
              <div className="space-y-4 text-lg group">
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
              </div>
              <button
                className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-blue-600 to-purple-600 py-2 text-center font-medium text-white shadow-lg transition-all duration-500 ease-in-out hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 hover:shadow-blue-500/30 transform"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send className="mx-2 inline h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </form>
            <div className="flex flex-col justify-center">
              <h3 className="mb-10 text-2xl font-semibold text-white text-center transition-all duration-500 hover:text-blue-400 hover:scale-105">
                Connect with Us
              </h3>
              <div className="mb-12 flex gap-6 items-center group">
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
              </div>

              <div className="mb-12 flex gap-6 items-center group">
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
              </div>

              <div className="mb-12 flex gap-6 items-center group">
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
              </div>

              <div className="flex justify-center space-x-8 py-7">
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 hover:shadow-lg hover:shadow-blue-400/50 hover:border-blue-400 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 hover:bg-blue-400/20"
                  href="#"
                >
                  <Twitter className="h-6 w-6 text-white transition-all duration-300 hover:scale-110" />
                </a>
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 hover:bg-blue-600/20"
                  href="#"
                >
                  <Facebook className="h-6 w-6 text-white transition-all duration-300 hover:scale-110" />
                </a>
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 hover:shadow-lg hover:shadow-pink-500/50 hover:border-pink-500 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 hover:bg-pink-500/20"
                  href="#"
                >
                  <Instagram className="h-6 w-6 text-white transition-all duration-300 hover:scale-110" />
                </a>
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 hover:shadow-lg hover:shadow-gray-500/50 hover:border-gray-500 hover:transition-all hover:duration-500 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 backdrop-blur-sm transition-all duration-300 hover:bg-gray-500/20"
                  href="#"
                >
                  <Github className="h-6 w-6 text-white transition-all duration-300 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
