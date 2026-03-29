import TabbedSection from '@/components/Homepage/Tablesection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn about our expert phone repair process at iCloudwireless Dallas. Fast, reliable, and professional service.",
};


const page = () => {
  return (
    <TabbedSection />
  )
}

export default page