interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Stat figure, shown immediately (no scroll animation) for reliable SSR and Lenis compatibility. */
export function Counter({ value, prefix = "", suffix = "", className }: CounterProps) {
  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
