import type { Metadata } from "next";
import "./globals.css";
import { OrganizationSchema } from "@/schema";
import { Poppins } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// Import Poppins Font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Meta! To be found!

export const metadata: Metadata = {
  title:
    "Goodhelper – Singapore Professionally Trained Domestic Agency | Domestic Helpers in Singapore",
  description:
    "Find a professionally trained domestic helper in Singapore with GoodHelper. As a specialised domestic agency, we train helpers to support modern working moms with household, childcare, and cooking needs.",
  keywords: [
    "maid agency Singapore",
    "trained domestic helper Singapore",
    "best maid agency",
    "domestic helper services",
    "infant care maid",
    "housekeeping services",
    "Filipino maid Singapore",
    "Indonesian maid Singapore",
    "cooking helper",
  ],

  authors: [{ name: "Goodhelper", url: "https://www.goodhelper.com.sg/" }],
  robots: "index, follow",
  openGraph: {
    title: "Professionally Trained Helper Agency in Singapore | Goodhelper",
    description:
      "Find a professionally trained domestic helper in Singapore. We train helpers to support modern working families with childcare, household and cooking needs.",
    url: "https://www.goodhelper.com.sg/",
    type: "website",
    images: [
      {
        url: "/gh_logo_BW.jpg",
        width: 1200,
        height: 630,
        alt: "Goodhelper Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Goodhelper – Singapore Professionally Trained Domestic Agency | Domestic Helpers in Singapore",
    description:
      "Find a professionally trained domestic helper in Singapore with GoodHelper. As a specialised domestic agency, we train helpers to support modern working moms with household, childcare, and cooking needs.",
    images: ["/gh_logo_BW.jpg"],
  },

  alternates: {
    canonical: "https://www.goodhelper.com.sg/",
  },
};

// ✅ Corrected: Keep Only One `export default` Function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify(OrganizationSchema)}
        </script>
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Nav />
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto space-y-4">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

// keywords: [
//   "maid agency Singapore",
//   "best maid agency Singapore",
//   "domestic helper Singapore",
//   "hiring a domestic helper",
//   "experienced domestic helper",
//   "good helper Singapore",
//   "infant care maid",
//   "maid for cooking",
//   "trusted maid agency",
//   "trained maid agency",
//   "domestic agency Singapore",
//   "maid services Singapore",
//   "housekeeping services Singapore",
//   "Filipino maid agency",
//   "Indonesian maid agency",
//   "quality maid agency",
// ],
