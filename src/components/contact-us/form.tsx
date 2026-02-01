"use client";

import { useState } from "react";
import Button from "../common/button";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/z7g6m5que6y5x1du4f7sn7hjtinggo1f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "Full Name": formData.name,
            "Email Adress": formData.email,
            "Phone No": formData.phone,
            "Service Type": formData.serviceType,
            Message: formData.message,
          }),
        },
      );

      if (res.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Webhook error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="mt-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:rounded-4xl rounded-2xl bg-black-2 p-6 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-white-70 typography-p16">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Sarah Ahmed"
              className="w-full rounded-xl bg-black-main px-4 py-3 text-white placeholder:text-white-40 focus:outline-none focus:ring-1 focus:ring-white-20"
            />
          </div>
          <div>
            <label className="block mb-2 text-white-70 typography-p16">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah.ahmed@gmail.com"
              className="w-full rounded-xl bg-black-main px-4 py-3 text-white placeholder:text-white-40 focus:outline-none focus:ring-1 focus:ring-white-20"
            />
          </div>
          <div>
            <label className="block mb-2 text-white-70 typography-p16">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (347) 555-0198"
              className="w-full rounded-xl bg-black-main px-4 py-3 text-white placeholder:text-white-40 focus:outline-none focus:ring-1 focus:ring-white-20"
            />
          </div>
          <div>
            <label className="block mb-2 text-white-70 typography-p16">
              Service Type
            </label>
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              placeholder="Interior design"
              className="w-full rounded-xl bg-black-main px-4 py-3 text-white placeholder:text-white-40 focus:outline-none focus:ring-1 focus:ring-white-20"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-2 text-white-70 typography-p16">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Let us know how we can help you..."
            rows={5}
            className="w-full resize-none rounded-xl bg-black-main px-4 py-3 text-white placeholder:text-white-40 focus:outline-none focus:ring-1 focus:ring-white-20"
          />
        </div>

        <Button className="w-full mt-6" variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}
