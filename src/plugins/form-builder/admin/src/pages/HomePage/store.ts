import { atom } from "jotai";

export interface FormConfig {
  title: string;
  name: string;
  widgetType: string;
  interfaceComponent: string;
  options: Record<string, any>;
}

export const formConfigAtom = atom<FormConfig[]>([]);
interface FormBuildModal {
  mode: "create" | "edit";
  interfaceComponent: string;
  predefinedValues: Record<string, any>;
  title: string;
  idx: number;
}

export const formBuildModalAtom = atom<Partial<FormBuildModal>>({});
