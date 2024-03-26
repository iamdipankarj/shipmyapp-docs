"use client";

import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link';

interface CheckoutButtonMinimalProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  featured?: boolean
  href: string
}

export function CheckoutButtonMinimal({
  className,
  featured = false,
  children,
  href,
  ...props
}: CheckoutButtonMinimalProps) {

  return (
    <Link href={href} className={cn("btn btn-success hover:!text-white", {
      "text-white": featured,
      "btn-outline": !featured
    })} {...props}>
      {children}
    </Link>
  )
}
