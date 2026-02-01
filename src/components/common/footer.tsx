"use client";
import { motion } from "framer-motion";
import { Typography } from "../ui/typography";
import Button from "./button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navigationLinks = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Services",
      path: "/#services",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Contact",
      path: "/contact-us",
    },
  ];

  return (
    <footer className="lg:mt-30 text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6 lg:mb-16">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/">
                <Image
                  width={198}
                  height={47}
                  src={"/images/logo.svg"}
                  alt="logo"
                />
              </Link>
              <Typography
                variant={"p18m"}
                className="text-white-70 mt-4 sm:mt-10"
              >
                Thoughtful design for everyday living,
                <br />
                crafted with comfort and style in mind.
              </Typography>
              <Link href={"/contact-us"}>
                <Button variant="secondary" className="mt-6">
                  Get in touch
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="flex gap-18">
            <div>
              <Typography
                variant="p18m"
                className="mb-4 text-white font-semibold"
              >
                Links
              </Typography>

              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} scroll>
                      <Typography
                        variant="p17"
                        className="font-medium text-white-70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Section */}
            <div>
              <Typography
                variant="p18m"
                className="mb-4 text-white font-semibold"
              >
                Socials
              </Typography>

              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/shivam_builder_and_developer?igsh=cXJhcG8wd3Yyd3dx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      variant="p17"
                      className="font-medium text-white-70 hover:text-white transition-colors"
                    >
                      Instagram
                    </Typography>
                  </a>
                </li>

                <li>
                  <a href="mailto:shivambuilders15@gmail.com">
                    <Typography
                      variant="p17"
                      className="font-medium text-white-70 hover:text-white transition-colors"
                    >
                      shivambuilders15@gmail.com
                    </Typography>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row max-md:border-t max-md:pt-6 justify-between items-center border-zinc-800 gap-4"
        >
          <Typography variant={"p16"} className="text-white-70">
            Copyright © 2025 - All Right Reserved
          </Typography>
        </motion.div>
      </div>
      <div className="absolute max-md:hidden -bottom-100 inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[20vw] tracking-widest font-extrabold text-black-2 opacity-50 select-none">
          SHIVAM
        </h2>
      </div>
    </footer>
  );
}
