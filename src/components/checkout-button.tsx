"use client";

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';

interface CheckoutButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  featured?: boolean
  priceId: string
  mode: "subscription" | "payment"
}

export function CheckoutButton({
  className,
  featured = false,
  priceId,
  mode,
  children,
  ...props
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  return (
    <button className={cn("btn btn-primary group btn-block", className, {
      "btn-outline": !featured
    })} disabled={loading} {...props}>
      {loading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </button>
  )
}
