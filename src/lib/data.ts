import { imageData } from "./imagedata";

// FAQ Data
export const faqInfo = {
  title: "FAQ",
  description: `Welcome to iCloudwireless — your trusted phone repair and print shop experts. We offer fast, reliable, and professional repair services. Whether it’s a cracked screen, battery issue, or other device problem, our skilled technicians will get your device working like new.`,
  highlights: [
    {
      icon: "clock",
      title: "Store Hours",
      description: `Mon – Fri: 10:30 AM – 8:00 PM | Sat: 11:00 AM – 8:00 PM | Sun: 11:00 AM – 4:00 PM. Get your device repaired at your convenience.`,
    },
    {
      icon: "users",
      title: "Trusted & Experienced Technicians",
      description: `Our team has over 15 years of combined experience repairing mobile phones and tablets. All technicians are certified and handle your device with care.`,
    },
  ],
};

export const faqQuestions = [
  {
    question: "Q: What should I expect when I visit iCloud Wireless for a repair?",
    answer:
      "Expect a friendly and professional experience. Our technicians quickly assess your device and provide repair options with clear communication.",
  },
  {
    question: "Q: Do I need an appointment to get my phone repaired?",
    answer:
      "Walk-ins are welcome, but booking ahead can speed up your service.",
  },
  {
    question: "Q: How long do most repairs take?",
    answer: "Many repairs, like screen replacements or battery swaps, are completed the same day—often within an hour.",
  },
  {
    question: "Q: What types of devices do you repair?",
    answer:
      "We repair iPhones, Samsung phones, iPads, tablets, and many other popular smartphone and tablet brands.",
  },
  {
    question: "Q: Do you use original parts for repairs?",
    answer: "We use only genuine or high-quality replacement parts to ensure your device functions like new.",
  },
  {
    question: "Q: How do you protect my data during repair?",
    answer:
      "We do not access or copy your data at any point. Your device remains secure and private throughout the process.",
  },
];

// Devices data
export const devices: CategoryItem[] = [
  {
    id: "iphone",
    name: "Apple iPhone",
    image: imageData.iphoneWhite,
    subcategories: [
      {
        id: "iphone8-series",
        name: "iPhone 8 Series",
        subcategories: [
          { id: "iphone8", name: "iPhone 8" },
          { id: "iphone8plus", name: "iPhone 8 Plus" },
        ],
      },
      {
        id: "iphone9-series",
        name: "iPhone 9 Series",
        subcategories: [
          { id: "iphone9", name: "iPhone 9" },
          { id: "iphone9plus", name: "iPhone 9 Plus" },
        ],
      },
      // You can add more recent iPhone series like 10, 11, 12, etc.
    ],
  },
  {
    id: "ipad",
    name: "Apple iPad",
    image: imageData.ipadWhite,
    subcategories: [
      { id: "ipad-air", name: "iPad Air" },
      { id: "ipad-pro", name: "iPad Pro" },
    ],
  },
  {
    id: "watch",
    name: "Apple Watch",
    image: imageData.watchWhite,
    subcategories: [
      { id: "series6", name: "Series 6" },
      { id: "series7", name: "Series 7" },
    ],
  },
  {
    id: "samsung",
    name: "Samsung",
    image: imageData.samsungWhite,  // Make sure this image exists in your imageData
    subcategories: [
      { id: "galaxy-s21", name: "Galaxy S21" },
      { id: "galaxy-s20", name: "Galaxy S20" },
      { id: "galaxy-note20", name: "Galaxy Note 20" },
      // Add more Samsung models as needed
    ],
  },
  {
    id: "blackberry",
    name: "BlackBerry",
    image: imageData.blackberryWhite, // Make sure this image exists in your imageData
    subcategories: [
      { id: "blackberry-key2", name: "BlackBerry KEY2" },
      { id: "blackberry-motion", name: "BlackBerry Motion" },
      // Add more BlackBerry models if needed
    ],
  },
];


