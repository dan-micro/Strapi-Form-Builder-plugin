import React from 'react';

import { Button as MuiButton } from '@mui/material';

import { FormConfig } from '../../store';

const colorOptions = ['primary', 'secondary', 'error', 'info', 'success', 'warning'];
// TODO: `Icon` & `Square` & `Prefix` & `Suffix` <== these props left will add in the next iteration.
type ButtonProps = FormConfig;
export const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      color={colorOptions.includes(props.options.color) ? props.options.color : 'primary'}
      variant={props.options.outlined ? 'outlined' : 'contained'}
    >
      {props.options.label}
    </MuiButton>
  );
};
