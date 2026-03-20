import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: true,
});

const baseUrl = "https://sunmyeonglee.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Sunmyeong Lee",
  description: "AI UXer bridging design, AI, and engineering.",
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "LM-7sMIofREuldblj72fqP5yeyyf9ZYQEfJlWTcxf7U",
  },
  openGraph: {
    title: "Sunmyeong Lee",
    description: "AI UXer bridging design, AI, and engineering.",
    url: baseUrl,
    siteName: "Sunmyeong Lee",
    type: "website",
    locale: "en_US",
    images: [{ url: "/OG.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunmyeong Lee",
    description: "AI UXer bridging design, AI, and engineering.",
    images: ["/OG.png"],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sunmyeong Lee",
  url: baseUrl,
  jobTitle: "AI UXer",
  affiliation: [
    { "@type": "Organization", name: "KAIST DxD Lab" },
    { "@type": "Organization", name: "Sogang University" },
  ],
  sameAs: [
    "https://github.com/sunmyeonglee",
    "https://linkedin.com/in/sunmyeonglee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T3QGXJZL');`,
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ opacity: 0 }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3QGXJZL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.fonts.ready.then(function(){document.body.style.opacity='1'})`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
