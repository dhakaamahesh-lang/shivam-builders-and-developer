"use client";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Star } from "lucide-react";
import Badge from "./badge";
import Button from "./button";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const heading = "Crafting spaces that match your style and needs";
  const description =
    "Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours.";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.3,
      },
    },
  };

  const descriptionContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  // Split by words instead of characters
  const headingWords = heading.split(" ");
  const descriptionWords = description.split(" ");

  return (
    <section className="container mx-auto grid items-center lg:grid-cols-12 gap-10 mt-12 lg:mt-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-6 xl:col-span-7 max-lg:text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge
            className="max-lg:mx-auto"
            text="#1 in Smart, Stylish Spaces"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-3"
        >
          <Typography as="h1" variant="h1">
            {headingWords.map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${word}-${charIndex}`}
                    variants={child}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < headingWords.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </Typography>
        </motion.div>

        <motion.div
          variants={descriptionContainer}
          initial="hidden"
          animate="visible"
          className="mt-5"
        >
          <Typography variant="p20">
            {descriptionWords.map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${word}-${charIndex}`}
                    variants={child}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < descriptionWords.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="flex max-lg:justify-center gap-3.5 mt-11"
        >
          <Link href="/contact-us">
            <Button variant="primary">Get in touch</Button>
          </Link>
          <Link href="/#services">
            <Button variant="secondary">View services</Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="lg:col-span-6 xl:col-span-5 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="overflow-hidden rounded-bl-4xl rounded-br-4xl"
        >
          <Image
            src="/images/hero.webp"
            alt="hero image"
            width={627}
            height={492}
            className="w-full sm:h-150 rounded-tl-full rounded-tr-full object-cover"
            quality={75}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 627px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ImageLabels
            text="Smart planning"
            className="absolute top-6 left-1/2 -translate-x-1/2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <ImageLabels
            text="Seamless process"
            className="absolute max-sm:hidden top-66 right-5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ImageLabels
            text="Client satification"
            className="absolute bottom-22 max-lg:hidden -left-16"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <ImageLabels
            text="Rated 5 Stars by 2k+ happy clients"
            className="absolute bottom-6 right-6 rounded-3xl! max-w-44 p-6! text-center"
            icon={true}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

const ImageLabels = ({
  className,
  text,
  icon,
}: {
  className: string;
  text: string;
  icon?: React.ReactNode | string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`bg-black-40 w-fit rounded-full text-white-80 backdrop-blur-sm flex items-center gap-3 py-2 px-4 ${icon ? "flex-col" : "flex-row"} ${className}`}
    >
      {!icon ? (
        <div className="size-4 rounded-full flex items-center justify-center bg-white-10">
          <span className="p-1 rounded-full bg-white-80"></span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-1">
          <Star fill="#fff" />
          <Star fill="#fff" />
          <Star fill="#fff" />
          <Star fill="#fff" />
          <Star fill="#fff" />
        </div>
      )}

      <Typography
        className={`text-white text-nowrap ${icon && "text-wrap"}`}
        variant={"p16m"}
      >
        {text}
      </Typography>
    </motion.div>
  );
};
