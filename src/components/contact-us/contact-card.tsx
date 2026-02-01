import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactCards() {
  return (
    <section className="container max-w-5xl! mx-auto pt-28 md:pt-38 lg:pt-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <Link
          href="mailto:shivambuilders15@gmail.com"
          className="group lg:rounded-4xl rounded-2xl bg-black-2 p-8 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black-main">
            <Mail className="text-white" size={26} />
          </div>
          <p className="text-white-70 typography-p16 mb-2">Email us at</p>
          <p className="text-white typography-p17">
            shivambuilders15@gmail.com
          </p>
        </Link>

        {/* Phone Card */}
        <Link
          href="tel:+918050021709"
          className="group lg:rounded-4xl rounded-2xl bg-black-2 p-8 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black-main">
            <Phone className="text-white" size={26} />
          </div>
          <p className="text-white-70 typography-p16 mb-2">Give us a call</p>
          <p className="text-white typography-p17">+91 8050021709</p>
        </Link>
      </div>

      {/* Address Card */}
      <Link
        href="https://www.google.com/maps/search/?api=1&query=Jagatpura+Jaipur+Rajasthan+302017"
        target="_blank"
        className="mt-6 group lg:rounded-4xl rounded-2xl bg-black-2 p-10 flex flex-col items-center justify-center text-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black-main">
          <MapPin className="text-white" size={26} />
        </div>
        <p className="text-white-70 typography-p16 mb-2">Visit our office</p>
        <p className="text-white typography-p17">
          Jagatpura Jaipur Rajasthan – 302017
        </p>
      </Link>
    </section>
  );
}
