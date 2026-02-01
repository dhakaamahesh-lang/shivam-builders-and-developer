"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Badge from "../common/badge";
import RecentWorkCard from "../common/recent-work-card";
import { Typography } from "../ui/typography";
import { projects } from "../helper/projects";

const AllProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="container mx-auto pt-16 md:pt-24 lg:pt-30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="Recent Work" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Typography
          className="mt-3 md:mt-4 max-w-150 mx-auto text-center"
          variant={"h2"}
        >
          Explore projects that redefine living
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          className="mt-2 md:mt-4 text-center text-white-70"
          variant={"p18"}
        >
          Discover curated spaces brought to life through creativity and
          purpose.
        </Typography>
      </motion.div>

      <div className="flex flex-col gap-6 lg:gap-10 mt-8">
        {projects.map((project, index) => (
          <RecentWorkCard
            key={project.id}
            id={project.slug}
            title={project.title}
            description={project.description}
            secondDescription={project.secondDescription}
            category={project.category}
            gallery={project.gallery}
            location={project.location}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
