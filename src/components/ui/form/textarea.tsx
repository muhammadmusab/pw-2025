import { InputDefaultProps } from "@/types/form";
import * as React from "react";
import { twMerge } from "tailwind-merge";
// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
//     InputDefaultProps {}

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputDefaultProps;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, showMessage = true, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          "flex min-h-[100px] w-full bg-transparent px-3 text-sm shadow-sm focus:ring-primary focus:border-primary rounded-xl border-2 border-gray-200 py-4 pr-4 text-[#111827] transition-all duration-200 outline-none focus:ring-2 placeholder:text-muted-foreground placeholder:ease-in-out placeholder:duration-1000 placeholder:transition-all focus:placeholder:translate-x-[50px] focus:placeholder:opacity-0 placeholder:w-100 placeholder:overflow-hidden overflow-x-hidden ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
