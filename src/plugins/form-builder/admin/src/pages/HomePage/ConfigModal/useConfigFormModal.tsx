import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { reverse, sortBy } from "lodash-es";
import { getWidgetsTypes } from "../../../api/widgets/getWidgetsTypes";
import { controlElementsConfig } from "../FormController/controlElementsConfig";
import { formBuildModalAtom, FormConfig, formConfigAtom } from "../store";
import { addNewFormConfig } from "./addNewFormConfig";
export const useConfigFormModal = (title?: string) => {
  const [options, setOptions] = useState<Record<string, any>>({});
  const [formConfig, setFormConfig] = useAtom(formConfigAtom);
  const [formBuildModal, setFormBuildModal] = useAtom(formBuildModalAtom);
  const { data, isLoading, error } = useQuery(["getWidgetsTypes"], () =>
    getWidgetsTypes()
  );

  const widgetTypeOptions = (data ?? []).find(
    (d) =>
      d.attributes.interfaceComponent === formBuildModal?.interfaceComponent
  );

  const optionsList =
    widgetTypeOptions &&
    reverse(
      sortBy(
        widgetTypeOptions.attributes.widgetTypeOptions.data,
        (d) => d.attributes.type
      )
    );

  const widgetMetaData = controlElementsConfig.find(
    (cec) => cec.name === formBuildModal?.interfaceComponent
  );

  const closeHandler = () => setFormBuildModal({});

  const addHandler = () => {
    const newElementConfig: FormConfig =
      formBuildModal.interfaceComponent === "grid"
        ? {
            interfaceComponent: "grid",
            name: "grid",
            title: "__strapiPlugin___Grid",
            widgetType: "00",
            options,
          }
        : {
            widgetType: widgetTypeOptions.id,
            name: widgetTypeOptions.attributes.name,
            interfaceComponent: widgetTypeOptions.attributes.interfaceComponent,
            options,
            title: title ?? "",
          };
    setFormConfig(
      addNewFormConfig(formConfig, newElementConfig, formBuildModal.idx)
    );
    closeHandler();
  };

  const widgetTypeOptionChangeHandler = (name: string, val: any) => {
    setOptions((prev) => ({ ...prev, [name]: val }));
  };

  const editHandler = () => {
    setFormConfig((prev) => {
      const newPrev = [...prev];
      const configIdx = formBuildModal.idx!;
      const preFormElementConfig = newPrev[configIdx];
      const newFormElementConfig = {
        interfaceComponent: formBuildModal.interfaceComponent!!,
        name: preFormElementConfig.name,
        title: title ?? formBuildModal.title ?? "",
        widgetType: preFormElementConfig.widgetType,
        options: {
          ...(formBuildModal.predefinedValues ?? {}),
          ...options,
        },
      };
      newPrev.splice(+configIdx.split("_")[0], 1, newFormElementConfig);
      return newPrev;
    });

    closeHandler();
  };

  const gridLayoutChangeHandler = (columns: number[]) => {
    setOptions((prev) => ({
      ...prev,
      columns,
    }));
  };
  return {
    gridLayoutChangeHandler,
    options,
    dataFetchingStatus: { isLoading, error },
    getWidgetsTypes,
    optionsList,
    widgetMetaData,
    closeHandler,
    addHandler,
    editHandler,
    widgetTypeOptionChangeHandler,
  };
};
