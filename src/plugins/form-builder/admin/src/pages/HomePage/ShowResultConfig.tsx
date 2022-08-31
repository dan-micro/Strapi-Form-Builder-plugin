import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { formConfigAtom } from "./store";
import ReactJson from "react-json-view";
import { cloneDeep, compact, isArray } from "lodash-es";

interface ShowResultConfigProps {
  onClose: () => void;
}
export const ShowResultConfig = (props: ShowResultConfigProps) => {
  const formConfig = useAtomValue(formConfigAtom);

  const _formConfig = cloneDeep(formConfig);
  const result = _formConfig.map((conf) => {
    if (conf.interfaceComponent === "grid") {
      return compact(
        conf.options.columns.map((column) => {
          if (isArray(column)) {
            const elementConfig = column[1];
            const elementColumnSize = column[0];
            elementConfig.options = {
              ...elementConfig.options,
              column: `col_${elementColumnSize}`,
            };
            return elementConfig;
          }
          return undefined;
        })
      );
    }
    return conf;
  });

  return (
    <Stack>
      <Dialog open={true} onClose={props.onClose} fullWidth>
        <DialogContent sx={{ height: "80vh" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Result
          </Typography>
          <Divider />
          <Box sx={{ pt: 3 }}>
            <ReactJson theme="monokai" enableClipboard src={formConfig} />
          </Box>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
