import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Locations",
  description: "Find our expert phone repair and print shop locations in Dallas, TX. We have two convenient stores to serve you with same-day repairs.",
};

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
