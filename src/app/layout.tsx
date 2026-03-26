import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Homepage/Header";
import Footer from "@/components/Homepage/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iCloudwireless | Phone Repair & Print Shop",
  description: "iCloudwireless - Dallas' top-rated expert phone repair, tablet repair, and print shop. Same-day service and 30-day warranty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} font-sans antialiased pb-20 md:pb-0 relative`}
      >
      {/* Top Bar */}
      <div className="bg-blue-900 text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2 text-center sm:text-left">
          <span>Mon-Sat 10:30AM-8PM | Sun 11AM-4PM</span>
          <span>Call Us: 214-436-7998 | 469-544-7447</span>
        </div>
      </div>

      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
