"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { BorderBeam } from "./ui/BorderBeam";
import { CardHoverEffect } from "./ui/CardHoverEffect";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import Particles from "./Particles ";

// icon component map
const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new possibilities to create cutting-edge solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.",
    icon: "Users",
  },
  {
    title: "Excellence",
    description:
      "We strive for perfection in everything we do, consistently delivering high-quality work.",
    icon: "Sparkles",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the positive difference we make in people's lives and businesses.",
    icon: "Globe",
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: "About Us",
    subtitle:
      "Building the future of web development with beautiful, reusable components.",
    mission:
      "Our mission is to democratize web development by providing high-quality, customizable components that help developers build stunning websites quickly and efficiently.",
    vision:
      "We envision a world where creating beautiful websites is accessible to everyone, regardless of their design or development experience.",
    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
      {/* حذف تمام افکت‌های background */}

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

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="text-gray-400 mt-6 text-xl">{aboutData.subtitle}</p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-8 md:grid-cols-2"
          >
            {/* Mission Card */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
              }}
              className="group relative block overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 backdrop-blur-xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                colorFrom="#6B7280"
                colorTo="#9CA3AF"
              />

              <div className="mb-6 inline-flex aspect-square h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-700 to-gray-600 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-gray-300" />
              </div>

              <div className="space-y-4">
                <h2 className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-3xl font-bold text-transparent mb-4">
                  Our Mission
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
              }}
              className="group relative block overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 backdrop-blur-xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                colorFrom="#9CA3AF"
                colorTo="#D1D5DB"
                reverse
              />

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-700 to-gray-600 backdrop-blur-sm">
                <Target className="h-8 w-8 text-gray-300" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-gray-400 mx-auto mt-4 max-w-2xl text-lg">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant="gray"
                    glowEffect={true}
                    size="lg"
                    darkMode={true}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