// Footer data
export const phoneSeries = [
  {
    title: "8 SERIES",
    models: ["iPhone 8 Plus", "iPhone 8"],
  },
  {
    title: "10 SERIES",
    models: ["iPhone Xs Max", "iPhone Xs", "iPhone Xr", "iPhone X"],
  },
  {
    title: "11 SERIES",
    models: ["iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11"],
  },
  {
    title: "12 SERIES",
    models: ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini"],
  },
  {
    title: "13 SERIES",
    models: ["iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini"],
  },
  {
    title: "14 SERIES",
    models: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14"],
  },
  {
    title: "15 SERIES",
    models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"],
  },
  {
    title: "16 SERIES",
    models: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16"],
  },
  {
    title: "17 SERIES",
    models: ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Plus", "iPhone 17"],
  },
];

export const locations = [
  "9658 Plano Rd, Suite 100, Dallas, TX 75238 (Primary)",
  "8702 Spring Valley Rd, Suite D, Dallas, TX 75240 (Inside Valley Mart)",
  "Business: 214-436-7998",
  "Email: itech@icloudwireless.com",
];

export const middleLinksLeft = [
  { label: "HOME", href: "/" },
  { label: "LOCATIONS", href: "/servicearea" },
  { label: "MY ACCOUNT | LOGIN", href: "#" },
  { label: "FAQ", href: "#" }
];
export const middleLinksRight = [
  { label: "SCHEDULE SERVICE", href: "https://icloudwireless.setmore.com/" },
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "QUALITY STANDARDS", href: "#" },
  { label: "CONTACT US", href: "#" }
];

export const servicesData = [
  {
    title: "Laptop, Tablet & Computer Repairs",
    description: "Fast and reliable repairs for all major brands of laptops, tablets, and desktops. We fix screens, power issues, slow performance, and more — no appointment needed.",
    category: "REPAIR"
  },
  {
    title: "Apple MacBook & System Repairs",
    description: "Professional repairs and diagnostics for Apple MacBooks and desktops. From cracked screens to logic board issues, we handle your Apple tech with care and precision.",
    category: "APPLE"
  },
  {
    title: "Custom Gaming PC Builds",
    description: "Want maximum power and performance? We design and build custom gaming PCs tailored to your specs and budget. Perfect for serious gamers and content creators.",
    category: "CUSTOM"
  },
  {
    title: "Virus & Malware Removal",
    description: "Eliminate viruses, spyware, and ransomware quickly and safely. We clean and secure your system while protecting your files and restoring speed and stability.",
    category: "SECURITY"
  },
  {
    title: "Data Recovery",
    description: "Accidentally deleted files or failed hard drive? We offer advanced data recovery solutions to retrieve documents, photos, and more from damaged or corrupted devices.",
    category: "DATA"
  }
];

export const hardwareData = [
  {
    title: "Apple Macbooks, iPads & iMacs",
    description: "Explore our selection of new and refurbished Apple products. From sleek MacBooks to powerful iMacs and portable iPads, we’ve got the right device for every Apple user.",
    category: "APPLE"
  },
  {
    title: "Windows Laptops & Workstations",
    description: "Find reliable Windows laptops and workstations for home, school, or business. We carry top brands and models suited for everyday use or power-intensive tasks.",
    category: "WINDOWS"
  },
  {
    title: "All-in-One Computers",
    description: "Save space without sacrificing performance. Our all-in-one PCs combine sleek design with powerful specs — ideal for offices, front desks, and home setups.",
    category: "DESKTOP"
  },
  {
    title: "Home & Office PCs",
    description: "Get dependable desktops built for multitasking, web use, and productivity. Perfect for students, families, and small businesses that need affordable performance.",
    category: "OFFICE"
  },
  {
    title: "Graphics/CAD Workstations",
    description: "High-performance workstations engineered for 3D modeling, video editing, and CAD applications. Built to handle intensive workloads with precision and speed.",
    category: "WORKSTATION"
  },
  {
    title: "Chromebooks",
    description: "Affordable, fast, and simple to use. Great for students and light browsing, our Chromebooks offer secure cloud-based computing with all-day battery life.",
    category: "STUDENT"
  }
];

export const copyright = "© 2024 iCloudwireless | All Rights Reserved";

