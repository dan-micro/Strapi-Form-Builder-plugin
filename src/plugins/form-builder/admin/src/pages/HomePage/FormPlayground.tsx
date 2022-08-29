import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { formConfigAtom } from "./store";
import { useAtomValue } from "jotai";
import { isEmpty } from "lodash-es";
import { DraftForm } from "./FormPlayground/DraftForm";

interface FormPlaygroundProps {
  addFormFields: (ref: HTMLDivElement) => void;
}

export const FormPlayground = forwardRef<HTMLDivElement, FormPlaygroundProps>(
  ({ addFormFields }, ref) => {
    const formConfig = useAtomValue(formConfigAtom);
    return (
      <Box
        ref={ref}
        sx={{
          flex: 1,
          minWidth: "400px",
          borderRadius: 2,
          p: 2,
          border: "2px dashed #000",
          mx: 2,
        }}
      >
        {isEmpty(formConfig) ? (
          <Typography>Empty Playground</Typography>
        ) : (
          <DraftForm addFormFields={addFormFields} />
        )}
      </Box>
    );
  }
);

FormPlayground.displayName = "FormPlayground";
