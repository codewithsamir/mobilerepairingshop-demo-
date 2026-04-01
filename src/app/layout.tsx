import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Homepage/Header";
import Footer from "@/components/Homepage/Footer";
import PromoBanner from "@/components/ui/PromoBanner";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iCloudwireless | Expert Phone Repair & Print Shop Dallas",
    template: "%s | iCloudwireless"
  },
  description: "iCloudwireless - Dallas' top-rated expert phone repair, tablet repair, and print shop. Same-day service, 30-day warranty, and 15+ years experience.",
  keywords: ["phone repair Dallas", "iPhone repair", "iPad repair", "Samsung repair", "print shop Dallas", "cracked screen repair", "battery replacement"],
  authors: [{ name: "iCloudwireless" }],
  creator: "iCloudwireless",
  publisher: "iCloudwireless",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "iCloudwireless | Phone Repair & Print Shop",
    description: "Expert phone and tablet repair in Dallas. Same-day service and 30-day warranty.",
    url: "https://icloudwireless.com",
    siteName: "iCloudwireless",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/logo.svg",
        width: 800,
        height: 600,
        alt: "iCloudwireless Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iCloudwireless | Phone Repair & Print Shop",
    description: "Expert phone and tablet repair in Dallas. Same-day service and 30-day warranty.",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <div className="max-w-[1536px] mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2 text-center sm:text-left">
          <span>Mon-Sat 10:30AM-8PM | Sun 11AM-4PM</span>
          <span>Call Us: 214-436-7998</span>
        </div>
      </div>

      <Header />
        {children}
        <Footer />
        <PromoBanner />
      </body>
    </html>
  );
}
