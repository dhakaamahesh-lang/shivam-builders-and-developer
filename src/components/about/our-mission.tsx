"use client";
import Image from "next/image";
import Badge from "../common/badge";
import { Typography } from "../ui/typography";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const OurMission = () => {
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
      className="container mx-auto grid lg:grid-cols-12 items-center gap-12 pt-28 md:pt-38 lg:pt-50"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="col-span-6"
      >
        <motion.div variants={itemVariants}>
          <Badge text="Our mission" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant={"h2"} className="mt-3 md:mt-4">
            Purpose that drives every detail
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <Typography variant={"h5"}>Elevating everyday living</Typography>
          <Typography variant={"p18"} className="text-white-70 mt-2">
            Our thoughtful, innovative designs bring harmony, effortless
            simplicity, and joy to everyday modern home life.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <Typography variant={"h5"}>Spaces that feel like home</Typography>
          <Typography variant={"p18"} className="text-white-70 mt-2">
            We turn your vision into living spaces that are well designed,
            personal, practical, and timelessly functional.
          </Typography>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="col-span-6 rounded-2xl lg:rounded-4xl overflow-hidden"
      >
        <Image
          width={532}
          height={532}
          className="w-full object-cover object-center h-100 sm:h-133"
          src={"/images/bedroom-design-three.webp"}
          alt="interior design"
        />
      </motion.div>
    </section>
  );
};

export default OurMission;
