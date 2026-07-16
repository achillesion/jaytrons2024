"use client";

import { Button } from "@/components/ui/button";

interface OpenBookingButtonProps {
  className?: string;
}

export function OpenBookingButton({ className }: OpenBookingButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openCalendlyModal"));
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
    >
      Book Your Free Strategy Call
    </Button>
  );
}
