import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";

import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { MobileCallBar } from "@/components/site/mobile-call-bar";
import { JsonLd, businessJsonLd } from "@/components/site/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Licensed Electrician in Mesa, AZ`,
    template: `%s | ${site.name} — Mesa, AZ`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} | Licensed Electrician in Mesa, AZ`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#12192b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="bg-primary text-primary-foreground sr-only z-50 rounded-md px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pb-16 sm:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
        <JsonLd data={businessJsonLd} />
      </body>
    </html>
  );
}
