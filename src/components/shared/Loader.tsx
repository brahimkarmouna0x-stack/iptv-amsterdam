import Image from "next/image";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

const Loader = ({ size = "md", fullScreen = false }: LoaderProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const iconSizes = { sm: 20, md: 36, lg: 56 };

  const loaderContent = (
    <div className="relative flex items-center justify-center">
      {/* Outer spinning ring */}
      <div
        className={`${sizeClasses[size]} rounded-full border-2 border-transparent border-t-france-500 border-r-rouge-500 animate-spin-slow`}
      />

      {/* Inner pulsing logo circle */}
      <div
        className={`absolute ${size === "sm" ? "w-5 h-5" : size === "lg" ? "w-14 h-14" : "w-9 h-9"} overflow-hidden rounded-full bg-france-950 flex items-center justify-center ring-1 ring-blanc-50/10`}
      >
        <Image
          src="/images/logo.png"
          alt="IPTV Amsterdam"
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="h-full w-full object-contain p-1 animate-pulse-gentle"
        />
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-france-500/20 blur-xl rounded-full animate-pulse-gentle`}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-france-950/80 backdrop-blur-md">
        {loaderContent}
        <p className="mt-6 text-blanc-400 font-display font-medium tracking-widest uppercase text-xs animate-pulse">
          IPTV Amsterdam wordt geladen...
        </p>
      </div>
    );
  }

  return loaderContent;
};

export default Loader;
