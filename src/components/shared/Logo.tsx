import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Tailwind sizing utilities applied to the logo image (height drives the size; width stays auto). */
  className?: string;
  /** Link target. Pass `null` to render the image without a link wrapper. */
  href?: string | null;
  /**
   * Kept for backwards compatibility with call sites that still pass
   * width/height. Ignored — the image always uses its true intrinsic ratio
   * so the aspect ratio is preserved (no stretching, no CLS).
   */
  width?: number;
  height?: number;
  /** Eagerly preload the image (Next 16 replacement for the deprecated `priority`). */
  preload?: boolean;
}

/**
 * The brand wordmark asset and its TRUE intrinsic dimensions.
 * `site-logo.png` is a wide horizontal wordmark (icon + "IPTV" + tagline).
 * The real pixel ratio is 2749×700 (~3.93:1) — declaring the correct ratio is
 * essential so `w-auto` derives the proper width and the mark is never
 * letterboxed/shrunk inside a mismatched box (and keeps CLS at zero).
 */
const LOGO_SRC = "/images/big-logo-site.png";
const LOGO_WIDTH = 2000;
const LOGO_HEIGHT = 700;

/**
 * Single source of truth for the IPTV Amsterdam brand mark.
 *
 * Renders the official brand image (`site-logo.png`) only. The image keeps its
 * native aspect ratio and is sized via the `className` height utility — never
 * stretched. The transparent PNG sits cleanly on the dark navbar/footer.
 */
const Logo = ({
  className = "h-11 w-auto sm:h-12",
  href = "/",
  preload = false,
}: LogoProps) => {
  const mark = (
    <Image
      src={LOGO_SRC}
      alt="IPTV Amsterdam"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      preload={preload}
      // Height-driven sizing keeps the true 3.93:1 ratio; w-auto follows it.
      className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );

  if (href === null) {
    return (
      <span className="group inline-flex shrink-0 items-center">{mark}</span>
    );
  }

  return (
    <Link
      href={href}
      className="group flex shrink-0 items-center"
      aria-label="IPTV Amsterdam – Startpagina"
    >
      {mark}
    </Link>
  );
};

export default Logo;
