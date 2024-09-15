"use client";
import { redirect, usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return pathname.includes('portal') ? redirect(`/pt/portal/404`) : redirect(`/pt/404`);
}