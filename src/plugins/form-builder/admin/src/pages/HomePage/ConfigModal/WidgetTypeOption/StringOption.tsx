import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { WidgetTypeOptionProps } from "../WidgetTypeOption";
import { OptionWrapper } from "./OptionWrapper";

type StringOptionProps = WidgetTypeOptionProps;
export const StringOption = (props: StringOptionProps) => {
  return (
    <OptionWrapper label={props.name}>
      <TextField
        fullWidth
        value={props.value ?? ""}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </OptionWrapper>
  );
};
