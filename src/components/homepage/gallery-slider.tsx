"use client";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { src: "/images/bedroom-design-one.webp", w: 400, h: 300 },
  { src: "/images/bedroom-design-two.webp", w: 320, h: 450 },
  { src: "/images/bedroom-design-five.webp", w: 400, h: 300 },
  {
    src: "/images/bedroom-design-four.webp",
    w: 340,
    h: 400,
    topRadius: "100%",
  },
  { src: "/images/bedroom-design-six.webp", w: 350, h: 450 },

  { src: "/images/bedroom-design-seven.webp", w: 400, h: 300 },
  {
    src: "/images/bedroom-design-eight.webp",
    w: 350,
    h: 404,
    topRadius: "100%",
  },
];

export default function ImageMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marqueeSlides = [...slides, ...slides];

  return (
    <div ref={ref} className="overflow-hidden pt-28 md:pt-38 lg:pt-50">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden sm:block"
      >
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="#141414"
          pauseOnHover
        >
          {marqueeSlides.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="mr-8 sm:rounded-4xl rounded-2xl overflow-hidden"
              style={{ width: item.w, height: item.h }}
            >
              <Image
                src={item.src}
                alt="Bedroom design"
                width={item.w}
                height={item.h}
                quality={75}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 400px"
                style={{
                  borderTopLeftRadius: item.topRadius,
                  borderTopRightRadius: item.topRadius,
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sm:hidden px-6 gallery-slider"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white-50",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-12!"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="sm:rounded-4xl rounded-2xl  items-end overflow-hidden">
                <Image
                  src={item.src}
                  alt="Bedroom design"
                  width={item.w}
                  height={item.h}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
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
          background: #ffffff80;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #ffffff;
        }
      `}</style>
    </div>
  );
}
