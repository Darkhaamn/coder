import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface VarTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  varname: string;
  text?: string | ReactNode;
  between?: string;
}
