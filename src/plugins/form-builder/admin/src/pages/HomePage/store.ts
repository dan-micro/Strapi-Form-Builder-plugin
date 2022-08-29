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
  predefinedValues?: Record<string, any>;
}

export const formBuildModalAtom = atom<FormBuildModal | undefined>({
  mode: "create",
  interfaceComponent: "input",
});
