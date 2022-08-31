import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  Stack,
} from "@mui/material";
import { FormConfig } from "../../store";

// TODO: `Rounded` & `Square` & `Prefix` & `Suffix` <== these props left will add in the next iteration.

type SelectProps = FormConfig;
const colorOptions = [
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];
export const Select = (props: SelectProps) => {
  return (
    <FormControl>
      <InputLabel id={props.options.label}>{props.options.label}</InputLabel>
      <MuiSelect
        labelId={props.options.label}
        size={props.options.dense ? "small" : "medium"}
        variant={
          props.options.filled
            ? "filled"
            : props.options.outlined
            ? "outlined"
            : "standard"
        }
        color={
          colorOptions.includes(props.options.color)
            ? props.options.color
            : "primary"
        }
      >
        {[].map((menuItem) => (
          <MenuItem value={menuItem}>{menuItem}</MenuItem>
        ))}
      </MuiSelect>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 0.5 }}
      >
        {props.options.hint && (
          <FormHelperText>{props.options.hint}</FormHelperText>
        )}
      </Stack>
    </FormControl>
  );
};
