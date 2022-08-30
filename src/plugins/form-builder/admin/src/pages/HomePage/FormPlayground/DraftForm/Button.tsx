import React from "react";
import { FormConfig } from "../../store";
import { Button as MuiButton } from "@mui/material";

// TODO: `Icon` & `Square` & `Prefix` & `Suffix` <== these props left will add in the next iteration.
type ButtonProps = FormConfig;
export const Button = (props: ButtonProps) => {
  return (
    <MuiButton variant={props.options.outlined ? "outlined" : "contained"}>
      {props.options.label}
    </MuiButton>
  );
};
