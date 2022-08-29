import React from "react";
import { Stack, Typography } from "@mui/material";

interface OptionWrapperOption {
  children: any;
  label: string;
}

export const OptionWrapper = (props: OptionWrapperOption) => (
  <Stack direction="row" gap={2} alignItems="center">
    <Typography sx={{ textTransform: "capitalize", flexBasis: "20%" }}>
      {props.label}:
    </Typography>
    {props.children}
  </Stack>
);
