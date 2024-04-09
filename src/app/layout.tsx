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
        <link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
          window.$crisp=[];window.CRISP_WEBSITE_ID="4570d6a2-5071-4fd0-a87d-e8aff0b994b1";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `
        }} />
        <script defer data-domain="shipmyapp.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
