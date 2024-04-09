import React from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnCorporate } from '@/components/pricing-column-corporate'
import { CheckoutButton } from '@/components/checkout-button'
import { PricingHeader } from '@/components/pricing-header'

interface Pricing4Props extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing4({
  className,
  ...props
}: Pricing4Props) {
  return (
    <section id="pricing" className={cn("bg-base-100", className)} {...props}>
      <div className="container">
        <PricingHeader className="mb-12" />
        <div className="flex gap-7 mt-14">
          <PricingColumnCorporate
            className="flex-1"
            heading="All inclusive pricing"
            price="79"
            frequency="month"
            lineItems={[
              'Next.JS 14',
              'App Router',
              'End to end authentication flow',
              'NextAuth and Supabase',
              'Database with Prisma ORM',
              'OAuth and Email login',
              'Magic Link Sign up',
              'Multiple UI Components',
              'Stripe and LemonSqueezy Payments',
              'App Dashboard',
              'Lifetime Updates',
              'OpenAI Integration',
              'Replicate Integration',
              'Vercel AI Integration'
            ]}
            featured
          >
            <CheckoutButton className='btn-block' featured>
              Purchase Now
            </CheckoutButton>
          </PricingColumnCorporate>
        </div>
      </div>
    </section>
  )
}
