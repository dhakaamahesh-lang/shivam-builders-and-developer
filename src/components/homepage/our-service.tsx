"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Badge from "../common/badge";
import ServiceCard from "../common/service-card";
import { Typography } from "../ui/typography";
import { services } from "../helper/projects";

const OurService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="services"
      className="container mx-auto pt-28 md:pt-38 lg:pt-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="Our Services" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Typography className="text-center mt-3 md:mt-6" variant={"h2"}>
          Services that shape spaces
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography className="text-white-70 text-center mt-4" variant={"p18"}>
          Building new or upgrading? We craft stylish, inspiring spaces that
          feel uniquely yours.
        </Typography>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            slug={service.slug}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
            hoverImage={service.hoverImage}
          />
        ))}
      </div>
    </section>
  );
};

export default OurService;
