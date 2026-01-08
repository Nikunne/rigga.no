"use client";

import { useRouter } from "next/navigation";

interface LinkPusherProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkPusher({ href, children }: LinkPusherProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      style={{ all: "unset", cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
