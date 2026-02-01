"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Badge from "../common/badge";
import { Typography } from "../ui/typography";
import TestimonialsMarquee from "./testinomial-slider";

const Testinomial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="pt-28 md:pt-38 lg:pt-50 container mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="Testimonials" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Typography
          variant={"h2"}
          className="mt-3 md:mt-4 text-white text-center"
        >
          Hear from our clients
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          variant={"p18"}
          className="mt-1 md:mt-4 text-white-70 text-center"
        >
          Real feedback from real clients who trusted us with their spaces.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <TestimonialsMarquee />
      </motion.div>
    </section>
  );
};

export default Testinomial;
