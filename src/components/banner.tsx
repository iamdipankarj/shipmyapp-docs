import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Banknote } from 'lucide-react'
import Image from 'next/image'
import { CheckoutButton } from '@/components/checkout-button'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Banner({
  className,
  ...props
}: BannerProps) {
  return (
    <section className="bg-gradient-to-t from-yellow-50/80 relative">
      <div className="relative py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <div className="order-2 lg:order-1 text-center sm:text-start">
              <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                Build in a week
                <span className="relative z-0 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0 inline-flex">
                  Ship in a day
                </span>
              </h1>
              <p className="text-gray-500">
                A No-Nonsense NextJS Starter kit for Startups. Build your SaaS in a week and avoid burnout.
              </p>
              <CheckoutButton className="mt-14 hover:shadow-lg hover:shadow-primary/50 transition-all duration-500" featured>
                Get ShipMyApp
              </CheckoutButton>
              <div className="mt-5">
                <p className="inline-flex bg-yellow-600/10 text-sm rounded-lg py-2 px-5 gap-1">
                  Have Questions?{" "}
                  <Link href="#faq" className="font-semibold">
                    {" "}
                    See FAQ
                  </Link>
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative 2xl:w-[128%]">
                <Image
                  src="/features/banner.png"
                  alt="ShipMyApp Banner"
                  className="w-full h-full p-2 rounded-lg"
                  width={1080}
                  height={900}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
