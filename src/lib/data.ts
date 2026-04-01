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
    slug: "laptop-tablet-computer-repairs",
    description: "Fast and reliable repairs for all major brands of laptops, tablets, and desktops. We fix screens, power issues, slow performance, and more — no appointment needed.",
    category: "REPAIR",
    longDescription: "At iCloudwireless, we specialize in professional repairs for laptops, tablets, and desktop computers — whether you use your device for work, school, gaming, or just staying connected. Our certified technicians are experienced with all major brands, including Dell, HP, Lenovo, Acer, ASUS, Apple, Microsoft Surface, and more.",
    features: [
      "Screen replacements for laptops and tablets",
      "Battery and charging port replacements",
      "Keyboard and trackpad repairs",
      "Fan and overheating diagnostics",
      "Power issues and motherboard repairs",
      "Software troubleshooting, virus removal, and OS reinstalls",
      "Data backup, transfer, and recovery options",
      "Full diagnostics with honest, up-front estimates"
    ]
  },
  {
    title: "Apple MacBook & System Repairs",
    slug: "apple-macbook-system-repairs",
    description: "Professional repairs and diagnostics for Apple MacBooks and desktops. From cracked screens to logic board issues, we handle your Apple tech with care and precision.",
    category: "APPLE",
    longDescription: "We offer professional Apple repair services for MacBooks, iMacs, and other Apple systems — without the hassle of an appointment at the Apple Store. From common repairs like screen and battery replacements to more advanced services like logic board and SSD repairs, we use quality parts to restore your Apple device to peak performance.",
    features: [
      "MacBook screen and display replacements",
      "Battery and trackpad replacements",
      "macOS installation, upgrade, and troubleshooting",
      "Logic board diagnostics and component-level repair",
      "Data migration, Time Machine setup, and recovery",
      "iMac SSD upgrades and performance optimization",
      "Liquid damage assessment and repair",
      "Support for Intel and Apple Silicon (M1/M2/M3) models"
    ]
  },
  {
    title: "Gaming Console Repair",
    slug: "gaming-console-repair",
    description: "Professional repairs for all major gaming consoles including PlayStation, Xbox, and Nintendo Switch. We handle HDMI ports, disc drives, overheating, and more.",
    category: "CONSOLE",
    longDescription: "Don't let a broken console keep you out of the game. We provide high-quality repairs for PlayStation 5/4, Xbox Series X/S, and Nintendo Switch. Our technicians can fix specialized issues that standard shops won't touch.",
    features: [
      "HDMI port replacements for PS5 and Xbox",
      "Joystick drift and controller repairs",
      "Disc drive repair and replacements",
      "Thermal cleaning and fan replacements",
      "Software updates and recovery",
      "Internal hard drive and SSD upgrades"
    ]
  },
  {
    title: "Website, App & Software Development",
    slug: "website-app-development",
    description: "Modern, scalable digital solutions for your business. We build custom websites, mobile applications, and software tailored to your specific goals.",
    category: "DEVELOPMENT",
    longDescription: "Elevate your business with custom digital solutions. Our development team creates fast, responsive websites and high-performance apps that engage your customers and streamline your operations.",
    features: [
      "Responsive Website Design & Development",
      "Custom eCommerce (Shopify, WordPress, WooCommerce)",
      "iOS and Android Mobile App Development",
      "Custom Business Software Solutions",
      "SEO & Digital Marketing Integration",
      "Ongoing Maintenance and Technical Support"
    ]
  },
  {
    title: "Virus & Malware Removal",
    slug: "virus-malware-removal",
    description: "Eliminate viruses, spyware, and ransomware quickly and safely. We clean and secure your system while protecting your files and restoring speed and stability.",
    category: "SECURITY",
    longDescription: "Digital threats can compromise your personal data and slow your system to a crawl. Our security experts thoroughly scan and clean your device, removing even the most deep-seated malware while ensuring your personal files remain safe.",
    features: [
      "Advanced Virus and Spyware removal",
      "Ransomware cleanup and data security",
      "Antivirus software installation and configuration",
      "System speed optimization and cleanup",
      "Security audit and future protection advice",
      "Secure file backup before cleaning"
    ]
  },
  {
    title: "Data Recovery",
    slug: "data-recovery",
    description: "Accidentally deleted files or failed hard drive? We offer advanced data recovery solutions to retrieve documents, photos, and more from damaged or corrupted devices.",
    category: "DATA",
    longDescription: "Lost your important documents or precious photos? Don't panic. We use specialized forensic tools to recover data from failed hard drives, corrupted SSDs, liquid-damaged devices, and accidental deletions.",
    features: [
      "Hard drive and SSD data recovery",
      "Photo and document retrieval from broken phones",
      "Recovery from liquid-damaged devices",
      "External drive and SD card recovery",
      "Secure data transfer to new storage",
      "Confidential and safe handling of sensitive info"
    ]
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

