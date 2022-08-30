import { FormConfig } from "../store";

export const addNewFormConfig = (
  formConfigs: FormConfig[],
  newElementConfig: FormConfig,
  path?: string
) => {
  if (!path) {
    return formConfigs.concat([newElementConfig]);
  }

  const _formConfigs = [...formConfigs];
  const pathArr = path.split("_");
  let elementConfig = newElementConfig;

  if (path.length > 1) {
    elementConfig = { ...formConfigs[pathArr[0]] };
    elementConfig.options.columns[pathArr[1]] = [
      elementConfig.options.columns[0],
      newElementConfig,
    ];
  }

  _formConfigs.splice(+pathArr[0], 1, elementConfig);

  return _formConfigs;
};
