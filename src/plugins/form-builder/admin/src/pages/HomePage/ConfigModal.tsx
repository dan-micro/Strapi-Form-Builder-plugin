import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { isEmpty, reverse, sortBy } from "lodash-es";
import React, { useState } from "react";
import { getWidgetsTypes } from "../../api/widgets/getWidgetsTypes";
import { LoadingData } from "../../components/LoadingData/LoadingData";
import { Header } from "./ConfigModal/Title";
import { WidgetTypeOption } from "./ConfigModal/WidgetTypeOption";
import { controlElementsConfig } from "./FormController/controlElementsConfig";
import { formBuildModalAtom, formConfigAtom } from "./store";

export const ConfigModal = () => {
  const [formBuildModal, setFormBuildModal] = useAtom(formBuildModalAtom);
  const [formConfig, setFormConfig] = useAtom(formConfigAtom);
  const [options, setOptions] = useState<Record<string, any>>({});

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

  const closeHandler = () => setFormBuildModal(undefined);

  const addHandler = () => {
    setFormConfig(
      formConfig.concat([
        {
          widgetType: widgetTypeOptions.id,
          name: widgetTypeOptions.attributes.name,
          interfaceComponent: widgetTypeOptions.attributes.interfaceComponent,
          options,
          title: "",
        },
      ])
    );
    closeHandler();
  };

  if (!isLoading && isEmpty(optionsList)) {
    addHandler();
    return <></>;
  }

  const widgetTypeOptionChangeHandler = (name: string, val: any) => {
    setOptions((prev) => ({ ...prev, [name]: val }));
  };

  const editHandler = () => {
    console.log("==> editHandler ==>");
  };
  // console.log("==> formBuildModal ==>", formBuildModal);
  return (
    <Dialog fullWidth maxWidth="md" open onClose={closeHandler}>
      <Header onClose={closeHandler} icon={widgetMetaData?.icon!}>
        {widgetMetaData?.label}
      </Header>
      <DialogContent dividers>
        <LoadingData loading={isLoading} error={error}>
          {() => (
            <Grid container gap={2}>
              {optionsList.map((option) => {
                return (
                  <Grid
                    item
                    sm={option.attributes.type === "boolean" ? 2.8 : 5.8}
                  >
                    <WidgetTypeOption
                      key={option.id}
                      {...option.attributes}
                      value={options[option.attributes.name]}
                      defaultValue={
                        formBuildModal?.predefinedValues?.[
                          option.attributes.name
                        ]
                      }
                      onChange={(val) =>
                        widgetTypeOptionChangeHandler(
                          option.attributes.name,
                          val
                        )
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </LoadingData>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
          onClick={closeHandler}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
          onClick={formBuildModal?.mode === "create" ? addHandler : editHandler}
        >
          {formBuildModal?.mode === "create" ? "Add" : "Edit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
