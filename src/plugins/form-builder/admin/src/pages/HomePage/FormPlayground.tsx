import { Box } from "@mui/material";
import React, { forwardRef } from "react";
export const FormPlayground = forwardRef((_, ref) => {
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
    ></Box>
  );
});

FormPlayground.displayName = "FormPlayground";
