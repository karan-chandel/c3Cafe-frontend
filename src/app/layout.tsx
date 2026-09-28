import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chaichowkcafe.com"),
  title: "Chai Chowk Cafe | C3 Chai, Coffee & Conversations",
  description:
    "Fatehabad ka Favourite Chai Spot 🔥 Best Taste • Best Vibe ✨ Enjoy authentic kulhad chai, handcrafted coffees, fresh pizzas & snacks at MM PG College.",
  keywords: [
    "Chai Chowk Cafe",
    "C3 Cafe Fatehabad",
    "Kulhad Chai",
    "Coffee Shop Fatehabad",
    "MM PG College Cafe",
    "Cafe Franchise India",
  ],
  alternates: {
    canonical: "https://chaichowkcafe.com",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Chai Chowk Cafe | C3 Chai, Coffee & Conversations",
    description:
      "Fatehabad ka Favourite Chai Spot 🔥 Best Taste • Best Vibe ✨ Visit Once, Come Again ❤️",
    url: "https://chaichowkcafe.com",
    siteName: "Chai Chowk Cafe",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Chai Chowk Cafe Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chai Chowk Cafe | C3 Chai, Coffee & Conversations",
    description:
      "Fatehabad ka Favourite Chai Spot 🔥 Best Taste • Best Vibe ✨ Visit Once, Come Again ❤️",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "GMzcRUi8xo86RjPXr9wz4CnbiMElN53u7zIV3glB4V8",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Chai Chowk Cafe",
    alternateName: "C3 Cafe",
    image: "/logo.jpg",
    description: "Fatehabad ka Favourite Chai Spot 🔥 Best Taste • Best Vibe ✨ Kulhad chai, coffee, and fresh bites at MM PG College.",
    telephone: "+919253779999",
    priceRange: "₹₹",
    sameAs: [
      "https://www.instagram.com/c3chaichowkcafe/",
      "https://www.facebook.com/profile.php?id=61579396418460",
    ],
    servesCuisine: ["Cafe", "Beverages", "Fast Food", "Italian"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "MM PG College, Ratia Road, near Punjab National Bank, Model Town",
      addressLocality: "Fatehabad",
      addressRegion: "Haryana",
      postalCode: "125050",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-[#e05326] selection:text-white flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
