import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface NavBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  active: "active" | "notactive";
}
