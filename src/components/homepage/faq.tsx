"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Typography } from "../ui/typography";
import Badge from "../common/badge";

const faqs = [
  {
    question: "Is the project approved under JDA standards?",
    answer:
      "Yes, our projects follow JDA-approved standards, ensuring proper documentation, legal compliance, and construction safety. This helps provide clients with reliable and secure property investments.",
  },
  {
    question: "Is it suitable for investment purposes and leaving?",
    answer:
      "Yes, this property is suitable for both investment and residential living. It offers strong potential for long-term appreciation and rental income, while also providing a comfortable and well-connected environment for end users. Whether you are looking to invest or plan to live here, this property meets both objectives.",
  },
  {
    question: "Do you provide loan or finance facilities for projects?",
    answer:
      "We assist clients in connecting with trusted financial institutions and partners that offer home loans and project financing. Our team supports you with documentation and guidance throughout the loan approval process.",
  },
  {
    question:
      "How do you ensure environmental sustainability in your projects?",
    answer:
      "We follow eco-friendly practices by using sustainable materials, energy-efficient solutions, waste management systems, and environmentally responsible construction methods to minimize environmental impact.",
  },
  {
    question:
      "What makes Shivam Builders & Developers different from other construction companies?",
    answer:
      "We stand out through our commitment to quality, transparency, and customer satisfaction. Our team of experienced professionals ensures every project is completed on time and within budget, using the latest construction techniques and sustainable practices.",
  },
];

const ChevronDown = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="container mx-auto pt-28 md:pt-38 lg:pt-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="FAQs" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Typography className="text-white text-center mt-2" variant={"h2"}>
          Frequently asked questions
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography className="text-center text-white-70 mt-4" variant={"p18"}>
          Find helpful answers about our services, detailed process, and
          bringing your vision to life.
        </Typography>
      </motion.div>

      <div className="flex justify-center">
        <div className="max-w-4xl w-full mx-auto mt-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-black-2 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  transition={{ duration: 0.2 }}
                >
                  <Typography variant={"p18"} className="pr-4 text-white">
                    {faq.question}
                  </Typography>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 text-gray-400 leading-relaxed"
                      >
                        <Typography
                          variant={"p16"}
                          className="pr-4 text-white-70"
                        >
                          {faq.answer}
                        </Typography>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
