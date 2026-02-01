import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBadge from "@/components/common/top-badge";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam - builders & developers",
  description: "builders & developers",
  other: {
    preloadVideo: "/images/about-us-video.mp4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`relative ${manrope.variable} font-manrope antialiased`}>
        <TopBadge />
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
