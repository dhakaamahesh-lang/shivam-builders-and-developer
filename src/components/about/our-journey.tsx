"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Typography } from "../ui/typography";
import Badge from "../common/badge";

const journeyData = [
  {
    year: "2018",
    title: "The Vision",
    description:
      "Shivam Builders was founded with a single mission: to blend architectural integrity with modern luxury. We started as a small team of three in a tiny studio.",
    image: "/images/bedroom-design-one.webp",
  },
  {
    year: "2020",
    title: "Rising Standards",
    description:
      "Despite global challenges, we delivered 5 major residential projects, setting a new benchmark for 'Trust and Quality' in the local market.",
    image: "/images/who-we-are.webp",
  },
  {
    year: "2023",
    title: "Modern Landmarks",
    description:
      "We expanded into commercial spaces, creating high-tech environments that prioritize both aesthetic beauty and practical efficiency.",
    image: "/images/bedroom-design-three.webp",
  },
  {
    year: "2026",
    title: "Building the Future",
    description:
      "Today, we are pioneers in sustainable 'Smart Homes,'  eco-friendly materials to build dreams that last for generations.",
    image: "/images/bedroom-design-one.webp",
  },
];

const TimelineCard = ({
  item,
  index,
}: {
  item: (typeof journeyData)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-between w-full ${index === journeyData.length - 1 ? "mb-0" : "mb-6 md:mb-32"} ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[45%] z-10"
      >
        <div className="relative group overflow-hidden bg-white-5 backdrop-blur-xl border border-white-10 p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-linear-to-br from-white-10 to-transparent pointer-events-none" />

          <Typography variant="h4" className="text-white-50 font-bold mb-2">
            {item.year}
          </Typography>
          <Typography variant="h3" className="mb-4 text-white">
            {item.title}
          </Typography>
          <Typography variant="p18" className="text-white-70 leading-relaxed">
            {item.description}
          </Typography>

          <div className="mt-6 md:hidden rounded-xl overflow-hidden h-60 sm:h-80 md:h-48">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-[45%] hidden md:block"
      >
        <div className="rounded-3xl overflow-hidden h-80 w-full border border-white-10 shadow-2xl">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
      </motion.div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 z-20 hidden md:block">
        <div className="w-full h-full bg-background border-4 border-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
      </div>
    </div>
  );
};

const OurJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="overflow-hidden">
      <div
        ref={containerRef}
        className="container mx-auto pt-28 md:pt-38 lg:pt-50 relative"
      >
        <div className="text-center mb-6 md:mb-8 lg:mb-12 relative z-10">
          <Badge className="mx-auto" text="Our Journey" />
          <Typography variant="h2" className="mt-6 max-w-3xl mx-auto">
            From a Single Blueprint to Building Your Dreams
          </Typography>
        </div>

        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-0 w-full hidden md:block">
            <svg
              viewBox="0 0 100 1200"
              className="h-full w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M50 0 C 90 200, 10 400, 50 600 C 90 800, 10 1000, 50 1200"
                fill="transparent"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="3"
              />
              <motion.path
                d="M50 0 C 90 200, 10 400, 50 600 C 90 800, 10 1000, 50 1200"
                fill="transparent"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="12 12"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="relative z-10">
            {journeyData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white-5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white-5 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </section>
  );
};

export default OurJourney;
