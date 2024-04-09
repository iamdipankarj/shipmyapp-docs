import type { Metadata } from "next";

interface MetaDataProps extends Metadata {
  canonicalUrlRelative?: string
}

const siteDescription = "A No-Nonsense NextJS Starter kit for Startups. Build your SaaS in a week and avoid burnout."

export function getMetaData({
  title = "ShipMyApp | A No-Nonsense NextJS Boilerplate for Startups",
  description = siteDescription,
  canonicalUrlRelative = process.env.HOST_NAME
}: MetaDataProps = {}): Metadata {
  return {
    metadataBase: new URL("https://shipmyapp.com"),
    title,
    description,
    manifest: "/site.webmanifest",
    applicationName: "ShipMyApp",
    twitter: {
      creator: "@iamdipankarj",
      title: "ShipMyApp",
      description: description!
    },
    alternates: {
      canonical: canonicalUrlRelative
    },
    authors: {
      name: "Dipankar Jana"
    },
    other: {
      "msapplication-TileColor": "#ffffff",
      "msapplication-config": "/browserconfig.xml",
      "msapplication-TileImage": "/mstile-150x150.png",
      "theme-color": "#E72929"
    },
    keywords: "ShipMyApp, NextJS boilerplate, NextJS starter, NextJS template, NextJS, ReactJS, react, typescript, tailwind, saas, startup, boilerplate, javascript",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: process.env.HOST_NAME,
      siteName: "ShipMyApp",
      images: [
        {
          url: `${process.env.HOST_NAME}/open-graph-image.png`,
          width: 1200,
          height: 630,
          alt: "ShipMyApp"
        }
      ]
    }
  }
}

export function getStructuredData() {
  return {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    "name": "ShipMyApp",
    "description": siteDescription,
    "image": `${process.env.HOST_NAME}/open-graph-image.png`,
    "url": process.env.HOST_NAME,
    "author": {
      "@type": "Website",
      "name": "ShipMyApp"
    },
    "datePublished": "2024-02-02",
    "applicationCategory": "DeveloperApplication",
    "offers": [
      {
        "@type": "Offer",
        "price": "129.00",
        "priceCurrency": "USD"
      }
    ]
  }
}
