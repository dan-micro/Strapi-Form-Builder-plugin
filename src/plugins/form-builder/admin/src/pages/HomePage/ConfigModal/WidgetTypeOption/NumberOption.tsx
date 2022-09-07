import React from 'react';

import { TextField } from '@mui/material';

import { WidgetTypeOptionProps } from '../WidgetTypeOption';

import { OptionWrapper } from './OptionWrapper';

type NumberOptionProps = WidgetTypeOptionProps;
export const NumberOption = (props: NumberOptionProps) => {
  return (
    <OptionWrapper label={props.name}>
      <TextField
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChange(e.target.value)}
        label={props.name}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
    </OptionWrapper>
  );
};
