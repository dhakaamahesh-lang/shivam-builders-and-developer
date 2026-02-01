"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  const navVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    visible: {
      opacity: 1,
      height: "auto" as const,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`sticky top-0 pb-2 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/5 backdrop-blur-lg" : ""
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <Image
                width={140}
                height={47}
                src={"/images/logo.svg"}
                alt="logo"
              />
            </Link>
            <div className="hidden md:flex items-center gap-3 lg:gap-8">
              {navLinks.map((link, index) => (
                <Link key={link.name} href={link.href} scroll>
                  <motion.span
                    className="group relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-base font-medium text-white-70 group-hover:text-white">
                      {link.name}
                    </span>
                  </motion.span>
                </Link>
              ))}
            </div>
            <Link href={"/contact-us"}>
              <Button variant="primary" className="max-md:hidden">
                Contact Us
              </Button>
            </Link>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm border border-white/10"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring" as const,
                stiffness: 400,
                damping: 10,
              }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden sm:rounded-4xl rounded-2xl  mb-4 overflow-hidden bg-black-main backdrop-blur-xl"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group"
                      variants={menuItemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring" as const, stiffness: 300 }}
                    >
                      <span className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors px-2 py-2 block drop-shadow-md">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                  <motion.a
                    href="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    variants={menuItemVariants}
                  >
                    <motion.button
                      className="bg-white/90 backdrop-blur-sm text-zinc-900 px-6 py-2.5 rounded-full transition-colors w-full text-base font-medium shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 border border-white/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      Contact us
                    </motion.button>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
