import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HashScrollManager from "@/components/shared/HashScrollManager";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import Analytics from "@/components/analytics/Analytics";
import WebVitals from "@/components/analytics/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptv-amsterdam.store"),
  applicationName: "IPTV Amsterdam",
  title: {
    default: "IPTV Amsterdam — Beste IPTV Abonnement van Nederland",
    template: "%s | IPTV Amsterdam",
  },
  description:
    "Premium IPTV abonnement in Amsterdam en Nederland. Stabiele 4K-streams, duizenden kanalen en nul buffering. Ontdek het beste IPTV pakket bij IPTV Amsterdam.",
  keywords: [
    "iptv amsterdam",
    "iptv abonnement",
    "iptv abonnementen",
    "iptv aanbieder",
    "beste iptv providers",
    "premium iptv nederland",
    "iptv in nederland",
    "iptv pakket",
    "iptv 4k",
    "iptv kopen",
    "amsterdam iptv",
    "iptv amsterdam service",
  ],
  authors: [{ name: "IPTV Amsterdam" }],
  manifest: "/site.webmanifest",
  // `?v=5` busts aggressive browser favicon caching after the icon refresh.
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=5", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=5", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png?v=5", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png?v=5", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png?v=5", type: "image/png", sizes: "192x192" },
      { url: "/favicon-256x256.png?v=5", type: "image/png", sizes: "256x256" },
    ],
    shortcut: ["/favicon.ico?v=5"],
    apple: [
      { url: "/apple-touch-icon.png?v=5", sizes: "180x180", type: "image/png" },
      {
        url: "/apple-touch-icon-152x152.png?v=5",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-167x167.png?v=5",
        sizes: "167x167",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png?v=5",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://iptv-amsterdam.store",
    siteName: "IPTV Amsterdam",
    title: "IPTV Amsterdam — Beste IPTV Abonnement van Nederland",
    description:
      "Stabiele 4K-Amsterdam, duizenden kanalen en nul buffering. Premium IPTV in Amsterdam en heel Nederland.",
    images: [
      {
        url: "/images/logo-iptv-streaming.png",
        width: 1505,
        height: 1352,
        alt: "IPTV Amsterdam – Premium IPTV abonnement in Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Amsterdam — Beste IPTV Abonnement van Nederland",
    description:
      "Stabiele 4K-Amsterdam, duizenden kanalen en nul buffering. Premium IPTV in Amsterdam en heel Nederland.",
    images: ["/images/logo-iptv-streaming.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console verification
  verification: {
    google: "h9BUAnVKdVf4_C3AGulEl222PAg9YtVLY-Josg01AWc",
  },
};

// Theme color + color scheme belong in the viewport export in Next.js 16.
export const viewport: Viewport = {
  themeColor: "#060B16",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "";
  return (
    <html
      lang="nl"
      className={`h-full antialiased ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(phoneNumber)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Analytics (env-gated, afterInteractive) + Core Web Vitals reporting */}
        <Analytics />
        <WebVitals />

        {/* Skip-to-content link for keyboard users — first focusable element */}
        <a
          href="#main-content"
          id="skip-to-content"
          className="fixed -top-40 left-4 z-[9999] rounded-xl bg-rouge-500 px-6 py-3 font-black text-blanc-50 shadow-lg transition-all focus:top-4 focus:outline-2 focus:outline-france-400"
        >
          Naar inhoud springen
        </a>

        <NavBar />
        <HashScrollManager />

        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
