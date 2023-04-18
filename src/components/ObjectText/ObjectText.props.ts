import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ObjectTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objKey: string;
  objValue: string;
}
