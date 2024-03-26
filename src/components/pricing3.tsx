"use client";

import React, { FormEvent, useState } from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnMinimal } from '@/components/pricing-column-minimal'
import { PricingHeader } from '@/components/pricing-header'
import { TabContainer } from '@/components/tab-container'
import { Tab } from '@/components/tab'
import { CheckoutButtonMinimal } from '@/components/checkout-button-minimal';
import { useRouter } from 'next/navigation';
import { Modal } from '@/components/modal';
import { Loader2 } from 'lucide-react';

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing3({
  className,
  ...props
}: PricingProps) {
  const [selectedTab, setSelectedTab] = useState(1)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleCheckoutClick = () => {
    setConfirmOpen(true);
  }

  const handleContinue = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    router.push(`https://shipmyapp.lemonsqueezy.com/checkout/buy/587c09b7-844a-4caf-8182-08e70fc7d50f?checkout[custom][username]=${username}`);
  }

  return (
    <section className={cn("bg-base-200 overflow-hidden", className)} {...props}>
      <Modal heading="Enter your github username" open={confirmOpen} onClose={setConfirmOpen}>
        <div className="text-sm mt-2 mb-4 text-base-content/70 text-left">Please enter the username of your Github account. You should automatically receive an invitation after the purchase. Be sure to check your spam folder as well. In case you don&apos;t receive an invitation, drop me an email with your LemonSqueezy order number and Github username and I&apos;ll give you the access.</div>
        <form onSubmit={handleContinue} className="space-y-4 mt-4 flex flex-col w-full">
          <input value={username} onChange={handleUsernameChange} type="text" placeholder="e.g iamjohndoe" className="input input-bordered w-full" disabled={loading} required />
          <button type="submit" className="btn btn-success text-white" disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : null}
            Continue
          </button>
        </form>
      </Modal>
      <div className="py-20 px-8 max-w-5xl mx-auto">
        <PricingHeader className="mb-12" />
        <TabContainer className="max-w-64 mx-auto mb-4">
          <Tab onClick={() => setSelectedTab(0)} selected={selectedTab == 0}>Monthly</Tab>
          <Tab onClick={() => setSelectedTab(1)} selected={selectedTab == 1}>Yearly</Tab>
        </TabContainer>
        <div className="text-xs text-center text-neutral/60 mb-8">Pay yearly and save upto 50%</div>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <PricingColumnMinimal
            heading="Starter"
            price="$0"
            strikedPrice="$10"
            frequency={selectedTab == 0 ? "monthly" : "yearly"}
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events'
            ]}
          >
            <CheckoutButtonMinimal onClick={handleCheckoutClick}>
              Get Started
            </CheckoutButtonMinimal>
          </PricingColumnMinimal>
          <PricingColumnMinimal
            heading="Plus"
            price={selectedTab == 0 ? "$10" : "$100"}
            strikedPrice={selectedTab == 0 ? "$15" : "$120"}
            frequency={selectedTab == 0 ? "monthly" : "yearly"}
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events',
              'Dedicated Desk',
              'Free Business Address',
              'Free Lunch 1x a day'
            ]}
            featured
          >
            <CheckoutButtonMinimal featured>
              Get Started
            </CheckoutButtonMinimal>
          </PricingColumnMinimal>
        </div>
      </div>
    </section>
  )
}
