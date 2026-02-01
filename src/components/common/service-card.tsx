"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import Button from "./button";
import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  icon: string;
  title: string;
  description: string;
  index: number;
  hoverImage?: string;
}

const ServiceCard = ({
  icon,
  title,
  slug,
  description,
  index,
  hoverImage,
}: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-black-2 sm:rounded-4xl rounded-2xl  p-6 relative overflow-hidden group"
    >
      {hoverImage && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute max-lg:hidden top-0 -right-7 w-70 h-48 rounded-3xl rounded-tl-full rounded-bl-full overflow-hidden pointer-events-none z-10"
        >
          <Image src={hoverImage} alt={title} fill className="object-cover" />
        </motion.div>
      )}

      <div className="size-20 sm:size-38 bg-black-main rounded-full flex justify-center items-center relative z-20">
        <Image
          className="max-sm:size-6"
          width={56}
          height={56}
          src={icon}
          alt="design"
        />
      </div>
      <Typography
        variant={"h4"}
        className="text-white mt-4 lg:mt-10 relative z-20"
      >
        {title}
      </Typography>
      <Typography
        variant={"p16"}
        className="text-white-70 mt-3 relative z-20 mb-6"
      >
        {description}
      </Typography>
      <Link href={`/services/${slug}`} className="inline-block relative z-20">
        <Button variant="secondary">View in detail</Button>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
