"use client";
import Image from "next/image";
import Badge from "../common/badge";
import { Typography } from "../ui/typography";
import StatsCounter from "../common/counter";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const ProvenResult = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="container mx-auto flex flex-col-reverse w-full lg:grid lg:grid-cols-12 items-center gap-12 pt-28 md:pt-38 lg:pt-50"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="lg:col-span-6 w-full rounded-2xl lg:rounded-4xl overflow-hidden"
      >
        <Image
          width={532}
          height={532}
          className="w-full object-center object-cover h-80 sm:h-133"
          src={"/images/proven results.png"}
          alt="proven results"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full lg:col-span-6"
      >
        <motion.div variants={itemVariants}>
          <Badge text="Proven result" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant={"h2"} className="mt-3">
            Where vision meets measurable impact
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant={"p18"} className="text-white-70 mt-3">
            Over the years, our design-driven approach has turned trust into
            meaningful, lasting, and measurable milestones across homes,
            offices, and beyond.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StatsCounter className="pb-0! grid! grid-cols-2!" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProvenResult;
