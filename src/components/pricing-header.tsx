import React from 'react'
import { cn } from "@/lib/utils"
import { Gift, Rocket } from 'lucide-react'

interface PricingHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function PricingHeader({
  className,
  children,
  ...props
}: PricingHeaderProps) {
  return (
    <div className={cn("flex flex-col text-center w-full", className)} {...props}>
      <p className="font-medium text-primary mb-8">Pricing</p>
      <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">
        One simple price. All inclusive.
      </h2>
      <p className="text-xl justify-center items-center gap-2 inline-flex">
        <span>Save weeks of coding and jumpstart <br /> your next project with the pre-built template.</span>
      </p>
      {children}
    </div>  
  )
}
