"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Badge from "../common/badge";
import Button from "../common/button";
import RecentWorkCard from "../common/recent-work-card";

import { Typography } from "../ui/typography";
import Link from "next/link";
import { projects } from "../helper/projects";

const RecentWork = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const recentProjectsData = projects;

  return (
    <section ref={ref} className="container mx-auto  pt-28 md:pt-38 lg:pt-50">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mx-auto" text="Recent Work" />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Typography
          variant="h2"
          className="mt-3 md:mt-4 max-w-150 mx-auto text-center"
        >
          A Showcase of our recent projects
        </Typography>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="p18" className="mt-4 text-center text-white-70">
          From idea to execution, our work is made to elevate everyday living.
        </Typography>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6 lg:gap-10 mt-8">
        {recentProjectsData.map((project, index) => (
          <RecentWorkCard
            key={project.id}
            id={project.slug} // ✅ NOW WORKS
            title={project.title}
            description={project.description}
            secondDescription={project.secondDescription}
            category={project.category}
            location={project.location}
            image={project.image}
            index={index}
          />
        ))}
      </div>

      {/* View All */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <Link href="/projects">
          <Button className="mt-8" variant="secondary">
            View all projects
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default RecentWork;
