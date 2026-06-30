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
export async function GET() {
  try {
    const phone_number = await getPhoneNumber();
    return NextResponse.json({ phone_number });
  } catch (error) {
    console.error("[api/phone-number] Error:", error);
    // Return fallback phone number with 200 OK to keep client functional

    return NextResponse.json(
      {
        phone_number: process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "",
        error: "Failed to fetch phone number, using fallback",
      },
      { status: 200 },
    );
  }
}
