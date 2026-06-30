import { cacheLife, cacheTag } from "next/cache";

export type PhoneNumberData = {
  phone_number: string;
};

const FALLBACK_PHONE = process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** Cache tag for the business phone number — call `revalidateTag(PHONE_NUMBER_TAG, "max")`
 *  (see /api/revalidate) after updating the number in Supabase to refresh it. */
export const PHONE_NUMBER_TAG = "phone-number";

const FETCH_TIMEOUT_MS = 5_000;

async function fetchPhoneNumberFromSupabase(): Promise<string> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return FALLBACK_PHONE;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/phone_numbers?select=phone_number&limit=1`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        signal: controller.signal,
      },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(
        "[settings] Supabase phone_number fetch failed: HTTP",
        response.status,
      );
      return FALLBACK_PHONE;
    }

    const rows: { phone_number: string }[] = await response.json();
    const phone = rows?.[0]?.phone_number;
    if (!phone) {
      console.warn(
        "[settings] No phone number returned from Supabase, using fallback",
      );
      return FALLBACK_PHONE;
    }
    return phone;
  } catch (err) {
    console.warn(
      "[settings] Error fetching phone_number, using fallback:",
      err instanceof Error ? err.message : err,
    );
    return FALLBACK_PHONE;
  }
}

/**
 * Tag-cached phone number via the Next.js 16 `use cache` system.
 * Refreshed every hour (cacheLife "hours") or on demand via
 * `revalidateTag(PHONE_NUMBER_TAG, "max")` (POST /api/revalidate).
 */
export async function getPhoneNumber(): Promise<string> {
  "use cache";
  cacheTag(PHONE_NUMBER_TAG);
  cacheLife("hours");
  return fetchPhoneNumberFromSupabase();
}

/**
 * Build a WhatsApp deep-link URL from a phone number.
 */
export function whatsappUrl(phone: string): string {
  return `https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`;
}

/**
 * Build a WhatsApp deep-link URL with a pre-filled message.
 */
export function whatsappUrlWithMessage(phone: string, message: string): string {
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
