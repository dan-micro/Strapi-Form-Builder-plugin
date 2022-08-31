import React, { useMemo } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { formConfigAtom } from "./store";
import ReactJson from "react-json-view";
import { cloneDeep, compact, isArray, isEmpty } from "lodash-es";

interface ShowResultConfigProps {
  onClose: () => void;
}
export const ShowResultConfig = (props: ShowResultConfigProps) => {
  const formConfig = useAtomValue(formConfigAtom);

  const convertedFormConfig = useMemo(
    () =>
      compact(
        cloneDeep(formConfig).flatMap((conf) => {
          if (conf.interfaceComponent === "grid") {
            const rowElementsConfig = compact(
              conf.options.columns.flatMap((column) => {
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
            return !isEmpty(rowElementsConfig) ? rowElementsConfig : undefined;
          }
          return conf;
        })
      ),
    [formConfig]
  );

  console.log("==> convertedFormConfig ==>", convertedFormConfig);
  return (
    <Stack>
      <Dialog open={true} onClose={props.onClose} fullWidth>
        <DialogContent sx={{ height: "80vh" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Result
          </Typography>
          <Divider />
          <Box sx={{ pt: 3 }}>
            <ReactJson
              theme="monokai"
              enableClipboard
              src={convertedFormConfig}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
