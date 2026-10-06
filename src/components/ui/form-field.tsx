import type { InputHTMLAttributes, ReactNode, Ref, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* Shared chrome for labelled form fields (React 19: ref is a plain prop). */

const fieldBase =
  "w-full rounded-soft border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

function Shell({
  label,
  error,
  required,
  children,
  hint,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-sm font-semibold text-ink">
        <span>
          {label} {required && <span className="text-gold" aria-hidden="true">*</span>}
        </span>
        {hint && <span className="text-xs font-normal text-muted">{hint}</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-[#B3261E]">
          {error}
        </span>
      )}
    </label>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  ref?: Ref<HTMLInputElement>;
}

export function Input({ label, error, hint, className, required, ...props }: InputProps) {
  return (
    <Shell label={label} error={error} hint={hint} required={required}>
      <input
        {...props}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, error ? "border-[#B3261E]" : "border-navy/15 hover:border-navy/30", className)}
      />
    </Shell>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export function Textarea({ label, error, hint, className, required, ...props }: TextareaProps) {
  return (
    <Shell label={label} error={error} hint={hint} required={required}>
      <textarea
        {...props}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, "min-h-32 resize-y", error ? "border-[#B3261E]" : "border-navy/15 hover:border-navy/30", className)}
      />
    </Shell>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  hint?: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder?: string;
  ref?: Ref<HTMLSelectElement>;
}

export function Select({ label, error, hint, options, placeholder, className, required, ...props }: SelectProps) {
  return (
    <Shell label={label} error={error} hint={hint} required={required}>
      <select
        {...props}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(
          fieldBase,
          "appearance-none bg-chevron-down bg-[position:right_1rem_center] bg-no-repeat pr-10",
          error ? "border-[#B3261E]" : "border-navy/15 hover:border-navy/30",
          className,
        )}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </Shell>
  );
}
