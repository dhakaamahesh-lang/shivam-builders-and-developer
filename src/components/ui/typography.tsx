import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-white", {
  variants: {
    variant: {
      h1: "typography-h1",
      h2: "typography-h2",
      h3: "typography-h3",
      h4: "typography-h4",
      h5: "typography-h5",
      h6: "typography-h6",

      p20: "typography-p20",
      p20m: "typography-p20m",

      p18: "typography-p18",
      p18m: "typography-p18m",

      p17: "typography-p17",

      p16: "typography-p16",
      p16m: "typography-p16m",
    },
  },
  defaultVariants: {
    variant: "p16",
  },
});

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export function Typography({
  as: Comp = "p",
  variant,
  className,
  ...props
}: TypographyProps) {
  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
}
