import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { WidgetTypeOptionProps } from "../WidgetTypeOption";
import { OptionWrapper } from "./OptionWrapper";

type EnumOptionProps = WidgetTypeOptionProps;
export const EnumOption = (props: EnumOptionProps) => {
  return (
    <OptionWrapper label={props.name}>
      <Select
        fullWidth
        defaultValue={props.defaultValue}
        inputProps={{ id: props.name }}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.values.split(", ").map((val) => (
          <MenuItem value={val}>{val}</MenuItem>
        ))}
      </Select>
    </OptionWrapper>
  );
};
