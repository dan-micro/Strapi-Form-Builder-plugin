import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { Header } from "./Header";
import { LoadingData } from "../../../components/LoadingData/LoadingData";
import { useAtomValue } from "jotai";
import { formBuildModalAtom } from "../store";

export const ConfigFormModalWrapper = ({
  children,
  withTitle = false,
  config,
}: {
  children: any;
  withTitle?: boolean;
  //TODO: Add Type for Config
  config: any;
}) => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const formBuildModal = useAtomValue(formBuildModalAtom);
  return (
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
          onClick={() =>
            formBuildModal?.mode === "create"
              ? config.addHandler(title)
              : config.editHandler(title)
          }
        >
          {formBuildModal?.mode === "create" ? "Add" : "Edit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
