import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { MobileFocusObserver } from "@/components/mobile-focus-observer";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axerio.agency"),
  title: {
    default: "Axerio | Premium Web Development Agency",
    template: "%s | Axerio",
  },
  description:
    "Axerio builds high-performing websites, e-commerce platforms, and custom web applications that convert visitors into customers.",
  openGraph: {
    title: "Axerio | Premium Web Development Agency",
    description:
      "Modern websites and web apps with premium UX, fast performance, and measurable business impact.",
    type: "website",
    url: "https://axerio.agency",
    siteName: "Axerio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axerio | Premium Web Development Agency",
    description:
      "We design and build conversion-focused digital experiences for ambitious brands.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <MobileFocusObserver />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
