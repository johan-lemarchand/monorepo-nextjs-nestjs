import { cn } from "@repo/ui/lib/utils";
import type { ComponentPropsWithoutRef, ComponentType } from "react";

type SectionLayoutProps = ComponentPropsWithoutRef<"div"> & {
  size?: "sm" | "base" | "lg";
  variant?: "default" | "card" | "primary" | "invert" | "image";
  containerClassName?: string;
  backgroundImage?: string;
  ImageComponent?: ComponentType<any>;
};

export const SectionLayout = ({
  size = "base",
  variant = "default",
  className,
  containerClassName,
  children,
  backgroundImage,
  ...props
}: SectionLayoutProps) => {
  return (
    <div
      className={cn(
        "relative",
        {
          "bg-background text-foreground": variant === "default",
          "bg-card text-card-foreground": variant === "card",
          "bg-primary text-primary-foreground": variant === "primary",
          "bg-foreground text-background": variant === "invert",
          "text-foreground": variant === "image",
        },
        containerClassName,
      )}
      {...props}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          {props.ImageComponent ? (
            <props.ImageComponent
              src={backgroundImage}
              alt="Background"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              quality={100}
            />
          ) : (
            <img
              src={backgroundImage}
              alt="Background"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          {variant === "image" && (
            <div className="absolute inset-0 backdrop-blur-sm backdrop-brightness-75" />
          )}
        </div>
      )}
      <div
        className={cn(
          "relative z-10 m-auto px-4 py-20 lg:py-28",
          {
            "max-w-4xl": size === "sm",
            "max-w-5xl": size === "base",
            "max-w-6xl": size === "lg",
          },
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
