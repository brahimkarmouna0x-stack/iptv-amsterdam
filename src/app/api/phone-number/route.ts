import { NextResponse } from "next/server";
import { getPhoneNumber } from "@/lib/settings";

/**
 * GET /api/phone-number
 *
 * Returns the business phone number from Supabase.
 * Used by client components (via usePhoneNumber hook).
 *
 * Response: { phone_number: string }
 */
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET() {
  try {
    const phone_number = await getPhoneNumber();
    return NextResponse.json({ phone_number }, { headers: CACHE_HEADERS });
  } catch (error) {
    console.error("[api/phone-number] Error:", error);
    return NextResponse.json(
      {
        phone_number: process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "",
        error: "Failed to fetch phone number, using fallback",
      },
      { status: 200, headers: CACHE_HEADERS },
    );
  }
}
