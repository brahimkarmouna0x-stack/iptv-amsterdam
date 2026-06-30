"use client";
import { memo, useCallback } from "react";
import { Monitor, Users } from "lucide-react";

interface ConnectionSelectorProps {
  active: number;
  onChange: (n: number) => void;
}

export const ConnectionSelector = memo(({ active, onChange }: ConnectionSelectorProps) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="p-1.5 rounded-2xl flex flex-wrap justify-center gap-1 relative z-10 border border-blanc-50/10 bg-blanc-50/[0.04] shadow-[0_18px_44px_-34px_rgba(0,0,0,0.9)]">
        {[1, 2, 3, 4].map((num) => (
          <ConnectionButton
            key={num}
            num={num}
            active={active}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
});

ConnectionSelector.displayName = "ConnectionSelector";

const ConnectionButton = memo(({
  num,
  active,
  onChange,
}: {
  num: number;
  active: number;
  onChange: (n: number) => void;
}) => {
  const Icon = num === 4 ? Users : Monitor;
  const handleClick = useCallback(() => onChange(num), [onChange, num]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
        active === num
          ? "bg-france-500 text-blanc-50"
          : "text-blanc-400 hover:text-blanc-50 hover:bg-blanc-50/5"
      }`}
    >
      <Icon
        size={13}
        className={active === num ? "opacity-100" : "opacity-50"}
        aria-hidden="true"
      />
      {num === 4
        ? "4+ schermen"
        : `${num} ${num === 1 ? "scherm" : "schermen"}`}
    </button>
  );
});

ConnectionButton.displayName = "ConnectionButton";
