import { atom } from 'jotai';

export interface FormConfig {
  title: string;
  name: string;
  widgetType: string;
  interfaceComponent: string;
  options: Record<string, any>;
  draggableRefs?: any;
  idx?: number;
}

export const formConfigAtom = atom<FormConfig[]>([]);
export interface FormBuildModal {
  mode: 'create' | 'edit';
  interfaceComponent: string;
  predefinedValues?: Record<string, any>;
  title?: string;
  idx: string;
}

export const formBuildModalAtom = atom<Partial<FormBuildModal>>({});
