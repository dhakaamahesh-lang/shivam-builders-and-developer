"use client";
import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Badge from "../common/badge";
import { Typography } from "../ui/typography";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heading = "Crafting spaces that blend style and comfort";
  const description =
    "We turn ideas into inviting, functional spaces thoughtfully designed with purpose, and beautifully styled for the way you live every day.";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.1,
      },
    },
  };

  const descriptionContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0.2,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  // Split by words
  const headingWords = heading.split(" ");
  const descriptionWords = description.split(" ");

  return (
    <section ref={ref} className="container mx-auto pt-12 lg:pt-28">
      {/* Badge Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="About Us" />
      </motion.div>

      {/* Heading with character-by-character animation */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-3 md:mt-4 max-w-150 mx-auto text-center"
      >
        <Typography as="h2" variant="h2">
          {headingWords.map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${word}-${charIndex}`}
                  variants={child}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < headingWords.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </Typography>
      </motion.div>

      {/* Description with character-by-character animation */}
      <motion.div
        variants={descriptionContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-3 md:mt-4 text-center max-w-150 mx-auto text-white-70"
      >
        <Typography variant="p18" className="text-white-70">
          {descriptionWords.map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${word}-${charIndex}`}
                  variants={child}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < descriptionWords.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </Typography>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-8 md:mt-12 lg:mt-16"
      >
        <div className="relative w-full h-100 sm:h-140 aspect-video rounded-2xl lg:rounded-4xl overflow-hidden bg-black">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/about-us-video-poster.webp"
          >
            <source src="/images/about-us-video.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
