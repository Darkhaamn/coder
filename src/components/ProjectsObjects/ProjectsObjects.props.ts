import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectsObjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  varName: string;
  stackDescr: string;
  stackTitle: string;
  projectTitle: string;
  projectDescription: string;
}
