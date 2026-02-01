"use client";
import Image from "next/image";
import Badge from "../common/badge";
import StatsCounter from "../common/counter";
import { Typography } from "../ui/typography";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const WhoWeAre = () => {
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
    <section ref={ref} className="container mx-auto pt-28 md:pt-38 lg:pt-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="Who we are" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          className="text-center mt-3 max-w-4xl max-sm:text-xl! mx-auto px-4"
          variant={"h3"}
        >
          We're a team of designers, architects, and builders turning spaces
          into works of art. From interiors to landscapes, we deliver lasting
          results tailored to your vision.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <StatsCounter />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 lg:mt-12"
      >
        {/* Left Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 p-6 lg:p-8 bg-black-2 sm:rounded-4xl rounded-2xl "
        >
          <Typography variant={"h6"} className="text-white">
            We design with intention creating spaces that reflect your style,
            not just trends.
          </Typography>
          <div className="mt-6 lg:mt-8 flex flex-col gap-2 lg:gap-3">
            <Typography variant={"p20"} className="text-white-70">
              1: Balance of style and function
            </Typography>
            <Typography variant={"p20"} className="text-white-70">
              2: Timeless results, built to last
            </Typography>
            <Typography variant={"p20"} className="text-white-70">
              3: Thoughtful, detail driven process
            </Typography>
          </div>
          <div className="flex justify-center mt-12 lg:mt-16">
            <Image
              width={280}
              height={86}
              className="h-fit max-w-full"
              src={"/images/who-we-are.webp"}
              alt="who we are image"
              quality={75}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <Image
            width={560}
            height={440}
            className="w-full h-80 sm:h-96 lg:h-118 sm:rounded-4xl rounded-2xl  object-cover object-center"
            src={"/images/bedroom-design-one.webp"}
            alt="who we are right card"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 560px"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
