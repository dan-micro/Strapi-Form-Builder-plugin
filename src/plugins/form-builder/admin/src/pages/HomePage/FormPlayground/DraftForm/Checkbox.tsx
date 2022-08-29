import React from "react";
import { FormConfig } from "../../store";
import {
  Box,
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
type CheckboxProps = FormConfig;

export const Checkbox = (props: CheckboxProps) => {
  return (
    <Box>
      <FormGroup row>
        <FormControlLabel
          sx={{ m: 0 }}
          control={
            <MuiCheckbox
              size={props.options.dense ? "small" : "medium"}
              color={props.options.color}
            />
          }
          label={props.options.label}
          labelPlacement="start"
        />
      </FormGroup>
    </Box>
  );
};
