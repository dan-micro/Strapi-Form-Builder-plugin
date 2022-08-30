import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { isEmpty } from "lodash-es";
import React, { useState } from "react";
import { LoadingData } from "../../components/LoadingData/LoadingData";
import { GridLayout } from "./ConfigModal/GridLayout";
import { Header } from "./ConfigModal/Header";
import { useConfigFormModal } from "./ConfigModal/useConfigFormModal";
import { WidgetTypeOption } from "./ConfigModal/WidgetTypeOption";
import { formBuildModalAtom } from "./store";

export const ConfigModal = () => {
  const formBuildModal = useAtomValue(formBuildModalAtom);
  const [title, setTitle] = useState<string | undefined>(undefined);
  const config = useConfigFormModal(title);

  if (
    !config.dataFetchingStatus.isLoading &&
    isEmpty(config.optionsList) &&
    formBuildModal.interfaceComponent !== "grid"
  ) {
    config.addHandler();
    return <></>;
  }

  const ConfigFormModalWrapper = ({
    children,
    withTitle = false,
  }: {
    children: any;
    withTitle?: boolean;
  }) => (
    <Dialog fullWidth maxWidth="md" open onClose={config.closeHandler}>
      <Header onClose={config.closeHandler} icon={config.widgetMetaData?.icon!}>
        {config.widgetMetaData?.label}
        {withTitle && (
          <TextField
            label="title"
            sx={{ ml: 5 }}
            size="small"
            variant="outlined"
            defaultValue={formBuildModal.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
      </Header>
      <DialogContent dividers>
        <LoadingData
          loading={config.dataFetchingStatus.isLoading}
          error={config.dataFetchingStatus.error}
        >
          {() => children}
        </LoadingData>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
          onClick={config.closeHandler}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
          onClick={
            formBuildModal?.mode === "create"
              ? config.addHandler
              : config.editHandler
          }
        >
          {formBuildModal?.mode === "create" ? "Add" : "Edit"}
        </Button>
      </DialogActions>
    </Dialog>
  );

  if (formBuildModal.interfaceComponent === "grid") {
    return (
      <ConfigFormModalWrapper>
        <GridLayout
          columns={config.options.columns ?? []}
          onChange={config.gridLayoutChangeHandler}
        />
      </ConfigFormModalWrapper>
    );
  }

  return (
    <ConfigFormModalWrapper withTitle>
      <Grid container gap={2}>
        {config.optionsList.map((option) => (
          <Grid item sm={option.attributes.type === "boolean" ? 2.8 : 5.8}>
            <WidgetTypeOption
              key={option.id}
              {...option.attributes}
              value={config.options[option.attributes.name]}
              defaultValue={
                formBuildModal?.predefinedValues?.[option.attributes.name]
              }
              onChange={(val) =>
                config.widgetTypeOptionChangeHandler(
                  option.attributes.name,
                  val
                )
              }
            />
          </Grid>
        ))}
      </Grid>
    </ConfigFormModalWrapper>
  );
};
