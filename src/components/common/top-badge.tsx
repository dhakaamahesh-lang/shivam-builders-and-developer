"use client";
import { Instagram, Mail, MessageCircleMore, Phone } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import Image from "next/image";

const TopBadge = () => {
  return (
    <div className="bg-black-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3 gap-2 sm:gap-4">
          {/* Contact Info */}
          <div className="flex max-sm:hidden items-center gap-3 sm:gap-6">
            <Link
              href="tel:+919001358202"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <Typography
                variant="p16"
                className="text-zinc-300 group-hover:text-white"
              >
                +91 90013 58202
              </Typography>
            </Link>
            <Link
              href="mailto:shivambuilders15@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <Typography
                variant="p16"
                className="text-zinc-300 group-hover:text-white hidden sm:inline"
              >
                Winter & Summer Time : 10:00 am - 05:00 pm
              </Typography>
              <Typography
                variant="p16"
                className="text-zinc-300 group-hover:text-white sm:hidden"
              >
                10:00 am - 05:00 pm
              </Typography>
            </Link>
          </div>
          <Link
            href="tel:+919001358202"
            className="flex sm:hidden items-center gap-2 hover:text-white transition-colors group"
          >
            <Phone className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <Typography
              variant="p16"
              className="text-zinc-300 group-hover:text-white"
            >
              +91 90013 58202
            </Typography>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.instagram.com/shivam_builder_and_developer?igsh=cXJhcG8wd3Yyd3dx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-zinc-900" />
            </Link>
            <Link
              href="mailto:shivambuilders15@gmail.com"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-zinc-900" />
            </Link>
            <Link
              href="whatsapp://send?phone=+919001358202"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
              aria-label="Message"
            >
              <Image
                src={"/images/whatsapp.svg"}
                alt="WhatsApp"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBadge;
