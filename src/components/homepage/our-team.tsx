"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Badge from "../common/badge";
import OurTeamCard from "../common/our-team-card";
import { Typography } from "../ui/typography";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

const teamMembersData = [
  {
    id: 1,
    name: "Ravindra Dhaka",
    position: "Owner",
    image: "/images/owner.png",
  },
  {
    id: 2,
    name: "Mahesh Dhaka",
    position: "Techinical Head",
    image: "/images/mahesh-dhaka.avif",
  },
];

const OurTeam = () => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="container mx-auto pt-28 md:pt-38 lg:pt-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge className="mx-auto" text="Our Team" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Typography
          variant={"h2"}
          className="mt-3 md:mt-4 text-white text-center"
        >
          The dedicated
          <br /> team behind the craft
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          variant={"p18"}
          className="mt-1 md:mt-4 text-white-70 text-center"
        >
          Our team unites designers, architects, and builders who care about
          every detail.
        </Typography>
      </motion.div>

      <div className="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembersData.map((member, index) => (
          <OurTeamCard
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
            index={index}
            isInView={isInView}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 0.8,
            delay: teamMembersData.length * 0.1,
            ease: "easeOut",
          }}
          className="sm:rounded-bl-4xl rounded-bl-2xl rounded-br-2xl sm:rounded-br-4xl overflow-hidden"
        >
          <div className="bg-black-2 h-full flex items-center justify-center sm:rounded-4xl rounded-2xl lg:rounded-tl-full lg:rounded-tr-full p-6 lg:p-8">
            <div className="group h-full relative flex flex-col items-center justify-between text-center">
              <div className="h-full">
                <div className="w-20 h-20 mb-6 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
                  <Plus />
                </div>

                <Typography variant="p20m" className="text-white">
                  Join the Mission
                </Typography>
                <Typography variant="p18" className="text-white-70 mt-3 px-4">
                  We are always looking for creative minds to join our craft
                  team. If you are passionate about building beautiful spaces,
                  we'd love to hear from you.
                </Typography>
              </div>

              <motion.button
                onClick={() => router.push("/contact-us")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
              >
                See Openings
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
