import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { formConfigAtom } from "./store";
import { useAtomValue } from "jotai";
import { isEmpty } from "lodash-es";
import { DraftForm } from "./FormPlayground/DraftForm";
export const FormPlayground = forwardRef((_, ref) => {
  const formConfig = useAtomValue(formConfigAtom);
  console.log("==> formConfig ==>", formConfig);
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
        <DraftForm />
      )}
    </Box>
  );
});

FormPlayground.displayName = "FormPlayground";
