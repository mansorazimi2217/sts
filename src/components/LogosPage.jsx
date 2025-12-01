"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Particles2 from "../components/Particles ";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const certificationsRef = useRef(null);
  const isInView = useInView(certificationsRef, { once: true, amount: 0.3 });

  // شبیه‌سازی لودینگ
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    {
      name: "Microsoft Azure",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      alt: "Microsoft Azure",
      delay: 0.1,
    },
    {
      name: "Cisco",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      alt: "Cisco",
      delay: 0.2,
    },
    {
      name: "Amazon Web Services",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      alt: "Amazon Web Services",
      delay: 0.3,
    },
    {
      name: "Google Cloud",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png",
      alt: "Google Cloud",
      delay: 0.4,
    },
    {
      name: "IBM",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      alt: "IBM",
      delay: 0.5,
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000]">
      {/* Particle Background */}
      <div className="absolute inset-0">
        <Particles2
          particleColors={["#ffffff", "#3B82F6", "#60A5FA"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="mx-auto mt-32 w-screen max-w-2xl px-4">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="bg-gradient-to-r from-rose-200 via-white to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              <span className="block">Trusted by experts.</span>
              <span className="block mt-2">Our Certifications.</span>
            </h1>
          </motion.div>

          {/* Certifications Grid */}
          <div ref={certificationsRef} className="mt-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center"
            >
              {certifications.map((cert, index) => {
                const IconComponent = motion.img;

                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.8, y: 20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: cert.delay,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="flex justify-center"
                  >
                    <div className="group relative">
                      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-200 to-blue-400 opacity-0 blur transition duration-500 group-hover:opacity-70" />
                      <div className="relative rounded-lg bg-gray-900 p-4">
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          className="h-12 w-auto object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                        />
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileHover={{ width: "100%", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 h-1 bg-gradient-to-r from-rose-200 to-blue-400"
                        />
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-xs text-center text-gray-400 opacity-0 group-hover:opacity-100"
                        >
                          {cert.name}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We are proud to be certified and recognized by industry leaders,
              ensuring the highest standards of quality and expertise in our
              work.
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#1e3a8a,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#37415166] after:bg-zinc-900"
        />
      </motion.div>
    </div>
  );
}
