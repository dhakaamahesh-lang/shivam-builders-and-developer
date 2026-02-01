"use client";

import { motion } from "framer-motion";
import Button from "../common/button";
import { Typography } from "../ui/typography";
import Image from "next/image";
import Link from "next/link";

const CreateSpace = () => {
  return (
    <section className="container mx-auto pt-28 md:pt-38 lg:pt-50">
      <div className="relative p-6 sm:p-10 md:p-15 sm:rounded-4xl rounded-2xl  overflow-hidden">
        <Image
          src="/images/who-we-are-right-card.webp"
          alt="Create space background"
          fill
          className="object-cover sm:rounded-4xl rounded-2xl "
          quality={75}
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-black-80 p-6 md:p-10 lg:p-13 sm:rounded-4xl rounded-2xl "
        >
          <div className="max-w-xl mx-auto">
            <Typography variant="h2" className="text-white text-center">
              Let's create a space you'll love
            </Typography>

            <Typography
              variant="p18m"
              className="text-white-80 mt-5 text-center"
            >
              We'd love to hear from you. Reach out to discuss your ideas, get a
              quote, or book a consultation.
            </Typography>

            <div className="flex justify-center mt-8">
              <Link href={"/contact-us"}>
                <Button variant="primary">Get a free quote!</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreateSpace;
