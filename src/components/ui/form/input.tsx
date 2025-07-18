import * as React from "react";
import { twMerge } from "tailwind-merge";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
// export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
//   InputDefaultProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          "focus:ring-primary focus:border-primary rounded-xl border border-gray-200 py-4 pr-4 pl-12 text-[#111827] placeholder-[#6B7280] transition-all duration-200 outline-none focus:ring-2 placeholder:ease-in-out placeholder:duration-1000 placeholder:transition-all focus:placeholder:translate-x-[50px] focus:placeholder:opacity-0 placeholder:w-100 placeholder:overflow-hidden",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
