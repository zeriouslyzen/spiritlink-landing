import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SYN7H[λ] | Secure Protocol for the Invisible",
  description: "SYN7H[λ] - A living protocol for those who operate outside the visible spectrum. Layered intelligence. Adaptive defense. Presence erased.",
  keywords: ["cybersecurity", "encryption", "secure protocol", "privacy", "data protection", "adaptive defense"],
  authors: [{ name: "SYN7H[λ] Operator" }],
  creator: "SYN7H[λ]",
  publisher: "SYN7H[λ]",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SYN7H[λ]",
    startupImage: [
      {
        url: "/splash/iphone-14-pro-max.png",
        media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-14-pro.png",
        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-14-plus.png",
        media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-14.png",
        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-13-pro.png",
        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-13.png",
        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-12.png",
        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/splash/iphone-11.png",
        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splash/iphone-8.png",
        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splash/ipad-pro-12-9.png",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splash/ipad-pro-11.png",
        media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splash/ipad-10-9.png",
        media: "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/splash/ipad-mini.png",
        media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "SYN7H[λ]",
    title: "SYN7H[λ] | Secure Protocol for the Invisible",
    description: "A living protocol for those who operate outside the visible spectrum. Layered intelligence. Adaptive defense. Presence erased.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SYN7H[λ] - Secure Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SYN7H[λ] | Secure Protocol for the Invisible",
    description: "A living protocol for those who operate outside the visible spectrum. Layered intelligence. Adaptive defense. Presence erased.",
    images: ["/twitter-image.png"],
    creator: "@syn7h_protocol",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 overscroll-none`}>
        {children}
      </body>
    </html>
  );
}
