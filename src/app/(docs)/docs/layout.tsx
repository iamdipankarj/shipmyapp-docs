import type { Metadata } from "next";
import { getMetaData } from "@/lib/seo";
import { Bell, Book, Cherry, LifeBuoy, Play, Rocket, Scissors } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";

export const metadata: Metadata = getMetaData();

const tutorials: Array<{ path: string, label: string }> = [
  {
    path: "/docs/ship-in-5-minutes",
    label: "Ship in 5 minutes"
  },
  {
    path: "/docs/static-page",
    label: "Static page"
  },
  {
    path: "/docs/user-auth",
    label: "User authentification"
  },
  {
    path: "/docs/api-call",
    label: "API call"
  },
  {
    path: "/docs/private-page",
    label: "Private page"
  },
  {
    path: "/docs/subscriptions",
    label: "Stripe Subscriptions"
  },
  {
    path: "/docs/privacy-policy-gpt",
    label: "Privacy policy with GPT"
  }
]

const features: Array<{ path: string, label: string }> = [
  {
    path: "/docs/seo",
    label: "SEO"
  },
  {
    path: "/docs/database",
    label: "Database"
  },
  {
    path: "/docs/emails",
    label: "Emails"
  },
  {
    path: "/docs/payments",
    label: "Payments"
  },
  {
    path: "/docs/google-oauth",
    label: "Google Oauth"
  },
  {
    path: "/docs/magic-links",
    label: "Magic Links"
  },
  {
    path: "/docs/customer-support",
    label: "Customer support"
  },
  {
    path: "/docs/error-handling",
    label: "Error handling"
  },
  {
    path: "/docs/analytics",
    label: "Analytics"
  }
]

export const components = [
  {
    path: "/docs/header",
    label: "Header"
  },
  {
    path: "/docs/hero",
    label: "Hero"
  },
  {
    path: "/docs/problem",
    label: "Problem"
  },
  {
    path: "/docs/withwithout",
    label: "WithWithout"
  },
  {
    path: "/docs/features-listicle",
    label: "Features Listicle"
  },
  {
    path: "/docs/features-accordion",
    label: "Features Accordion"
  },
  {
    path: "/docs/cta",
    label: "CTA"
  },
  {
    path: "/docs/pricing",
    label: "Pricing"
  },
  {
    path: "/docs/blog",
    label: "Blog"
  },
  {
    path: "/docs/faq",
    label: "FAQ"
  },
  {
    path: "/docs/testimonial1small",
    label: "Testimonial Small"
  },
  {
    path: "/docs/testimonials1",
    label: "Testimonial Single"
  },
  {
    path: "/docs/testimonials3",
    label: "Testimonial Triple"
  },
  {
    path: "/docs/testimonials11",
    label: "Testimonial Grid"
  },
  {
    path: "/docs/testimonialsAvatar",
    label: "Testimonial Small"
  },
  {
    path: "/docs/Footer",
    label: "Footer"
  },
  {
    path: "/docs/buttonLead",
    label: "Button Lead"
  },
  {
    path: "/docs/buttonCheckout",
    label: "Button Checkout"
  },
  {
    path: "/docs/buttonSignin",
    label: "Button Sign-in"
  },
  {
    path: "/docs/buttonAccount",
    label: "Button Account"
  },
  {
    path: "/docs/buttonGradient",
    label: "Button Gradient"
  }
]

const CategoryHeader = ({ icon, href = "#", children }: any) => {
  return (
    <Link
      className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content"
      href={href}
    >
      {icon}
      <span className="text-sm font-semibold">{children}</span>
    </Link>
  )
}

const CategoryItem = ({ path, children }: any) => {
  return (
    <Link
      href={path}
      className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content space-x-3"
    >
      <span>{children}</span>
    </Link>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className="overflow-y-auto overflow-x-visible pb-12 transform -translate-x-full fixed z-40 flex h-full flex-col justify-between border-r border-base-content/10 bg-base-100 p-4 transition-all sm:w-64 sm:translate-x-0">
        <div className="grid gap-2 pb-4">
          <div className="flex items-center space-x-2 rounded-lg">
            <Link className="rounded-lg p-2 hover:bg-hover cursor-pointer" href="/">
              <Image
                src="/icon-colored.png"
                alt="ShipMyApp"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="grid gap-1">
            <div>
              <Link
                className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content active:text-base-content"
                href="/docs"
              >
                <Play className="w-4 h-4" />
                <span className="text-sm font-semibold">Get started</span>
              </Link>
            </div>
            <div>
              <CategoryHeader icon={<Book className="w-4 h-4" />}>Tutorials</CategoryHeader>
              <div className="my-1">
                {tutorials.map(({ path, label }) => (
                  <CategoryItem key={path} path={path}>{label}</CategoryItem>
                ))}
              </div>
            </div>
            <div>
              <CategoryHeader icon={<Scissors className="w-4 h-4" />}>Features</CategoryHeader>
              <div className="my-1">
                {features.map(({ path, label }) => (
                  <CategoryItem key={path} path={path}>{label}</CategoryItem>
                ))}
              </div>
            </div>
            <div>
              <CategoryHeader icon={<Book className="w-4 h-4" />}>Components</CategoryHeader>
              <div className="my-1">
                {components.map(({ path, label }) => (
                  <CategoryItem key={path} path={path}>{label}</CategoryItem>
                ))}
              </div>
            </div>
            <div>
              <CategoryHeader icon={<Rocket className="w-4 h-4" />}>Deployment</CategoryHeader>
            </div>
            <div>
              <CategoryHeader icon={<Cherry className="w-4 h-4" />}>Extras</CategoryHeader>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 border-t border-base-content/10" />
          <div className="grid gap-1">
            <Link
              href="https://shipfast.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-medium">Follow updates</span>
              </div>
              <p>↗</p>
            </Link>
            <Link
              href="https://github.com/shipmyapp/shipmyapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <Icons.githubAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Javascript repo</span>
              </div>
              <p>↗</p>
            </Link>
            <Link
              href="mailto:iamdipankarj.workspace@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <LifeBuoy className="w-4 h-4" />
                <span className="text-sm font-medium">Support</span>
              </div>
              <p>↗</p>
            </Link>
          </div>
        </div>
      </aside>
      <main className="min-h-screen bg-base-200 sm:pl-64 pb-12">
        <div className="p-8 md:p-12  prose prose-xl">
          {children}
        </div>
      </main>
    </>
  );
}
