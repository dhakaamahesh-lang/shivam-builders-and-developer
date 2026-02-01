"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Building2, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Button from "./button";
import { Typography } from "../ui/typography";

interface RecentWorkCardProps {
  id: string;
  title: string;
  description: string;
  secondDescription?: string;
  category: string;
  location: string;
  image: string;
  gallery?: string[];
  index: number;
}

const RecentWorkCard = ({
  id,
  title,
  description,
  secondDescription,
  category,
  location,
  image,
  index,
}: RecentWorkCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="p-6 lg:p-10 bg-black-2 sm:rounded-4xl rounded-2xl"
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <Typography variant="h3">{title}</Typography>

          <Typography variant="p18" className="text-white-70 mt-5">
            {description}
          </Typography>

          {secondDescription && (
            <Typography variant="p18" className="text-white-70 mt-4">
              {secondDescription}
            </Typography>
          )}

          {/* Info */}
          <div className="flex max-sm:flex-col flex-wrap sm:items-center gap-6 mt-8">
            <div className="flex gap-3 items-center">
              <Building2 className="w-5 h-5 text-white" />
              <Typography variant="p18">{category}</Typography>
            </div>

            <div className="flex gap-3 items-center">
              <MapPin className="w-5 h-5 text-white" />
              <Typography variant="p18">{location}</Typography>
            </div>
          </div>

          {/* Button */}
          <Link href={`/projects/${id}`}>
            <Button className="mt-8" variant="secondary">
              View in detail
            </Button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 rounded-bl-2xl sm:rounded-bl-4xl rounded-br-2xl sm:rounded-br-4xl overflow-hidden">
          <Image
            width={432}
            height={492}
            src={image}
            alt={title}
            quality={75}
            sizes="(max-width: 768px) 100vw, 432px"
            className="lg:rounded-tl-full max-sm:h-80 max-lg:sm:rounded-4xl rounded-2xl h-125 lg:rounded-tr-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RecentWorkCard;
