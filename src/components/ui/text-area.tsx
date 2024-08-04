'use client';
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Asegúrate de que esta función esté correctamente definida
import { motion } from "framer-motion";

const textAreaVariants = cva(
  "w-full p-1 text-base resize-none transition-colors focus-visible:outline-none", {
  variants: {
    variant: {
      default: "border border-gray-300 rounded-md",
      base: "border-none bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textAreaVariants> {
  asChild?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp: any = motion.textarea;
    return (
      <Comp
        className={cn(textAreaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";

export { TextArea, textAreaVariants };
