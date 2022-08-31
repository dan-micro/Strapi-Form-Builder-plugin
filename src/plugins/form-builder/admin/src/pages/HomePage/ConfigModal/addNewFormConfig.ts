import { cloneDeep } from "lodash-es";
import { FormConfig } from "../store";

export const addNewFormConfig = (
  formConfigs: FormConfig[],
  newElementConfig: FormConfig,
  path: string
) => {
  if (path.length === 0) {
    return formConfigs.concat([newElementConfig]);
  }

  const pathArr = path.split("_");
  const formConfigIndex = +pathArr[0];

  if (pathArr.length > 1) {
    const gridColumnIndex = +pathArr[1];
    const elementConfig = cloneDeep(formConfigs[formConfigIndex]);
    elementConfig.options.columns[gridColumnIndex] = [
      elementConfig.options.columns[gridColumnIndex],
      newElementConfig,
    ];
    formConfigs.splice(formConfigIndex, 1, elementConfig);
  }

  return formConfigs;
};
