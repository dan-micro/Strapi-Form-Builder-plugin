import React from 'react';

import { TextField } from '@mui/material';

import { WidgetTypeOptionProps } from '../WidgetTypeOption';

import { OptionWrapper } from './OptionWrapper';

type StringOptionProps = WidgetTypeOptionProps;
export const StringOption = (props: StringOptionProps) => {
  return (
    <OptionWrapper label={props.name}>
      <TextField
        fullWidth
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </OptionWrapper>
  );
};
