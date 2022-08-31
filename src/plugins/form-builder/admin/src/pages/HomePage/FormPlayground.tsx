import { Box, Stack, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { formConfigAtom } from "./store";
import { useAtomValue } from "jotai";
import { isEmpty } from "lodash-es";
import { DraftForm } from "./FormPlayground/DraftForm";
import FormatOverlineIcon from "@mui/icons-material/FormatOverline";
interface FormPlaygroundProps {
  addFormFields: (ref: HTMLDivElement) => void;
  addDragFields: (ref: HTMLDivElement) => void;
}

export const FormPlayground = forwardRef<HTMLDivElement, FormPlaygroundProps>(
  ({ addFormFields, addDragFields }, ref) => {
    const formConfig = useAtomValue(formConfigAtom);
    return (
      <Box
        ref={ref}
        sx={{
          flex: 1,
          minWidth: "400px",
          borderRadius: 2,
          p: 2,
          border: "2px dashed #a3a3a3",
          mx: 2,
        }}
      >
        {isEmpty(formConfig) ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            <FormatOverlineIcon sx={{ fontSize: "10rem", fill: "green" }} />
            <Typography
              textAlign="center"
              variant="h2"
              sx={{
                color: "green",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Playground
            </Typography>
          </Stack>
        ) : (
          <DraftForm
            addFormFields={addFormFields}
            addDragFields={addDragFields}
          />
        )}
      </Box>
    );
  }
);

FormPlayground.displayName = "FormPlayground";
