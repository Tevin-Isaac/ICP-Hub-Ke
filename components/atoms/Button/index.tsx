import useMobileDeviceDetection from "hooks/useMobileDetection";
import React, { forwardRef, MouseEventHandler } from "react";

interface ButtonProps {
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: "normal" | "small";
  style?: "light" | "outline" | "solid";
  color?: "white" | "primary" | "#313131" | "#5E2222" | "#F0BC39" | "#5E2323";
  radius?: "pill" | "rounded";
}

const Button = forwardRef(
  (
    {
      value,
      onClick = () => {},
      size = "normal",
      style = "solid",
      color = "primary",
      radius = "rounded",
    }: ButtonProps,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    const isMobile = useMobileDeviceDetection();

    const getSizeStyles = (): string => {
      switch (size) {
        case "normal":
          return "px-14 py-4 text-base font-semibold";
        case "small":
          return "px-8 py-2.5 text-sm font-medium";
      }
    };

    const getStyleStyles = (): string => {
      switch (style) {
        case "light":
          switch (color) {
            case "primary":
              return "bg-primaryLight text-white hover:brightness-90";
            case "white":
              return "bg-buttonLight text-white hover:brightness-90";
            case "#313131":
              return "bg-[#313131] text-white hover:brightness-90";
            case "#5E2222":
              return "bg-[#5E2222] text-white hover:brightness-90";
            case "#F0BC39":
              return "bg-[#F0BC39] text-#5E2323 hover:brightness -90";
            case "#5E2323":
              return "bg-[#5E2323] text-white hover:brightness-90";
          }
        case "outline":
          switch (color) {
            case "primary":
              return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";
            case "white":
              return "bg-transparent text-white border border-white hover:bg-white hover:text-dark";
            case "#313131":
              return "bg-transparent text-[#313131] border border-[#313131] hover:bg-[#313131] hover:text-white";
            case "#5E2222":
              return "bg-transparent text-[#5E2222] border border-[#5E2222] hover:bg-[#5E2222] hover:text-white";
            case "#F0BC39":
              return "bg-transparent text-[#F0BC39] border border-[#F0BC39] hover:bg-[#F0BC39] hover:text-#5E2323";
            case "#5E2323":
              return "bg-transparent text-[#5E2323] border border-[#5E2323] hover:bg-[#5E2323] hover:text-white";
          }
        case "solid":
          switch (color) {
            case "primary":
              return "bg-primary text-white hover:brightness-90";
            case "white":
              return "bg-white text-dark hover:brightness-90";
            case "#313131":
              return "bg-[#313131] text-white hover:brightness-90";
            case "#5E2222":
              return "bg-[#5E2222] text-white hover:brightness-90";
            case "#F0BC39":
              return "bg-[#F0BC39] text-#5E2323 hover:brightness -90";
            case "#5E2323":
              return "bg-[#5E2323] text-white hover:brightness-90";
          }
      }
    };

    const getRadiusStyles = (): string => {
      switch (radius) {
        case "rounded":
          return "rounded";
        case "pill":
          return "rounded-full";
      }
    };

    return (
      <button
        className={`${getSizeStyles()} ${getStyleStyles()} ${getRadiusStyles()} transition-all select-none ${
          isMobile ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
export type { ButtonProps };
