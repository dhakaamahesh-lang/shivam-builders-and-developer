"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface Props {
  service: any;
}

const ServiceDetailsClient = ({ service }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="container mx-auto pt-16 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={item}>
          <Typography variant="h1" className="text-white max-sm:text-2xl!">
            {service.title}
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography variant="p18" className="text-white-70 mt-3">
            {service.subtitle}
          </Typography>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 rounded-2xl lg:rounded-4xl overflow-hidden"
        >
          <Image
            src={service.image}
            alt={service.title}
            width={1200}
            height={600}
            className="w-full h-90 sm:h-120 object-cover"
          />
        </motion.div>

        {/* About */}
        <motion.div variants={item} className="mt-12">
          <Typography variant="h4">About the service</Typography>

          <Typography variant="p18" className="text-white-70 mt-3">
            {service.about}
          </Typography>
        </motion.div>

        {/* Approach */}
        <motion.div variants={item} className="mt-10">
          <Typography variant="h4">Our approach</Typography>

          <Typography variant="p18" className="text-white-70 mt-3">
            {service.approach}
          </Typography>
        </motion.div>

        {/* Included */}
        <motion.div variants={item} className="mt-10">
          <Typography variant="h4">What's included in the service</Typography>

          <Typography variant="p18" className="text-white-70 mt-3">
            {service.included}
          </Typography>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceDetailsClient;
