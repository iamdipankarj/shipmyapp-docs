"use client";

import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link';

interface CheckoutButtonMinimalProps extends React.HTMLAttributes<HTMLButtonElement> {
  featured?: boolean
}

export function CheckoutButtonMinimal({
  className,
  featured = false,
  children,
  ...props
}: CheckoutButtonMinimalProps) {

  return (
    <button className={cn("btn btn-success hover:!text-white", {
      "text-white": featured,
      "btn-outline": !featured
    })} {...props}>
      {children}
    </button>
  )
}
