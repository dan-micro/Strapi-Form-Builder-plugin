import { FormConfig } from "../store";

export const addNewFormConfig = (
  formConfigs: FormConfig[],
  newElementConfig: FormConfig,
  path?: string
) => {
  const _formConfigs = [...formConfigs];
  if (!path) {
    return _formConfigs.concat([newElementConfig]);
  }

  const pathArr = path.split("_");
  let elementConfig = newElementConfig;

  if (path.length > 1) {
    const formConfigIndex = pathArr[0];
    const gridColumnIndex = pathArr[1];
    elementConfig = { ..._formConfigs[formConfigIndex] };
    elementConfig.options.columns[gridColumnIndex] = [
      elementConfig.options.columns[gridColumnIndex],
      newElementConfig,
    ];
  }

  _formConfigs.splice(+pathArr[0], 1, elementConfig);

  return _formConfigs;
};
