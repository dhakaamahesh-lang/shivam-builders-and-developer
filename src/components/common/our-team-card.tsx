"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typography } from "../ui/typography";

interface OurTeamCardProps {
  name: string;
  position: string;
  image: string;
  index: number;
  isInView: boolean;
}

const OurTeamCard = ({
  name,
  position,
  image,
  index,
  isInView,
}: OurTeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="sm:rounded-bl-4xl rounded-bl-2xl rounded-br-2xl sm:rounded-br-4xl overflow-hidden"
    >
      <div className="bg-black-2 sm:rounded-4xl rounded-2xl lg:rounded-tl-full lg:rounded-tr-full p-6">
        <div className="sm:rounded-4xl rounded-2xl lg:rounded-bl-4xl lg:rounded-br-4xl overflow-hidden">
          <Image
            width={301}
            height={357}
            className="w-full h-78 sm:h-130 md:h-110 lg:h-80 object-cover object-top sm:rounded-4xl rounded-2xl lg:rounded-tl-full lg:rounded-tr-full"
            src={image}
            alt={name}
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 301px"
          />
        </div>
        <div className="mt-5 text-center">
          <Typography variant={"p20m"} className="text-white">
            {name}
          </Typography>
          <Typography variant={"p16"} className="text-white-70">
            {position}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeamCard;
