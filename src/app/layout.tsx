import type { Metadata } from "next";
import { Gabarito as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getMetaData, getStructuredData } from "@/lib/seo";
import ProgressProvider from "@/components/progress-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = getMetaData();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="signal">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#41c289" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
