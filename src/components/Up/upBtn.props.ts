import { ButtonHTMLAttributes, DetailedHTMLProps, RefObject } from "react";

export interface upBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  scrollref: RefObject<HTMLElement>;
}
