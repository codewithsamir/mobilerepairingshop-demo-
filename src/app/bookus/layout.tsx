import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Repair",
  description: "Schedule your phone or tablet repair online at iCloudwireless Dallas. Fast, professional, and reliable same-day service.",
};

export default function BookUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
