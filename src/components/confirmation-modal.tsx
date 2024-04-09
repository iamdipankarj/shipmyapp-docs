"use client";

import { Modal, ModalProps } from "@/components/modal";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface ConfirmationModalProps extends ModalProps {

}

export function ConfirmationModal({
  open,
  onClose,
}: ConfirmationModalProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const [username, setUsername] = useState('')
  
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleContinue = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const trimmedUsername = username.trim();
    if (process.env.NODE_ENV === 'development') {
      router.push(`https://shipmyapp.lemonsqueezy.com/checkout/buy/587c09b7-844a-4caf-8182-08e70fc7d50f?checkout[custom][username]=${trimmedUsername}`);
    } else {
      router.push(`https://shipmyapp.lemonsqueezy.com/buy/25e6ad0f-634e-440f-819a-4f041b84424d?checkout[custom][username]=${trimmedUsername}`);
    }
  }

  return (
    <Modal heading="Enter your github username" open={open} onClose={onClose}>
      <div className="text-sm mt-2 mb-4 text-base-content/70 text-left">Please enter the username of your Github account. You should automatically receive an invitation after the purchase. Be sure to check your spam folder as well. In case you don&apos;t receive an invitation, drop me an email with your LemonSqueezy order number and Github username and I&apos;ll give you the access.</div>
      <form onSubmit={handleContinue} className="space-y-4 mt-4 flex flex-col w-full">
        <input value={username} onChange={handleUsernameChange} type="text" placeholder="e.g iamjohndoe" className="input input-bordered w-full" disabled={loading} required />
        <button type="submit" className="btn btn-primary text-white" disabled={loading}>
          {loading ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : null}
          Continue
        </button>
      </form>
    </Modal>
  )
}
