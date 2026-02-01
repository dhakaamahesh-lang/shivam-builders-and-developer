"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Typography } from "../ui/typography";

const testimonials = [
  {
    rating: 5,
    text: "Working with the team was seamless from start to finish. They brought our vision to life with beautiful layouts, functional pieces, and thoughtful material choices throughout the entire interior.",
    name: "Atul Jindal",
    email: "atulankur92@gmail.com",
  },
  {
    rating: 5,
    text: "The planning and execution were flawless. They maximized our space with smart zoning, clean layouts, and a natural flow that made the entire home feel more livable and refined.",
    name: "Himanshu Kothari",
    email: "hkothari880@gmail.com",
  },
  {
    rating: 5,
    text: "Working with the team was seamless from start to finish. They brought our vision to life with beautiful layouts, functional pieces, and thoughtful material choices throughout the entire interior.",
    name: "Atul Jindal",
    email: "atulankur92@gmail.com",
  },
  {
    rating: 5,
    text: "The planning and execution were flawless. They maximized our space with smart zoning, clean layouts, and a natural flow that made the entire home feel more livable and refined.",
    name: "Himanshu Kothari",
    email: "hkothari880@gmail.com",
  },
];

const Star = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-yellow-500"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function TestimonialsMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-6 sm:mt-8 lg:mt-12 testinomial"
    >
      {/* Mobile Swiper */}
      <div className="block lg:hidden">
        <style>{`
           .swiper-wrapper {
          align-items: end;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
        }
        `}</style>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black-2 p-8 rounded-2xl max-sm:h-95 mb-12">
                <div className="flex gap-3 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <Typography
                  variant={"p18"}
                  className="text-white-80 text-center mt-8"
                >
                  {testimonial.text}
                </Typography>
                <div className="mt-8 text-center">
                  <Typography
                    variant={"p18m"}
                    className="text-white font-medium text-xl mb-1"
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant={"p16"} className="text-white-70">
                    {testimonial.email}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Marquee */}
      <div className="hidden lg:block">
        <Marquee
          speed={40}
          className="overflow-hidden"
          gradient={true}
          gradientColor="#141414"
          pauseOnHover
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black-2 mr-8 p-8 sm:rounded-4xl rounded-2xl max-w-100 max-sm:h-80 sm:max-w-132"
            >
              <div className="flex gap-3 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <Typography
                variant={"p18"}
                className="text-white-80 text-center mt-8"
              >
                {testimonial.text}
              </Typography>
              <div className="mt-8 text-center">
                <Typography
                  variant={"p18m"}
                  className="text-white font-medium text-xl mb-1"
                >
                  {testimonial.name}
                </Typography>
                <Typography variant={"p16"} className="text-white-70">
                  {testimonial.email}
                </Typography>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
