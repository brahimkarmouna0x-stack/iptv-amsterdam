/**
 * WhatsApp business phone number.
 *
 * This constant is kept for backward compatibility but will be deprecated.
 * New code should use getPhoneNumber() from @/lib/settings (server)
 * or usePhoneNumber() from @/hooks/usePhoneNumber (client).
 *
 * Falls back to NEXT_PUBLIC_FALLBACK_PHONE env var (no hardcoded default).
 */
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "";

/**
 * Full WhatsApp deep-link URL.
 * Deprecated — prefer dynamic whatsappUrl() from @/lib/settings.
 */
export const WHATSAPP_URL = WHATSAPP_PHONE
  ? `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text&type=phone_number&app_absent=0`
  : "";
