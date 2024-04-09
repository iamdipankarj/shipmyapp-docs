"use client";

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { ConfirmationModal } from '@/components/confirmation-modal';
import { Banknote } from 'lucide-react';

interface CheckoutButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  featured?: boolean
}

export function CheckoutButton({
  className,
  featured = false,
  children,
  ...props
}: CheckoutButtonProps) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const handleCheckoutClick = () => {
    setConfirmOpen(true);
  }

  return (
    <>
      <ConfirmationModal open={confirmOpen} onClose={setConfirmOpen} />
      <button onClick={handleCheckoutClick} className={cn("btn btn-primary", className, {
        "btn-outline": !featured
      })} {...props}>
        <Banknote className="w-5 h-5" />
        {children}
      </button>
    </>
  )
}
