import { atom } from "jotai";

export interface FormConfig {
  title: string;
  name: string;
  widgetType: string;
  options: Record<string, any>;
}

export const formConfigAtom = atom<FormConfig[]>([]);

export const formBuildModalAtom = atom<string>("");
