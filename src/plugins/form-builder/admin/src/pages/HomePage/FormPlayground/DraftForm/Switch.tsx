import React from 'react';

import { Box, Switch as MuiSwitch, FormControlLabel, FormGroup } from '@mui/material';

import { FormConfig } from '../../store';

const colorOptions = ['primary', 'secondary', 'error', 'info', 'success', 'warning'];

type SwitchProps = FormConfig;

export const Switch = (props: SwitchProps) => {
  return (
    <Box>
      <FormGroup row>
        <FormControlLabel
          sx={{ m: 0 }}
          control={
            <MuiSwitch
              size={props.options.dense ? 'small' : 'medium'}
              color={
                colorOptions.includes(props.options.color)
                  ? props.options.color
                  : 'primary'
              }
            />
          }
          label={props.options.label}
          labelPlacement="start"
        />
      </FormGroup>
    </Box>
  );
};
