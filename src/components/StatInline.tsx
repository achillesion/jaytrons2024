"use client";

import React from "react";

interface StatInlineProps {
  dotClass?: string;
  value: React.ReactNode;
  label: React.ReactNode;
}

export default function StatInline({ dotClass = "bg-sky-400", value, label }: StatInlineProps) {
  return (
    <div className="flex items-center gap-1 whitespace-nowrap">
      <span className={`w-2 h-2 ${dotClass} flex-shrink-0`} />
      <span className="text-xl md:text-sm md:text-sm font-semibold text-foreground">{value}</span>
      <span className="text-xl md:text-sm md:text-xs text-muted-foreground ml-1">{label}</span>
    </div>
  );
}
