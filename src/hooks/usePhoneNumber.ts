"use client";

import { useState, useEffect } from "react";

interface UsePhoneNumberResult {
  phoneNumber: string;
  whatsappUrl: string;
  isLoading: boolean;
  error: string | null;
}

/**
 * React hook to fetch the business phone number from the API route.
 *
 * Usage (client components only):
 *   const { phoneNumber, whatsappUrl, isLoading, error } = usePhoneNumber();
 *
 * Returns:
 *   phoneNumber - the raw phone number string (e.g. "3197010265593")
 *   whatsappUrl - full WhatsApp deep-link URL
 *   isLoading   - true while fetching
 *   error       - error message if fetch failed
 */
export function usePhoneNumber(): UsePhoneNumberResult {
  const [phoneNumber, setPhoneNumber] = useState<string>(
    process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "",
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPhoneNumber() {
      try {
        const res = await fetch("/api/phone-number");
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        if (!cancelled) {
          setPhoneNumber(data.phone_number ?? "");
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          const msg =
            err instanceof Error ? err.message : "Failed to load phone number";
          setError(msg);
          // Use env fallback
          setPhoneNumber(
            process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchPhoneNumber();

    return () => {
      cancelled = true;
    };
  }, []);

  const whatsappUrl = phoneNumber
    ? `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`
    : "";

  return { phoneNumber, whatsappUrl, isLoading, error };
}
