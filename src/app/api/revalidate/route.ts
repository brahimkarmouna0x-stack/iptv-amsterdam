import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { PHONE_NUMBER_TAG } from "@/lib/settings";

/**
 * On-demand cache invalidation. Call after updating the phone number in Supabase
 * so the cached value (and all statically rendered pages that embed it) refresh
 * immediately instead of waiting for the hourly revalidation window.
 *
 *   POST /api/revalidate?tag=phone-number
 *   Header: Authorization: Bearer <REVALIDATE_SECRET>
 *
 * Defaults to the phone-number tag when none is supplied.
 */
const ALLOWED_TAGS = new Set<string>([PHONE_NUMBER_TAG]);

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { revalidated: false, error: "REVALIDATE_SECRET is not configured" },
      { status: 500 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json(
      { revalidated: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const tag = new URL(request.url).searchParams.get("tag") ?? PHONE_NUMBER_TAG;
  if (!ALLOWED_TAGS.has(tag)) {
    return NextResponse.json(
      { revalidated: false, error: `Tag "${tag}" is not allowed` },
      { status: 400 },
    );
  }

  // Next 16: second arg required — "max" = stale-while-revalidate semantics.
  revalidateTag(tag, "max");
  return NextResponse.json({ revalidated: true, tag, now: Date.now() });
}
