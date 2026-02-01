"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Check } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "yet-another-react-lightbox/plugins";

interface Props {
  project: any;
}

const ProjectDetailsClient = ({ project }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
    hidden: { opacity: 0, y: 50 },
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h1" className="text-white max-sm:text-2xl!">
            {project.title}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="p18" className="text-white-70 mt-4">
            {project.description}
          </Typography>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 rounded-2xl sm:rounded-4xl h-80 md:h-160 overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={700}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Typography variant="h4">Project Concept</Typography>

          <Typography
            variant="p18"
            className="text-white-70 whitespace-pre-line"
          >
            {project.concept}
          </Typography>

          {project.secondDescription && (
            <Typography
              variant="p18"
              className="text-white-70 mt-4 whitespace-pre-line"
            >
              {project.secondDescription}
            </Typography>
          )}
        </motion.div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div variants={itemVariants} className="mt-12">
            <Typography variant="h4">Project Gallery</Typography>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
              {project.gallery.map((imgSrc: string, i: number) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden h-70 lg:h-40 cursor-pointer"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Image ${i + 1}`}
                    width={400}
                    height={300}
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {project.design && project.design.length > 0 && (
          <motion.div variants={itemVariants} className="mt-12">
            <Typography variant="h4">Our Design Approach</Typography>

            <Typography variant="p18" className="text-white-70 mt-3">
              The architectural planning focuses on:
            </Typography>

            <ul className="mt-4 space-y-2">
              {project.design.map((item: string, i: number) => (
                <li key={i}>
                  <Typography variant="p18" className="text-white-70">
                    • {item}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography variant="p18" className="text-white-70 mt-4">
              Special attention was given to safety, accessibility, and
              long-term maintenance. The building structure, elevation design,
              and common areas reflect a contemporary residential identity while
              remaining timeless in appeal.
            </Typography>
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <Info label="Project Type" value={project.category} />
          <Info label="Property Type" value={project.propertyType} />
          <Info label="Status" value={project.status} />
          <Info label="Area" value={project.area} />
          <Info label="Location" value={project.location} />

          {project.priceRange && (
            <Info label="Price Range" value={project.priceRange} />
          )}

          {project.possession && (
            <Info label="Possession" value={project.possession} />
          )}
        </motion.div>

        {project.amenities && project.amenities.length > 0 && (
          <div className="mt-12">
            <Typography variant="h4">Amenities & Features</Typography>

            <Typography variant="p18" className="text-white-70 mt-3">
              {project.shortTitle} offers a complete lifestyle with modern
              amenities:
            </Typography>

            <ul className="grid sm:grid-cols-2 gap-3 mt-4">
              {project.amenities.map((item: string, i: number) => (
                <li key={i}>
                  <Typography
                    variant="p18"
                    className="text-white-70 flex items-center gap-2"
                  >
                    <Check /> {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={
          project.gallery?.map((img: string) => ({
            src: img,
          })) || []
        }
        plugins={[Zoom]}
      />
    </section>
  );
};

export default ProjectDetailsClient;

const Info = ({ label, value }: any) => (
  <div className="bg-black-2 p-6 rounded-2xl lg:rounded-4xl">
    <Typography variant="p16m" className="text-white-70">
      {label}
    </Typography>
    <Typography variant="p18m" className="mt-1">
      {value}
    </Typography>
  </div>
);
