"use client";
import Image from "next/image";
import Badge from "../common/badge";
import { Typography } from "../ui/typography";
import { Quote } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} className="mx-auto container pt-28 md:pt-38 lg:pt-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="Out story" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography className="mt-4 text-center" variant={"h2"}>
          The story behind
          <br /> our creative craft
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="bg-black-2 lg:rounded-4xl rounded-2xl md:mt-6 mt-4 lg:mt-11 p-6 lg:p-15 relative max-w-4xl mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Typography variant={"p20"} className="text-white-80 text-center">
              We started with a vision to transform everyday spaces into
              something more places that feel personal, functional, and
              timeless. We began as a small, passionate team has grown into a
              full-service studio of designers, architects, and craftsmen, all
              dedicated to design. For us, every project is an opportunity to
              create something that not only looks beautiful but also enhances
              the way people live, work, and connect.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant={"p20"}
              className="text-white-80 text-center mt-3"
            >
              Over the years, our dedication to innovation, detail, and teamwork
              has helped shape a wide range of homes, interiors, and outdoor
              spaces. We design with intention blending visual appeal and
              functionality to create spaces that remain relevant and livable.
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 items-center flex-col mt-12"
          >
            <Image
              width={92}
              height={92}
              src={"/images/owner.png"}
              alt="owner"
            />
            <div className="text-center">
              <Typography variant={"p18m"}>Ravindra Dhaka</Typography>
              <Typography variant={"p16"} className="text-white-70">
                Founder & Owner
              </Typography>
            </div>
            <Image
              width={280}
              className="mt-6"
              height={90}
              src={"/images/who-we-are.webp"}
              alt="owner"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-80 right-10"
        >
          <Quote size={70} className="text-white-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
