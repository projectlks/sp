import React, { SelectHTMLAttributes, useId } from "react";
import {
  ChevronDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

interface SelectOption {
  value: string | number;
  label: string;
}

interface EnterpriseSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
}

const EnterpriseSelect: React.FC<EnterpriseSelectProps> = ({
  options,
  placeholder = "တစ်ခုရွေးချယ်ပါ",
  error,
  helperText,
  disabled,
  className = "",
  ...props
}) => {
  const id = useId();

  const selectClasses = [
    // Base Styles - Bakery theme နှင့်ကိုက်ညီသော နွေးထွေးသည့် အရောင်များ
    "block w-full rounded-md border  pl-4 pr-10 py-2.5 text-sm transition-all duration-200 ease-in-out",
    "appearance-none",
    // "bg-[#fdfcf8]", // ပုံစံတူ နွေးထွေးသော Off-white နောက်ခံ
  
    // Focus Styles - ရိုးရှင်းသပ်ရပ်သော အညိုရင့်ရောင် (Stone)
    "focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600",

    // Disabled Styles
    disabled
      ? "bg-stone-100 cursor-not-allowed text-stone-400 border-stone-200 "
      : "",

    // Error vs Normal Styles
    error
      ? "border-red-800 text-red-900 focus:border-red-800 focus:ring-red-200"
      : "border-stone-300 text-stone-800 hover:border-stone-400",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`w-full my-10 max-w-60 ${className}`}>
      <div className="relative">
        <select
          id={id}
          disabled={disabled}
          className={selectClasses}
          defaultValue=""
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-description` : undefined
          }
          {...props}>
          <option value="" disabled hidden>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-sm text-stone-800 bg-[#fdfcf8]">
              {option.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {error ? (
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-800"
              aria-hidden="true"
            />
          ) : (
            <ChevronDownIcon
              className="h-5 w-5 text-stone-500 transition-colors duration-200 group-hover:text-stone-700"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSelect;
