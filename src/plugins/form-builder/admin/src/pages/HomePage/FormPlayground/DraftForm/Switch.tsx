import React from "react";
import { FormConfig } from "../../store";
import {
  Box,
  Switch as MuiSwitch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
type SwitchProps = FormConfig;

export const Switch = (props: SwitchProps) => {
  return (
    <Box>
      <FormGroup row>
        <FormControlLabel
          sx={{ m: 0 }}
          control={
            <MuiSwitch
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
