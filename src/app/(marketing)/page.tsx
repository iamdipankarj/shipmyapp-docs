import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Banner } from "@/components/banner";
import { LandingFeature } from "@/components/landing-feature";
import { AuthenticationFeature } from "@/components/authentication-feature";
import { PaymentFeature } from "@/components/payment-feature";
import { EmailFeature } from "@/components/email-feature";
import { AIFeature } from "@/components/ai-feature";
import { DatabaseFeature } from "@/components/database-feature";
import { BlogFeature } from "@/components/blog-feature";
import { Pricing4 } from "@/components/pricing4";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <LandingFeature />
      <AuthenticationFeature />
      <PaymentFeature />
      <EmailFeature />
      <AIFeature />
      <DatabaseFeature />
      <BlogFeature />
      <Pricing4 />
      <FAQ />
      <Hero />
    </main>
  );
}
